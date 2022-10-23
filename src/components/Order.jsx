import React from 'react';
import '../style/Order.css';
import moment from "moment";
import CheckoutProduct from './CheckoutProduct';
import { CurrencyFormat } from "../reducer";


function Order({ order }) {
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order-id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map((item, i) => (
                <CheckoutProduct
                    key={i}
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