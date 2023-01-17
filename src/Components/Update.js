import axios from "axios";

function Update(id, prod, setProdList, username) {


  const updateItemByID = async () => {
    let updateProdCall = await axios.put(
      `${REACT_APP_SERVER_URL}/product/${id}?username=${username}`,
      prod
    );
    setProdList(updateProdCall.data);
  };
  updateItemByID();
}

export default Update;
