import React, { useRef, useState } from 'react';
import './Navbar.modules.css';
import logo from '../assets/myLogo.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../assets/menu_open.svg';
import menu_close from '../assets/menu_close.svg';

function Navbar() {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  const sections = ["home", "about", "Skills", "project", "contact"];

  return (
    <div className='navbar'>
      <img className='logo' src={logo} alt="Logo" />
      <img src={menu_open} onClick={openMenu} alt="Open Menu" className='nav-mob-open' />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="Close Menu" className='nav-mob-close' />
        {sections.map((section) => (
          <li key={section}>
            <AnchorLink className='anchor-link' offset={50} href={`#${section}`}>
              <p onClick={() => setMenu(section)}>
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </p>
              {menu === section && <div className='underline'></div>}
            </AnchorLink>
          </li>
        ))}
      </ul>
      <div className='nav-connect'>
        <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink>
      </div>
    </div>
  );
}

export default Navbar;
