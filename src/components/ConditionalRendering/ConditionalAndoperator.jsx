import { useState } from "react";


function ConditionalAndoperator(){

    const[show,setShow] = useState(false);

    return(

        <div>
            <h1>&& Conditional operator we have used here</h1>

            <button onClick={(()=> setShow(!show))}>button</button>


               {show && <p>My content is visible</p>}
               {!show && <p>My content is Hidden</p>}

        </div>

    );

}


export default ConditionalAndoperator;