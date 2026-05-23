// import Button from "./Button/Button";
import List from "./List";
function App() {

  const insertList = [{id:1, name:"Apple", color:"Red", calories: 95}, 
    {id:2, name:"Orange", color:"Orange", calories: 62}, 
    {id:3, name:"Banana", color:"Yellow", calories: 100}, 
    {id:4, name:"Cherry", color:"Red", calories: 204}, 
    {id:5, name:"Grapes", color:"Purple", calories: 3}];


  const insertList2 = [{id:8, name:"Apple", color:"Red", calories: 95}, 
      {id:9, name:"Orange", color:"Orange", calories: 62}, 
      {id:10, name:"Banana", color:"Yellow", calories: 100}, 
      {id:11, name:"Cherry", color:"Red", calories: 204}, 
      {id:12, name:"Grapes", color:"Purple", calories: 3}];

  return(
    <>
     {insertList.length > 0 && <List items = {insertList} category = "fruit"/>}
     {insertList2.length > 0 && <List items = {insertList2} category = "fruit"/>}
    </>
  )
}

export default App
