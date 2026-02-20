import { useState } from "react";


function ConditionalManage(){

    const [show, setShow] = useState(false);

    return(

        <div>
            <button onClick={(()=>setShow(!show))}>{show ? "show": "hide"}</button>
                      {/* <button onClick={()=> setShow(!show)}>{show ? "on":"off"}</button> */}

            {!show && <p>This content is hidden</p>}
            {show && <p>This content is showing</p>}
        </div>
    );
}

export default ConditionalManage;