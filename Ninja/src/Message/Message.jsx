import styled from "styled-components";
export default function Message({ToppingName}){
    const StyledMessage = styled.h3`
    min-width: 100px;
    font-size: 18px;
    color:red;
    float:left;
    border:black dotted 1px;
  `;
  
  return (
   
    <StyledMessage>{ToppingName} Already Selected</StyledMessage>
  )
  
}