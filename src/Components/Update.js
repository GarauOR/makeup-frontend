import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

function Update(id, prod, setProdList) {
  const { user } = useAuth0();

  const updateItemByID = async () => {
    let updateProdCall = await axios.put(
      `http://localhost:3001/product/${id}?username=${user.email || user.nickname}`,
      prod
    );
    setProdList(updateProdCall.data);
  };
  updateItemByID();
}

export default Update;
