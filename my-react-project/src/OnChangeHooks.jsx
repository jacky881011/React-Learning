import React, {useState} from "react";
function OnChangeHooks() {
    const [name, setName] = useState("fff");
    const [quantity, setQuantity] = useState(0);
    const [comment, sentComment] = useState("");

    
    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }

    function handleCommentChange(event){
        sentComment(event.target.value);
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
        </div>
    )

}

export default OnChangeHooks;