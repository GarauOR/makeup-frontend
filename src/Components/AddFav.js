import axios from 'axios';

function AddFav(props, user) {

    const item = {name:props.item.name, 
        brand: props.item.brand,
        price: props.item.price,
        api_featured_image: props.item.api_featured_image,
        description: props.item.description,
        username: user.email || user.nickname,
        product_type: props.item.product_type,
        product_link: props.item.product_link,
    };
    const addToFavs = async () => {
        await axios.post(`${props.serverLink}/product`, item);
    }
    addToFavs();
}

export default AddFav;