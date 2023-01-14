import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

function Delete(props) {
  const { user } = useAuth0();

  const deleteItemByID = async () => {
    let deleteProdCall = await axios.delete(
      `http://localhost:3001/product/${props.item._id}?username=${
        user.email || user.nickname
      }`
    );
    props.setProdList(deleteProdCall.data);
  };
  deleteItemByID();
}

export default Delete;
