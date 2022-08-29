import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import HeaderOptions from "./HeaderOptions/HeaderOptions";
import { useStateValue } from "../../context/StateProvider";

function Header() {
  
  const [{ basket }] = useStateValue();

  return (
    <div className="header">
      <div className="header_container">
        <Link to="/">
          <img
            className="header_image"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAACCCAMAAACEulGUAAAAZlBMVEX///8AAACrq6vn5+d/f3+UlJT7+/s1NTXOzs6xsbEwMDDb29sfHx+Dg4PJycnq6uqcnJyjo6Nqamp3d3dBQUEVFRXAwMC3t7dMTEz09PRlZWUpKSnU1NReXl5TU1NGRkaMjIwNDQ1pTJEYAAAEuklEQVR4nO2b0YKqIBCGLUvNLMo0ddWt3v8lz9EZBYGszUG74LuTdfMPhpkfJMexWCwWi8VisVgslga2l3GXltSz9iOZ8F4srQrYrXTES8sCQq24lC2tq6HQals99ksLa8j04vyldbVs9eKuS+tqKOpWS3kYcP+KiHNY2oq7LK1DSwCjmC2tQ8sdxH3HMMokMDe9pXXocKNW3H1pHVquMKpris8qrmtSdjHUKopy4P7qM+ZUSMpBYkYbiQVhhrSRZLknBmI6JMY3MqMtJ7G9sRlxBwptnffKmeP1ONCWiE1HaFsLbR58Md/V3kfBHj5s6FLx64tN+NCd0FRAFvodjOAJ7qNZa7EbfNrACeZviXP9tmmYNBL1XydwgU+7aNpEX6EZrj34ts3g41YawZ+DnjrVtIlDrRGHvu3uqG1iB08Bg27QTZk61BpxWOEH6Ra9XEUkrot+UQk+9jwu7qwRAhM4JzOauTo6mgHTiMPIFCerG6oBPAmc/D+Cc92XSqhrxGnmdKXeNQ0cQ3GzgEFCiAW9GnEPVRxplmvAoRBjx4P0KhZIjThoycXPos1yDWg3T0LTT9sSCp2pikO3JcaXB02U20kbtQsuyvCo4oKnU5oqyzVg0JXHoKNCcbu+JVjjBK76ezC+thX/N/iaj4BQHLUbTii3MD2fVtwPoTbHOdCKo8tyDWtacbT75sGDUltEu2vu6TeYP2Tz+oF/AtNwnu2QDOpmeu4b0OJdulsyzCQx/x+0S+fXz/sTaH5+eQs8KOXho6RcNeFC6JJmuQY0nCW3vij3KGs5y3cIUqDmlcTaHIZLa244d3K/oDhegLHo8fLrKd1PA65AV9u+RfHCijiMUz41sftps1wDxvKtb6hSSa0iDtxRyS0fjjP9axrsKG7EXPDC3A8FkjhMPzUXB28fEvp96m6zqTecWG/5s2VxuPPLkxq6ZxNvHyI56HBLvA8pWRxWFT7M8g2EYO3nHlaOd/nZmRz+xkKuDzoeMfKOhCwOzQJPPrUUtYTgvgcPupPUEbI4KGcpXxXB38mzXEOBi9A+68o7EpUUlNCzZd+zmOWoC6v4sFVduC0Mx3nLhtd3vHbhy4R45TI0BtSFFegMpx8CkOdWqXQdddcwWR/dpZ9KMUuKu6KAdvnAIRFnIss11BTiTJ1/eHKk4W8Y0uZ4BF1XmxL332BuPuUAJthQlpsKJqLj6zsXADy7/5VnDgpI0UYK62Qwg29f37kAGHJfccpLASZr+iVHC4cU6ub79xCAJTFVWKeB2wNfcT5OAYxqanZU2Wn7EbCuTIxq615ufojZkLtME0f2jlVHMW3HvzR6vtubduTqx+x8eHKC9k1MJ5JD4jckMPtCuBohgW2w6Ob7N/M+s10xs/WjfWYSdAvoJ7AjVIY0Y+5cTo6vdF6EOO5+zjCkPcLquh63GWV/YzjXLzE2QpCP7nyIP3qYq+aL5yRHD5qJ32Imgz5IxWPrUE88eRfOY+UKsedGd5/Fancbu5EQsU6MniQQczb1m8JnHPkjo9HsJZ5FnW01zYfrxRGM0+wd979HcOPj9TK0UzfrzzKudRLm8Rur0Cq++Uk899qBuW+uQeerqhaLxWKxWCwWi2UW/gFUmDrjfDJj9AAAAABJRU5ErkJggg=="
            alt=""
          />
        </Link>
        <div className="search_box">
          <input type="text" />
          <SearchIcon className="search_icon" />
        </div>
      </div>
      <div className="header_right">
        <Link to="/">
          <div className="header_options">
            <HeaderOptions
              header="Hello"
              email="abc@gmail.com"
              title="Sign In"
            />
          </div>
        </Link>
        <div className="return">
          <Link to="/">
            <HeaderOptions header="Returns" title="& Orders" />
          </Link>
        </div>
        <Link to="/">
          <HeaderOptions header="Your" title="Subscription" />
        </Link>
        <Link to="/checkout">
          <div className="headerOption_basket">
            <ShoppingBasketIcon className="basket" />
            <span>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;