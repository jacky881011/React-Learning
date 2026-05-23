import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"

function App() {
  return(
    // here need to keep the root element, otherwise it will report an error: "Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?"
    <>
      <Header/>
      <Food/>
      <Footer/>
    </>
  );
}

export default App
