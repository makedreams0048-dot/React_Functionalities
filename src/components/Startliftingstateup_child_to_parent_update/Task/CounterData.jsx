function CounterData(props) {
  return (
    <div>
      <button onClick={props.increase}>+</button>
      <button onClick={props.decrease}>-</button>
      <button onClick={props.reset}>Reset</button>
    </div>
  );
}

export default CounterData;
