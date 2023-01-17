import axios from "axios";

function Update(id, prod, setProdList, username, serverURL) {
  
  const updateItemByID = async () => {
    let updateProdCall = await axios.put(
      `${serverURL}/product/${id}?username=${username}`,
      prod
    );
    setProdList(updateProdCall.data);
  };
  updateItemByID();
}

export default Update;
