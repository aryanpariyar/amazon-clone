import React from 'react';
import { useStateValue } from './StateProvider';
import '../Css/Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket }] = useStateValue();
    return (<div className='checkout'>
        <div className="checkout__left">
            <div className="adds">
                <img src="https://i.pinimg.com/originals/f5/0f/67/f50f67731024109dce5703d50c287d0e.jpg" className="checkout__ad" />
            </div>
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is Empty</h2>
                    <p>You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.</p>
                </div>
            ) : (
                <div>
                    <h2 className='checkout__title'>Your Shopping Basket</h2>
                    {/* List out all of the checkout Products
                        */}
                    {basket?.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            )}
        </div>
        {basket.length > 0 && (
            <div className="checkout__right">
                <Subtotal />
            </div>
        )}
    </div>
    );
}

export default Checkout;
