import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import CardComp from "../Components/CardComp";

function Products(props) {
  const [prodList, setProdList] = useState([]);

  useEffect(() => {
    const getApiCall = async () => {
      let prodsData = await axios.get("http://localhost:3001/product");
      setProdList(prodsData.data);
    };
    getApiCall();
  }, []);

  return (
    <div>
      <h1>Product list</h1>
      <div
        style={{
          display: "flex",
          flexFlow: "row",
          flexWrap: "wrap",
          padding: "4rem",
        }}
      >
        {prodList.length>0 ? (
          prodList.map((item, idx) => {return(
            <CardComp item={item} key={idx} setProdList={setProdList} />);
          })
        ) : (
          <h3>The List is Empty.</h3>
        )}
      </div>
    </div>
  );
}

export default Products;
