
import React, { useState, useEffect } from "react";
import "./Home.css";
import Product from "./Product/Product";

function Home() {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);
  return (
    <div className="home">
      <img
        className="home_image"
        src="https://thumbs.dreamstime.com/b/supermarket-cart-loaded-cardboard-boxes-sales-goods-concept-trade-commerce-online-shopping-high-delivery-order-134531493.jpg"
        alt=""
      />
      <div className="home_rows">
        {products?.map((product) => (
          <div className="home_row">
            <Product
              id={product.id}
              title={product.title}
              price={product.price}
              rating={Math.round(product.rating.rate)}
              image={product.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;