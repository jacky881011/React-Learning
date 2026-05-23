
function ProfilePicture() {
    const imageUrl = './src/assets/hero.png';
    const handleClick = (event)=> {
        event.target.style.display = "none";
        console.log('You click and let the picture disappear!');
    };

    return(
        <img src ={imageUrl} onClick={(e) => handleClick(e)}></img>
    )
}

export default ProfilePicture;