let groceries = [
  { name: "Apple", category: "Fruit", price: 5.0 }, // what, where, how much?
  { name: "Onion", category: "Vegtable", price: 4.0 },
  { name: "Oatmeal", category: "Cereal", price: 3.0 },
  // ... we can add more items
];
// functions
function findGrocery(itemName) {
  return groceries.find((item) => item.name === itemName); // => equals less than or equal to
}

function filterByCategory(category) {
  return groceries.filter((item) => item.category === category); // === equals strict equal to
}

// ... we can add more functions for each method
function main() {
  let input = prompt("Enter a grocery item to search for:");
  let foundItem = findGrocery(input); // what are we calling?
  console.log(foundItem); // what are we calling?
  // ... we can add more interactions using different array methods
}

main();
