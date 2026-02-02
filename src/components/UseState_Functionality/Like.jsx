import { useState } from "react";


function Like(){

 const [liked, setLiked] = useState(false);

    return(

        <div>

        <h1> Here I am click that time like or unlike showing</h1>

        <button onClick={()=> setLiked(!liked)}>{liked ? "Liked":"Unliked"}</button>

        {liked ? "Liked ❤️" : "Not Liked 🤍"}

        </div>
    );
}

export default Like;