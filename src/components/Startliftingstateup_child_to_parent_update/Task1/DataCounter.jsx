function DataCounter(props){

    return(

        <div>

            <button onClick={props.increese}>+</button>
            <button onClick={props.decreese}>-</button>
            <button onClick={props.reset}>Reset</button>
             
        </div>
    );
}

export default DataCounter