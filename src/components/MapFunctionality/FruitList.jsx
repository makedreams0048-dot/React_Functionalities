function FruitList() {
  // Step 1: Data (array of objects with id)
  const fruits = [
    { id: 1, name: "Apple", emoji: "🍎" },
    { id: 2, name: "Banana", emoji: "🍌" },
    { id: 3, name: "Orange", emoji: "🍊" },
  ];

  
  return (
    <div>
      <h2>Fruit List</h2>

      {/* Step 2: map over array */}
      {fruits.map((fruit) => (
        <p key={fruit.id}>
          {fruit.emoji} {fruit.name}
        </p>
      ))}
      



    </div>
  );
}

export default FruitList;



