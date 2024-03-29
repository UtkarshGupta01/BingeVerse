import styled from "styled-components";


export const TabContainer = styled.div`
height: 34px;
background-color: white;
border-radius: 5px;
padding: 2px;
@media only screen and (max-width: 450px) {
  transform: scale(0.9);
}


`
export const TabItems = styled.div`
display: flex;
align-items: center;
height: 35px;
position: relative;

`

export const Tabs = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: center;
width: 100px;
color: ${({ $selectedtab, $index }) => ($selectedtab === $index ? "white" : "black")};
font-size: 16px;
font-weight: 500;
position: relative;
z-index: 1;
cursor: pointer;
transition: color ease 0.3s;
@media only screen and (max-width: 1056px) {
  font-size: 15px;
}
`
export const ActiveTab = styled.div`
height: 35px;
width: 100px;
border-radius: 5px;
background-color:#283044;
position: absolute;
left: 0;
transition: left cubic-bezier(0.88, -0.35, 0.565, 1.35) 0.3s;
`