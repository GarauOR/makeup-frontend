import axios from "axios";

function Delete(props) {

  const deleteItemByID = async () => {
    let deleteProdCall = await axios.delete(
      `http://localhost:3001/product/${props.item._id}?username=${
        props.username
      }`
    );
    props.setProdList(deleteProdCall.data);
  };
  deleteItemByID();
}

export default Delete;
