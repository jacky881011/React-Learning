import PropTypes from 'prop-types'
// use props to pass data and be js project
// if is boolean use operator 
function Student(props){
    return(
        <div className = "student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Is student: {props.isStudent ? "Yes": "No"}</p>
        </div>
    );

}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

export default Student;