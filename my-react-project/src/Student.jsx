
// use props to pass data and be js project
// if is boolean use operator 
function Student(props){
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Is student: {props.isStudent? "Yes": "No"}</p>
        </div>
    );

}

export default Student;