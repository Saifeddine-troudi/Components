import { Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';
import { Address } from './Component/Profile/Address';
import { FullName } from './Component/Profile/FullName';
import { ProfilePhoto } from './Component/Profile/ProfilePhoto';
function App() {
  return (
    <div class ="body">
       <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Profil</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Photo</Nav.Link>
      <Nav.Link href="#features">Name</Nav.Link>
      <Nav.Link href="#pricing">Adress</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  <div  className='profil'>
      <ProfilePhoto/> 
      <FullName/>
      <Address/>
  </div>   
    </div>
  );
}

export default App;
