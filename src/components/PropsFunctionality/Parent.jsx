import Child from "./Child";

function Parent() {
  const name = "Nikhil";
  const age = 22;

  return (
    <div>
      <h2>Parent Component</h2>
      <Child name={name} age={age} />
    </div>
  );
}

export default Parent;