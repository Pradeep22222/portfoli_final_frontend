import React, { useState } from "react";
import {
  Line,
  Menu,
  NavList,
  NavLogo,
  NavMenuList,
  StyledCTA,
  StyledNavbar,
  StyledNavLinks,
} from "../../style/navbar/NavbarStyled";
import { animateScroll as scroll } from "react-scroll";
import logo from "../../assets/me.png";
import { MobileMenu } from "./MobileMenu";
import "./navbar.css";

export const Navbar = () => {
  const [stickyNav, setStickyNav] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // Height
  const stickyNavFunction = () => {
    if (window.scrollY >= 510) {
      setStickyNav(true);
    } else {
      setStickyNav(false);
    }
  };

  window.addEventListener("scroll", stickyNavFunction);

  const toTop = () => {
    scroll.scrollToTop({ delay: 0, duration: 0 });
  };

  // mobile toggle
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <StyledNavbar className={stickyNav ? "sticky" : ""}>
        <div className="title">
          <NavLogo
            to="/"
            onClick={toTop}
            src={logo}
            alt="logo"
            width="60px"
            height="60px"
            className="transform_up"
          />
        </div>
        <NavMenuList>
          <NavList>
            <StyledNavLinks
              to="home"
              smooth={true}
              duration={0}
              delay={0}
              spy={true}
              spyThrottle={0}
              exact="true"
              offset={-85.26}
            >
              Home
            </StyledNavLinks>
          </NavList>
          <NavList>
            <StyledNavLinks
              to="technologies"
              smooth={true}
              duration={0}
              delay={0}
              spy={true}
              spyThrottle={0}
              exact="true"
              offset={-85.26}
            >
              Skills
            </StyledNavLinks>
          </NavList>
          <NavList>
            <StyledNavLinks
              to="projects"
              smooth={true}
              duration={0}
              delay={0}
              spy={true}
              spyThrottle={0}
              exact="true"
              offset={-85.26}
            >
              Projects
            </StyledNavLinks>
          </NavList>

          <NavList>
            <StyledNavLinks
              to="about"
              smooth={true}
              duration={0}
              delay={0}
              spy={true}
              spyThrottle={0}
              exact="true"
              offset={-85.26}
            >
              About
            </StyledNavLinks>
          </NavList>
          <NavList>
            <StyledNavLinks
              to="contact"
              smooth={true}
              duration={0}
              delay={0}
              spy={true}
              spyThrottle={0}
              exact="true"
              offset={-85.26}
            >
              contact
            </StyledNavLinks>
          </NavList>
         
        </NavMenuList>
        <StyledCTA
          href="mailto:pradeepdhital124@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <span className="email_me">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#fff"
              >
                <path d="M24 0l-6 22-8.129-7.239 7.802-8.234-10.458 7.227-7.215-1.754 24-12zm-15 16.668v7.332l3.258-4.431-3.258-2.901z" />
              </svg>
              Email me
            </span>
          </span>
        </StyledCTA>
        <div className="rightToggleMenu">
          <span>Menu</span>
          <Menu onClick={toggle}>
            <Line width="1.5rem" />
            <Line />
            <Line width="1.5rem" ml="0.5rem" />
          </Menu>
        </div>

        <MobileMenu isOpen={isOpen} toggle={toggle} />
      </StyledNavbar>
    </>
  );
};
