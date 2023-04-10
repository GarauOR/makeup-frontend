import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import FavCard from "../Components/FavCard";
import { useAuth0 } from "@auth0/auth0-react";

function FavProds(props) {
  const [prodList, setProdList] = useState([]);
  const { user } = useAuth0();

  useEffect(() => {
    const getApiCall = async () => {
      if (user) {
        let prodsData = await axios.get(
          `${process.env.REACT_APP_SERVER}/product?username=${
            user.email || user.nickname
          }`
        );
        setProdList(prodsData.data);
      }
    };

    getApiCall();
  }, [user, prodList]);

  return (
    <div style={{width: "100%", textAlign: "center"}}>
      <h1 className="title">MY FAVOURITE PRODUCTS</h1>
      <div
        style={{
          display: "flex",
          flexFlow: "row",
          flexWrap: "wrap",
          padding: "4rem",
          justifyContent: "center",
        }}
      >
        {prodList.length > 0 ? (
          prodList.map((item, i) => {
            return (
              <FavCard
                item={item}
                indx={i.toString()}
                setProdList={setProdList}
                username={user.email || user.nickname}
                serverURL={process.env.REACT_APP_SERVER}
              />
            );
          })
        ) : (
          <h3>The List is Empty.</h3>
        )}
      </div>
    </div>
  );
}

export default FavProds;
