import React, { useState, useEffect } from 'react';
import '../style/Payment.css';
import { db } from "../firebase";
import axios from '../components/axios';
import { Link, useNavigate } from 'react-router-dom';
import { getBasketTotal, CurrencyFormat } from '../reducer';
import { useStateValue } from '../StateProvider'
import CheckoutProduct from '../components/CheckoutProduct';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function Payment() {
    const navigate = useNavigate();
    const [{ basket, user }, dispatch] = useStateValue();
    
    const stripe = useStripe();
    const elements = useElements();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                headers: {'Access-Control-Allow-Origin': 'http://localhost:3000'},
                url: `/payments/create?total=${Math.trunc(getBasketTotal(basket) * 100)}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log(clientSecret)

    const handleSubmit = async (e) => {
        // do all the fancy stripe stuff...
        e.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation

            db
            .collection('users')
            // it's uid not id, you can find uid in console.log(user)
            .doc(user?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })

            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })
            
            navigate('/orders')
        })
    }

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

    return (
        <div className='payment'>
            <div className='payment-container'>
                <h1>Checkout (
                        <Link to='/checkout'>{basket?.length} Items</Link>
                    )
                </h1>
                <div className='payment-section'>
                    <div className='payment-title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment-address'>
                        <p>{user?.email}</p>
                        <p>huzi's home</p>
                        <p>New York, NY 10018</p>
                    </div>    
                </div>
                <div className='payment-section'>
                    <div className='payment-title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment-items'>
                        {basket.map((item, i) => (
                            <CheckoutProduct
                                key={i}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className='payment-section'>
                    <div className='payment-title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div className='payment-details'>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className='payment__priceContainer'>
                                <h3>Order Total: {CurrencyFormat(getBasketTotal(basket))}</h3>
                                    
                                    <button disabled={processing || disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                    </button>
                                </div>

                                  {/* Errors */}
                                {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment