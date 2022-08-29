import React from 'react';
import {useStateValue} from "../../../context/StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({id,title,image,price,rating}) {
    const [{basket},dispatch]= useStateValue();

    const removeFromBasket =() =>{
//code to remove an item from basket

    dispatch({
    type: "REMOVE_FROM_BASKET",
     id: id,
   });
};

  return (
    <div className='checkoutProduct'>
        {basket.length ? (
            <>
            (
                <img className='checkoutProduct_image' src={image} alt="image" />
                <div>
                    <p>{title}</p>
                    <p>
                        <small>{price}</small>
                    </p>
                    <div className='checkoutProduct_rating'>
                        {Array(rating)
                        .fill().map((_)=>(
                            <p>⭐</p>
                        ))}
                        <button onClick={removeFromBasket}>Remove from Basket</button>

                    </div>
                </div>
            )
            </>
        ) :(
            " "
        )}

    </div>
  );
}

export default CheckoutProduct;