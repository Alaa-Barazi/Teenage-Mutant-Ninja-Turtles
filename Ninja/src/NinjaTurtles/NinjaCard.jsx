import styled from "styled-components";
import { useState } from 'react';
import Message from "../Message/Message";
export default function Card({ turtlesProp, countT, top, turtles }) {
    const StyledButton = styled.button`
  min-width: 100px;
  border: none;
  font-size: 18px;
  padding: 7px 10px;
  background-color:lightblue;
`;
    const StyledImage = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    margin-bottom: 20px;
`;
    const ToppingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

    const Topping = styled.div`
  display: flex;
  align-items: center;
  margin-top: 80px;
`;

    const ToppingImage = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
`;

    const topping = turtlesProp.pizzaToppings;
    const [toppings, setToppings] = useState(top);
    const [count, setCount] = useState(countT);
    const [message, setMessage] = useState('');

    const handleClick = (name, img) => {

        let findTopping = (toppings.find((item) => item.name === name));
        if (!findTopping && toppings.length < 5) {

            toppings.push({ name, img })
            setCount(count => count + 1);
            
        }
        else if (findTopping) {
//   return (
//     <div key={name}>
//     <Message ToppingName={name} />
//     </div>
//   );
setMessage(`${name} is already selected`);
           // alert("Already Selected");
        }
        else {

            alert("Maximum toppings reached")
            setMessage('Maximum toppings reached');
        }
        setTimeout(() => {
            setMessage("");
        }, 2000);

    };



    function renderTurtleCards() {
        return Object.entries(turtles).map(([toppings, turtle]) => {
            return (
                <div key={turtle.name} className="card">
                    <h1>{turtle.name}</h1>
                    <img src={turtle.img} style={{ width: "50%", height: "30%" }} />
                    <h3>Toppings</h3>
                    <div>
                        {turtle.pizzaToppings.map((topp) => (
                            <StyledButton key={topp.id} onClick={() => handleClick(topp.name, topp.img)}> {topp.name}
                            </StyledButton>
                        ))}
                    </div>
                </div>
            );
        });
    }


    return (
        <>
            <div className="cards">
                {renderTurtleCards()}
            </div>
            <div>
       

            <h3>Selected Toppings:</h3>
                 { toppings.map((top) => (
                        <center>
                            <br/>
                            <div style={{ display: "flex", flexDirecton: "row",position:"stickey"}} className="div2">
                                <pre>{top.name}</pre>
                                <StyledImage src={top.img} width={"100"} height={"100"} ></StyledImage>
                            </div>
                        </center>
                    ))} 
                    {message && <Message message={message} /> }
                {/* <h1>{turtlesProp.name}</h1>
                <img src={turtlesProp.img} style={{ width: "70%", height: "30%" }} />
                <h3>Toppings</h3>
                <div>
                    {topping.map((topp) => (
                        <StyledButton key={topp.id} onClick={() => handleClick(topp.name, topp.img)}> {topp.name}
                        </StyledButton>
                    ))}  


      
                    { toppings.map((top) => (
                        <center>
                            <div style={{ display: "flex", flexDirecton: "row" }}>
                                <pre>{top.name}</pre>
                                <StyledImage src={top.img} width={"100"} height={"100"} ></StyledImage>
                            </div>
                        </center>
                    ))}
                </div> */}
            </div>
        </>)
}




