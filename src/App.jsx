import Counter from "./components/UseState_Functionality/Counter";
import Addition from "./components/UseState_Functionality/Addition";
import Show from "./components/UseState_Functionality/Show";
import Like from "./components/UseState_Functionality/Like";
import FruitList from "./components/MapFunctionality/FruitList";
import BooksList from "./components/MapFunctionality/BooksList";
import ConditionalExample from "./components/ConditionalRendering/ConditionalExample";
import ConditionalAndoperator from "./components/ConditionalRendering/ConditionalAndoperator";
function App() {
  return (
    <div className="centered">
      <h1 style={{ color: 'red'}}>Hello React 👋</h1>
      {/* <Counter title="First Counter"/>
      <Addition title="Second Counter" />
      <Show/>
      <Like/> 
      <FruitList/>
      <BooksList/>
      <ConditionalExample />*/}
      <ConditionalAndoperator/>
    </div>
  );
}

export default App;


