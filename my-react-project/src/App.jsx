import Card from "./Card";
function App() {
  return(
    // here need to keep the root element, otherwise it will report an error: "Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?"
    <>
      <Card> </Card>
    </>
  );
}

export default App
