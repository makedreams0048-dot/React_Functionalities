

function DocsList(){

        const Docs = [
            { id: 1, name: "pdf", emoji: "computer" },
            { id: 2, name: "doc", emoji: "computer" },
            { id: 3, name: "jpg", emoji: "computer" },
        ];


        const fruits = [
            { id: 1, name: "Apple", emoji: "🍎" },
            { id: 2, name: "Banana", emoji: "🍌" },
            { id: 3, name: "Orange", emoji: "🍊" },
        ];


        return(
           
            <div>

             <h1>Here array data display</h1>
                 
             {fruits.map((fruit)=>
                   
                 <p key={fruit.id}>

                    {fruit.name} - {fruit.emoji}
                 </p>  
                   

               )}


               <h1>Here showing fruits Data</h1>

               {Docs.map((doc)=>(
                <p key={(doc.id)}>

                    {doc.name} - {doc.emoji}
                </p>

               ))}
                
        
            </div>

        );
}

export default DocsList;