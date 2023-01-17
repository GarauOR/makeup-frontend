import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import CardList from "../Components/CardList";

function Products(props) {

  const [prodList, setProdList] = useState([]);
  const [serverLink, setServerLink] = useState(process.env.REACT_APP_SERVER);

  useEffect(() => {

    const getApiCall = async () => {
      let prodsData = await axios.get(
        `${serverLink}/prodList`
      );
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
        {prodList.map((item, idx) => {
            return <CardList item={item} key={idx} serverLink={serverLink} />;
          })
        }
      </div>
    </div>
  );
}

export default Products;
