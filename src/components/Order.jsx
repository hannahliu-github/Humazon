import React from 'react';
//import '../style/Order.css';
import moment from "moment";
import CheckoutProduct from './CheckoutProduct';
//import CurrencyFormat from "react-currency-format";


function CurrencyFormat(value){
    let res = '';
    const decimal = (value * 100) % 100;
    let decimalStr = decimal.toString();
    if (decimal === 0) {
        decimalStr = '00';
    }
    res = '.' + decimalStr;

    value = value - decimal;
    let nextDigits = value % 1000;
    res = nextDigits + res;

    while (value >= 1000) {
        value = value / 1000;
        let nextDigits = value % 1000;
        res = nextDigits + ',' + res;
    }
    res = '$' + res;
    return res;
}


function Order({ order }) {
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order-id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}
            <h3 className="order-total">Order Total: {CurrencyFormat(order.data.amount / 100)}</h3>
        </div>
    )
}

export default Order