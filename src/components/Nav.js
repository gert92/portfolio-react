import React, { useEffect, useState } from 'react';

const Nav = ({ active }) => {
  const [navbar, setNavbar] = useState('dark');
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const backgroundcolor = window.scrollY < 1 ? 'dark' : 'light';
      setNavbar(backgroundcolor);
    });
    // for (let i = 0; i < menu.current.children.length; i++) {
    //   if (active === menu.current.children[i].children[0].name) {
    //     eval(menu.current.children[i].children[0].name).current.className =
    //       'menu__button menu__button--active';
    //   } else {
    //     eval(menu.current.children[i].children[0].name).current.className =
    //       'menu__button';
    //   }
    // }

    // if (active === 'home') {
    //   home.current.className = 'menu__button menu__button--active';
    // } else if (active === 'about') {
    //   about.current.className = 'menu__button menu__button--active';
    // }
  }, [active]);

  return (
    <nav className={`nav ${navbar}`}>
      <div className="logo">
        <span>G.</span>
      </div>

      <ul className="menu">
        <li>
          <a href="#home" className="menu__button" name="home">
            Home
          </a>
        </li>
        <li>
          <a href="#portfolio" className="menu__button" name="port">
            CV
          </a>
        </li>
        <li>
          <a href="#about" className="menu__button" name="about">
            About Me
          </a>
        </li>

        <li>
          <a href="#contacts" className="menu__button" name="contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
