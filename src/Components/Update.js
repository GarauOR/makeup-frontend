import axios from "axios";

function Update(id, prod, setProdList) {
  const updateItemByID = async () => {
    let updateProdCall = await axios.put(
      `http://localhost:3001/product/${id}`,
      prod
    );
    setProdList(updateProdCall.data);
  };
  updateItemByID();
}

export default Update;
