import axios from "axios";

function Delete(props) {

  const deleteItemByID = async () => {
    let deleteProdCall = await axios.delete(
      `${props.serverURL}/product/${props.item._id}?username=${
        props.username
      }`
    );
    props.setProdList(deleteProdCall.data);
  };
  deleteItemByID();
}

export default Delete;
