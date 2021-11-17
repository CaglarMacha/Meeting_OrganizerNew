import DashbordMain from "./components/root/DashbordMain";
import { Container } from "reactstrap";
import styled from "styled-components"
import { findByLabelText } from "@testing-library/react";


const Containers = styled.div`
height: 100vh;  
display: flex;
justify-content:clearInterval;
align-items: clearInterval;
background:${props=>props.dark? "#121c1f":"white"};
color:${props=>props.dark? "white":"#121c1f"}

`
function App() {
  return (
    <div >
      <Container>
      <Containers dark>
      <DashbordMain></DashbordMain>
      </Containers>
       
      </Container>
      
    </div>
  );
}

export default App;
