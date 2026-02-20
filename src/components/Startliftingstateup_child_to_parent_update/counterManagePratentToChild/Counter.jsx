

function Counter(props){

    return(

         <div>
         
         <button onClick={props.increese}>Increese</button>
                
         <button onClick={props.decreese}>Decreese</button>
                
         <button onClick={props.reset}>Reset</button>

         </div>

    );
}

export default Counter;