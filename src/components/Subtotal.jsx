import React from 'react'
import '../style/Subtotal.css'
import { useStateValue } from '../StateProvider'
//import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';
import { useNavigate } from "react-router-dom";

function Subtotal() {
    const navigate = useNavigate();
    const [{ basket }, dispatch] = useStateValue();
  
    return (
      <div className="subtotal">
            <>
              <p>
                {/* Part of the homework */}
                Subtotal ({basket.length} items): <strong>{getBasketTotal(basket)}</strong>
              </p>
              <small className="subtotal-gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
  
        <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
      </div>
    );
  }

export default Subtotal