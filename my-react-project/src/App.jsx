// import Button from "./Button/Button";
import Student from "./Student";
function App() {
  return(
    <>
      <Student name="Jacky" age = {35} isStudent= {false}/>
      <Student name="Bob" age = {20} isStudent= {true}/>
      <Student name="Alisa" age = {12} isStudent= {true}/>
      <Student name="Alisa" age = {58} isStudent= {false}/>
      <Student name = "Larry" />
    </>
  )
}

export default App
