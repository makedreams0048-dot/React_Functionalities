


function BooksList(){

// Step 1: Data (array of objects with id)
  const Books = [
    { id: 1, name: "history" },
    { id: 2, name: "Maths" },
    { id: 3, name: "English" },
  ];

    return(
        <div>
         
        {Books.map((book=><p key={book.id}>
        {book.name}
        </p>))}


        
        </div>
    )
}


export default BooksList;