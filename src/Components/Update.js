import axios from "axios";

function Update(id, prod, setProdList, username) {


  const updateItemByID = async () => {
    let updateProdCall = await axios.put(
      `http://localhost:3001/product/${id}?username=${username}`,
      prod
    );
    setProdList(updateProdCall.data);
  };
  updateItemByID();
}

export default Update;
