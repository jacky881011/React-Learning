import PropTypes from 'prop-types'
// use props to pass data and be js project
// if is boolean use operator 
// props = read-only properties that are shared between components,
// a parent compenent can send data to a child component.
// <Componet key = value />
function Student(props){
    return(
        <div className = "student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Is student: {props.isStudent ? "Yes": "No"}</p>
        </div>
    );

}

// then if input props type is incorrect, it will report an error in the console, which is very helpful for debugging
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

Student.defaultProps = {
    name: "Unknown",  
    age: 2,
    isStudent: false,
}

export default Student;


// APP.jsx
// import Button from "./Button/Button";
// import Student from "./Student";
// function App() {
//   return(
//     <>
//       <Student name="Jacky" age = {35} isStudent= {false}/>
//       <Student name="Bob" age = {20} isStudent= {true}/>
//       <Student name="Alisa" age = {12} isStudent= {true}/>
//       <Student name="Alisa" age = {58} isStudent= {false}/>
//       <Student name = "Larry" />
//     </>
//   )
// }

// export default App
