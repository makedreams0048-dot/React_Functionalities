
function CollectionMobile(){

     const fruits = [
    { id: 1, name: "Apple", emoji: "🍎" },
    { id: 2, name: "Banana", emoji: "🍌" },
    { id: 3, name: "Orange", emoji: "🍊" },
  ];


  return(

    <div>
        {fruits.map((fruit)=>

         <p key={fruit.id}>

            
         {fruit.name} - {fruit.emoji}

         </p>

        
        )}
    </div>

  );


}

export default CollectionMobile;