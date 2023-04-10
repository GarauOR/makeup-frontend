import { useEffect } from "react";
import React from "react";
import axios from "axios";
import CardList from "../Components/CardList";

function Products(props) {
  const serverLink = process.env.REACT_APP_SERVER;

  useEffect(() => {
    const getApiCall = async () => {
      const storedData = await axios.get(`${serverLink}/stored`);
      if (storedData.data.length > props.prodList.length) {
        props.setProdList(storedData.data);
        props.setSearchList(storedData.data);
      } else if (
        storedData.data.length === props.prodList.length &&
        storedData.data.length > 0
      ) {
        props.setProdList(storedData.data);
        props.setSearchList(storedData.data);
      } else {
        const prodsData = await axios.get(`${serverLink}/prodList`);
        props.setProdList(prodsData.data);
        props.setSearchList(prodsData.data);
        prodsData.data.map((item) => {
          const req = {
            name: item.name,
            brand: item.brand,
            price: item.price,
            api_featured_image: item.api_featured_image,
            description: item.description,
            product_type: item.product_type,
            product_link: item.product_link
          };
          const loadList = async () => {
            await axios.post(`${serverLink}/stored`, req);
          };
          loadList();
        });
      }
    };
    getApiCall();
  }, []);

  return (
    <div style={{width: "100%", textAlign: "center"}}>
      <h1 className="title">PRODUCTS</h1>
      <div
        style={{
          display: "flex",
          flexFlow: "row",
          flexWrap: "wrap",
          padding: "4rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {props.prodList.map((item, idx) => {
          if (props.filterValue === "") {
            return <CardList item={item} key={idx} serverLink={serverLink} />;
          } else {
            if (props.filterValue === item.product_type) {
              return <CardList item={item} key={idx} serverLink={serverLink} />;
            }
          }
        })}
      </div>
    </div>
  );
}

export default Products;
