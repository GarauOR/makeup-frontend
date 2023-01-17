import axios from 'axios';

function AddFav(props, user) {
    const item = {name:props.item.name, 
        brand: props.item.brand,
        price: props.item.price,
        imageUrl: props.item.image_link,
        description: props.item.description,
        username: user.email || user.nickname,
    };
    const addToFavs = async () => {
        await axios.post(`${REACT_APP_SERVER_URL}/product`, item);
    }
    addToFavs();
}

export default AddFav;