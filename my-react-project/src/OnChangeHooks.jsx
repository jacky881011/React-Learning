import React, {useState} from "react";
function OnChangeHooks() {
    const [name, setName] = useState("fff");
    const [quantity, setQuantity] = useState(0);
    const [comment, sentComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShoping] = useState("Delivery");

    
    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        sentComment(event.target.value);
    }

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){   
        setShoping(event.target.value);
    }

    // const handleCommentChanges2 = (event) => {
    //     sentComment(event.target.value);
    // }
    
    return(
        <div>
            <input value = {name} onChnage = {handleNameChange}/>
            <p>Name: {name}</p>
            <input value = {quantity} onChange={handleQuantityChange} type = "number"/>
            <p>Quantity: {quantity}</p>
            <textarea value = {comment} onChange={handleCommentChange} placeholder="Enter delivery instructions"/>
            <p>Comment: {comment}</p>     
            
            <select value = {payment} onChange={handlePaymentChange}>
                <option value = "">Select and option</option>
                <option value = "Visa">Visa</option>
                <option value = "PayPal">PayPal</option>
                <option value = "Bitcoin">Bitcoin</option>    
            </select>   
            <p>Payment: {payment}</p>

            <div>
                <label>
                    <input type="radio" value="Pick up" checked={shipping === "Pick up"} onChange={handleShippingChange}/>
                    Pick up
                </label>
                <label>
                    <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
                    Delivery
                </label>
                <p>Shipping: {shipping}</p>
            </div>

        </div>
    )

}

export default OnChangeHooks;