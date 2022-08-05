import React from 'react';
import About from './About';
import Contact from './Contact';
import Users from './Users';
import UserData from './UserData';
import Home from './Home';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import './App.css';

function App() {
  // const [name,setName] = useState('Ankit')
  return (
    <div className="App">
      <div class="container">
      <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link class="nav-link" to='/'> HOME</Link></Nav.Link>
            <Nav.Link href="#features"><Link class="nav-link" to='/about'> ABOUT</Link></Nav.Link>
            <Nav.Link href="#pricing"><Link class="nav-link" to='/contact'> CONTACT</Link></Nav.Link>
            <Nav.Link href="#pricing" ><Link class="nav-link" to='/users'> USER</Link></Nav.Link>
            <Nav.Link href="#pricing" ><Link class="nav-link" to='/userdata'> USER DATA</Link></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
     
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<Users />} />
          <Route path="/userdata" element={<UserData/>} />
          <Route path="/" element={<Home />} />
        </Routes>
        </Router>
        </div>
    </div>

  );
}

export default App;
