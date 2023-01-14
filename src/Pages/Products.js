import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import CardComp from "../Components/CardComp";
import { useAuth0 } from "@auth0/auth0-react";

function Products(props) {
  const [prodList, setProdList] = useState([]);
  const { user } = useAuth0();
  const getApiCall = async () => {
      let prodsData = await axios.get(`http://localhost:3001/product?username=${user.email}`);
      setProdList(prodsData.data);
    };

  useEffect(() => {
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
