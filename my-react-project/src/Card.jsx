import profilePic from "./assets/hero.png"

function Card(){
    return(
        // 200 x 200 pixels
        <div className="card">
            <img src={profilePic} alt="Err:profile picture" style={{ width: "150px", height: "150px" }} />
            <h2>Card code</h2>
            <p>Test how to create card</p>
        </div>
    )


}

export default Card