import React from 'react';
import { useStateValue } from "../../context/StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";

function Checkout() {
    const [{basket}] = useStateValue();
  return (
    <div className='checkout'>
        <div className='checkout_left'>
            <img src="" alt=""/>

            {basket?.length === 0 ? (
                <div>
                    <h1>Your Shopping Cart is Empty</h1>
                    <p>You have no items in the cart. To buy just click on "Add to
              basket" next to the item.
              </p>
              </div>
            ) :(
                <div>
                    {basket?.map(({id, title, image, price, rating})=>(
                        <CheckoutProduct 
                        key={id}
                        id={id}
                        title={title}
                        image={image}
                        price={price}
                        rating={rating}/>
                    ))}
                </div>
            )}
        </div>

    </div>
  );
}

export default Checkout;