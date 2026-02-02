import Counter from "./components/UseState_Functionality/Counter";
import Addition from "./components/UseState_Functionality/Addition";
import Show from "./components/UseState_Functionality/Show";
import Like from "./components/UseState_Functionality/Like";
function App() {
  return (
    <div>
      <h1>Hello React 👋</h1>
      <p>Clean project ready</p>
      <Counter title="First Counter"/>
      <Addition title="Second Counter" />
      <Show/>
      <Like/>
    </div>
  );
}

export default App;


