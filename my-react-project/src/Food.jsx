

function Food(){
    const food1 = "Orange";
    const food2 = "Apple";

    // insert parameters use curly {} 
    // user toUpperCase() method 
    return(
        <ul>
            <li>Food param</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>    
        </ul>

    );
}

export default Food