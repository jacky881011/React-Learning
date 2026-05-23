// import Button from "./Button/Button";
import UserGreeting from "./UserGreeting"
function App() {
  return(
    <>
     <UserGreeting isLogged = {true} userName = "Ming" />
     <UserGreeting />
    </>
  )
}

export default App
