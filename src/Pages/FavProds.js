import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import FavCard from "../Components/FavCard";
import { useAuth0 } from "@auth0/auth0-react";

function FavProds(props) {

  const [prodList, setProdList] = useState([]);
  const { user } = useAuth0();
  const [serverURL, setServerURL] = useState(process.env.REACT_APP_SERVER);

  useEffect(() => {

    const getApiCall = async () => {
      let prodsData = await axios.get(
        `${serverURL}/product?username=${user.email || user.nickname}`
      );
      setProdList(prodsData.data);
    };

    getApiCall();
  }, [user]);

  return (
    <div>
      <h1>My Favourite Products</h1>
      <div
        style={{
          display: "flex",
          flexFlow: "row",
          flexWrap: "wrap",
          padding: "4rem",
        }}
      >
        {prodList.length > 0 ? (
          prodList.map((item, idx) => {
            return <FavCard item={item} key={idx} setProdList={setProdList} username={user.email || user.nickname} serverURL={serverURL} />;
          })
        ) : (
          <h3>The List is Empty.</h3>
        )}
      </div>
    </div>
  );
}

export default FavProds;
