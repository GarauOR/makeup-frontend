import axios from "axios";

function Delete(props) {

  const deleteItemByID = async () => {
    let deleteProdCall = await axios.delete(
      `${REACT_APP_SERVER_URL}/product/${props.item._id}?username=${
        props.username
      }`
    );
    props.setProdList(deleteProdCall.data);
  };
  deleteItemByID();
}

export default Delete;
