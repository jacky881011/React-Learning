import React, {useState} from 'react';
function UpdateArrayObj(){

    const [cars, setCar] = useState([])
    const [carYear, setCarYear] = useState(new Date().getFullYear())
    const [carMake, setCarMake] = useState("")
    const [carModel, setCarModel] = useState("")

    function handleAddCar(){
        const newCar = {year: carYear, make: carMake, model: carModel};
        setCar(c=> [...c, newCar]);

        // reset
        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")
    }

    function handleRemoveCar(index){
        setCar(c=> c.filter((_, i)=> i!==index))    // _ means ignore this parameter
    }

    function handleChangeYear(event){
        setCarYear(event.target.value)
    }

    function handleChangeMake(event){
        setCarMake(event.target.value)
    }

    function handleChangeModel(event){
        setCarModel(event.target.value)
    }


    return(<div>
        <h2>List of car model</h2>
        <ul>
            {cars.map((car, index)=><li key = {index} onClick={()=> handleRemoveCar(index)}>
                {car.year} {car.make} {car.model}
            </li>)}
        </ul>
        <input type="number" value = {carYear} onChange={handleChangeYear}/><br/>
        <input type="text" value = {carMake} onChange={handleChangeMake} placeholder='Enter car make'/><br/>
        <input type="text" value = {carModel} onChange={handleChangeModel} placeholder='Enter car model'/><br/>
        <button onClick={()=> handleAddCar()}>Add Car</button>
        
    </div>)
}

export default UpdateArrayObj;