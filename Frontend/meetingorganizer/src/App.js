import DashbordMain from "./components/root/DashbordMain";
import { Container } from "reactstrap";
import styled from "styled-components"
import { findByLabelText } from "@testing-library/react";


const Containers = styled.div`
height: 100vh;  
display: flex;
justify-content:clearInterval;
align-items: clearInterval;
background:${props=>props.dark? "#FF6700":"CHARCOAL GRAY"};
color:${props=>props.dark? "CHARCOAL GRAY":"#242F36"}

`

function App() {
  return (
    <div >
      <Container>
      <Containers dark >
      <DashbordMain></DashbordMain>
      </Containers>
       
      </Container>
      
    </div>
  );
}

export default App;
