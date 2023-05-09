import React, { useState } from "react";
import "./Tea.css";
import Prod1 from "./Black Tea Product.png";
import Prod2 from "./Green Tea Product.png";
import Prod3 from "./Oolong Tea Product.png";
import Prod4 from "./White Tea Product.png";

const Tea = () => {
    const [quantities, setQuantities] = useState({
      prod1: 1,
      prod2: 1,
      prod3: 1,
      prod4: 1
    });
    const [messages, setMessages] = useState({
      prod1: "",
      prod2: "",
      prod3: "",
      prod4: ""
    });
  
    const handleQuantityChange = (e, prod) => {
      setQuantities({ ...quantities, [prod]: e.target.value });
    };
  
    const handleAddToBasket = (prod, name) => {
      setMessages({ ...messages, [prod]: `Added ${quantities[prod]} item(s) of ${name} to basket` });
      setTimeout(() => {
        setMessages({ ...messages, [prod]: "" });
      }, 3000);
    };

    return (
        <div className="product-description">
          <div className="product-info">
            <h2>Browse our range</h2>
            <p>There are so many varie-teas!</p>
          </div>
          <div className="product-container">
            <div className="product-image-container">
              <img src={Prod1} alt="Black Tea" className="product-image" />
              <div className="product-actions">
                <select
                  value={quantities.prod1}
                  onChange={(e) => handleQuantityChange(e, "prod1")}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <button onClick={() => handleAddToBasket("prod1", "Black Tea")}>
                  Add to Basket
                </button>
                {messages.prod1 && <p>{messages.prod1}</p>}
              </div>
            </div>
            <div className="product-image-container">
              <img src={Prod2} alt="Green Tea" className="product-image" />
              <div className="product-actions">
                <select
                  value={quantities.prod2}
                  onChange={(e) => handleQuantityChange(e, "prod2")}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <button onClick={() => handleAddToBasket("prod2", "Green Tea")}>
                  Add to Basket
                </button>
                {messages.prod2 && <p>{messages.prod2}</p>}
              </div>
            </div>
            <div className="product-image-container">
              <img src={Prod3} alt="Oolong Tea" className="product-image" />
              <div className="product-actions">
                <select
                  value={quantities.prod3}
                  onChange={(e) => handleQuantityChange(e, "prod3")}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <button onClick={() => handleAddToBasket("prod3", "Oolong Tea")}>
                  Add to Basket
                </button>
                {messages.prod3 && <p>{messages.prod3}</p>}
              </div>
            </div>
            <div className="product-image-container">
              <img src={Prod4} alt="White Tea" className="product-image" />
              <div className="product-actions">
                <select
                  value={quantities.prod4}
                  onChange={(e) => handleQuantityChange(e, "prod4")}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <button onClick={() => handleAddToBasket("prod4", "White Tea")}>
                  Add to Basket
                </button>
                {messages.prod4 && <p>{messages.prod4}</p>}
              </div>
            </div>
          </div>
        </div>
      );
      
            }
            
export default Tea;