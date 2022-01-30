import React from 'react';
import '../Css/Product.css';
import '../Css/CheckoutProduct.css';
import { useStateValue } from './StateProvider';

import StarIcon from '@mui/icons-material/Star';

function CheckoutProduct({ id, title, price, image, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove item from basket...
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        });
    };
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_) => (
                                <p><StarIcon className='star__iconColor' /></p>
                            ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from basket </button>
            </div>

        </div>
    );
}

export default CheckoutProduct;