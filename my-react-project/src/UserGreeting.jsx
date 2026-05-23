import PropTypes from "prop-types"

function UserGreeting(props){

    const paramWelcome = <h2 className="welcome-message">Welcome back, {props.userName}!</h2>;
    const paramLoginIn = <h2 className="login-prompt">Please log in.</h2>;


    // return (props.isLogged ? <h2 className="welcome-message">Welcome back, {props.userName}!</h2> : 
    // <h2 className="login-prompt">Please log in.</h2>);
    
    return (props.isLogged ? paramWelcome : paramLoginIn);
}

UserGreeting.proptypes = {
    isLogged: PropTypes.bool,
    userName: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLogged: false,
    userName: "Guest",
}

export default UserGreeting;




// App.jsx
// import UserGreeting from "./UserGreeting"
// function App() {
//   return(
//     <>
//      <UserGreeting isLogged = {true} userName = "Ming" />
//      <UserGreeting />
//     </>
//   )
// }

// export default App
