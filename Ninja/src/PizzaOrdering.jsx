import React, { useState } from "react";

// Define the turtles and their preferred toppings
const turtles = {
  Leonardo: ["pepperoni", "mushrooms", "olives"],
  Donatello: ["sausage", "onions", "peppers"],
  Raphael: ["bacon", "pineapple", "jalapenos"],
  Michelangelo: ["ham", "tomatoes", "garlic"],
};

function PizzaOrdering() {
  const [selectedToppings, setSelectedToppings] = useState([]);

  // Function to handle adding a topping
  function addTopping(topping) {
    // Check if the topping has already been selected
    if (selectedToppings.includes(topping)) {
      alert(`${topping} is already in the order.`);
    }
    // Check if the maximum number of toppings has been reached
    else if (selectedToppings.length === 5) {
      alert("You have reached the maximum number of toppings.");
    }
    // Add the topping to the selected toppings list
    else {
      setSelectedToppings((prevToppings) => [...prevToppings, topping]);
      
    }
  }

  // Function to render the turtle cards
  function renderTurtleCards() {
    return Object.entries(turtles).map(([turtle, toppings]) => {
      return (
        <div key={turtle}>
          <h3>{turtle}'s preferred toppings:</h3>
          <div>
            {toppings.map((topping) => {
              return (
                <button key={topping} onClick={() => addTopping(topping)}>
                  {topping}
                </button>
              );
            })}
          </div>
        </div>
      );
    });
  }

  return (
    <div>
      {renderTurtleCards()}
      <h3>Selected Toppings:</h3>
      <ul>
        {selectedToppings.map((topping, index) => {
          return <li key={index}>{topping}</li>;
        })}
      </ul>
    </div>
  );
}

export default PizzaOrdering;
