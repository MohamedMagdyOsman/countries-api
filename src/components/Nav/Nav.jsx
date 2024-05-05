// style
import "./Nav.scss"

// bootstrap components
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

// localstorage
import useLocalStorage from "use-local-storage";

// icons
import { FaMoon } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect } from "react";


function Nav() {
  // theme management
  const [isDark, setIsDark] = useLocalStorage('darkTheme', false);
  const themeToggle = () => {
    document.body.classList.toggle('dark');
    setIsDark(!isDark);
  }

  useEffect(() => {
    isDark ? document.body.classList.add('dark') : document.body.classList.remove('dark')
  })
  
  return ( 
    <Navbar className="navbar shadow-sm mb-4">
      <Container>
        <Navbar.Brand><Link to='/' className="logo">Where in the world?</Link></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="theme-toggle" onClick={themeToggle}>
            {
              isDark ? <FaMoon /> : <FaRegMoon />
            }
            <span>Dark Mode</span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default Nav;