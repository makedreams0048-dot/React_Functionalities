
import City from "../Task/City";

function State(){

   const state="Maharashtra";
   const city="Nashik";

    return(

        <div>
             
             <h2>Parent Data</h2>
              <City state={state} city={city}/>
            
        </div>
    );
}


export default State;