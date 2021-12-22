import {Nav,NavDropdown} from 'react-bootstrap'
import Layout from "../components/Layout";


// export default function NavDropdownExample() {
//     const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  
//     return (
        
//       <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      
//         <Nav.Item>
//           <Nav.Link eventKey="2" title="Item">
//             NavLink 2 content
//           </Nav.Link>
//         </Nav.Item>
//         <Nav.Item>
//           <Nav.Link eventKey="3" disabled>
//             NavLink 3 content
//           </Nav.Link>
//         </Nav.Item>
//         <NavDropdown title="Dropdown" id="nav-dropdown">
//           <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
//           <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
//           <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
//           <NavDropdown.Divider />
//           <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
//         </NavDropdown>
//       </Nav>
      
//     );
//   }
  

import React from "react";
import Link from "next/link";

import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  // console.log(router);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand d-flex align-items-center">
            <span className="ms-2"> My teacher </span>
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
         
            <li className="nav-item">
              <Link href="/">
                <a
                  className={
                    "nav-link " + `${router.pathname === "/" ? "active" : ""}`
                  }
                  aria-current="page"
                >
                  Projects
                </a>
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/SignIn">
                <a
                  className={
                    "nav-link " +
                    `${router.pathname === "/SignIn" ? "active" : ""}`
                  }
                >
                  SignIn
                </a>
              </Link>
            </li>

            
            <li className="nav-item">
              <Link href="/Contact">
                <a
                  className={
                    "nav-link " +
                    `${router.pathname === "/Contact" ? "active" : ""}`
                  }
                >

                  Contact

                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/teacher">
                <a
                  className={
                    "nav-link " +
                    `${router.pathname === "/teacher" ? "active" : ""}`
                  }
                >
              Teacher
                </a>
              </Link>
            </li>
            {/* <li className="nav-item">
              <select>
                <option>
                <Link href="/teacher">
                <a
                  className={
                    "nav-link " +
                    `${router.pathname === "/teacher" ? "active" : ""}`
                  }
                >
              Teacher
                </a>
              </Link>
                </option>
              </select>
            </li> */}
            <li className="nav-item">
            <NavDropdown title="Dropdown" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
         </NavDropdown>   
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;