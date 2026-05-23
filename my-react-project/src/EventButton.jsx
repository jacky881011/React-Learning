
import heroPicture from "./assets/hero.png";

function EventButton() {
    // const handleClick = () => console.log("Ouch! You clicked me!");
    // const handleClick2 = (name) => console.log(`${name} stop clicking me`);

    let count = 0;
    const handleClick3 = (name)=>{
        if(count < 3){
            count++;
            console.log(`You clicked me ${count} times!`);
        }else{
            console.log(`${name} stop clicking me!`);
        }
    }

    const handleClickEvent = (e) => {
        e.target.textContent = "OUCH!";
        console.log(e);
    }

    return (
        <div>
            <button onClick={()=> handleClick3("Ming yun")}>Click me</button>
            <button onClick={(e)=> handleClickEvent(e)}>Double click to hurt</button>
            {/* <button onDoubleClick={(e) => handleClickEvent(e)}>Click me!</button> */}
        </div>
    )
}

export default EventButton;