import axios from 'axios';
import React from 'react'

function razorPay() {

    const loadScript = (src) => {
        return new Promise(res => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                res(true);
            };
            script.onerror = () => {
                res(false);
            }
            document.body.appendChild(script);
        })
    };

    const displayRazorpay = async () => {
        try {
            const res = loadScript('https://checkout.razorpay.com/v1/checkout.js');
            if(!res){
                alert("network error");
                return;
            }
            const {data } = await axios.post("https://equippment-hiring.herokuapp.com/payment/orders");
            if(!data){
                alert("network error");
                return;
            }
            const {amount,id:order_id,currency} = data;
            const options = {
                key : process.env.RAZORPAY_KEY,
                amount : amount.toString(),
                currency,
                name:"something",
                description:"some description about payment",
                image : "",
                order_id,
                handler: async function(response) {
                    const data = {
                        orderCreationId : order_id,
                        razorpayPaymentId : response.razorpay_payment_id,
                        razorpayOrderId : response.razorpay_order_id,
                        razorpaySignature : response.razorpay_signature,
                        amount : amount.toString(),
                        currency
                    }
                    const result = await axios.post("https://equippment-hiring.herokuapp.com/payment/success",data);
                    console.log(result.data);
                },
                prefill : {
                    name : "name",
                    email : "name@gmail.com",
                    contact : '1234567890'
                }
            }
            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div>
            <button onClick={displayRazorpay}>pay</button>
            
        </div>
    )
}
export default razorPay
