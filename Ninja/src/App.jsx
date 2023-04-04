import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import getData from './data'


import styled from 'styled-components'
import PizzaOrdering from './PizzaOrdering'
import NinjaCard from './NinjaTurtles/NinjaCard'
function App() {
  const [count, setCount] = useState(0);
  const [topping, setToppings] = useState([]);
 
  const StyledImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 20px;
`;
  const [turtles, setData] = useState(getData);

  return (
    <div className="App">
      <div className='cards'>


         <NinjaCard turtlesProp={turtles[0]} countT={count} top={topping} turtles={turtles}/>
        {/* <NinjaCard turtlesProp={turtles[1]} countT={count} top={topping} />
        <NinjaCard turtlesProp={turtles[2]} countT={count} top={topping} />
        <NinjaCard turtlesProp={turtles[3]} countT={count} top={topping} />  */}
         {/* <PizzaOrdering></PizzaOrdering>   */}
      </div>

    </div>
  )
}

export default App
