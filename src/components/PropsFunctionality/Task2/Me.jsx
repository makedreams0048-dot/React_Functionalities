import Son from "./Son";


function Me(){

    const name="Nikhil";
    const age ="29";

    return(
        <div>
          
           <h2>This is ME Page it mean's parent function</h2>
           <Son name={name} age={age}/>

        </div>
    );
}

export default Me;