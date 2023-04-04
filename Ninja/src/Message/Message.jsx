import styled from "styled-components";
export default function Message({message}){
    const StyledMessage = styled.h3`
    min-width: 100px;
    font-size: 18px;
    color:red;
    float:left;
    border:black dotted 1px;
  `;
  
  return (
   
    <StyledMessage>{message}! </StyledMessage>
  )
  
}