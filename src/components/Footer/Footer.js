import React from "react";
import {  Link } from "react-router-dom";

import { animateScroll as scroll } from "react-scroll";
import {
  ArrowToTop,
  ContactHeader,
  ContactLink,
  Copyright,
  FooterArrowLine,
  FooterBigLink,
  FooterBigLinkContainer,
  FooterContact,
  FooterContacts,
  FooterLine,
  FooterSmallTitle,
  FooterSmallTitleWrapper,
  FooterSocials,
  StyledFooter,
} from "../../style/footer/FooterStyle";
import { ContactForm } from "./ContactForm";

const toTop = () => {
  scroll.scrollToTop({ delay: 0, duration: 0 });
};

const Footer = ({ children }) => {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      <FooterSmallTitleWrapper>
        <FooterSmallTitle>get in touch</FooterSmallTitle>
      </FooterSmallTitleWrapper>
      <div id="contact">
        <FooterBigLinkContainer>
          <FooterBigLink
            href="mailto:karkibishal00@gmail.com"
            data-hover="Let's talk!"
          >
            Need a developer?
          </FooterBigLink>
          <ContactForm></ContactForm>
        </FooterBigLinkContainer>
        <FooterContacts>
          <FooterContact>
            <ContactHeader>Call me</ContactHeader>
            <ContactLink href="tel:+61451644397">+61451644397</ContactLink>
          </FooterContact>
          <FooterContact>
            <ContactHeader>Social</ContactHeader>{" "}
            <FooterSocials>
              <ContactLink
                href="https://github.com/Pradeep22222"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i> Github
              </ContactLink>
              <ContactLink
                href="https://www.linkedin.com/in/pradeepkumardhital/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </ContactLink>
              <ContactLink
                href="https://twitter.com/PradeepDhital3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i> Twitter
              </ContactLink>
              <ContactLink
                href="https://www.instagram.com/p_k_dhee_taal/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i> Insta
              </ContactLink>
              <ContactLink
                href="https://www.facebook.com/pk.dheetaal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i> Facebook
              </ContactLink>
            </FooterSocials>
          </FooterContact>
          <FooterContact>
            <ContactHeader>Let's grab a coffee.</ContactHeader>
            <ContactLink href="mailto:pradeepdhital124@gmail.com">
              pradeepdhital124@gmail.com
            </ContactLink>
          </FooterContact>
        </FooterContacts>

        <FooterArrowLine>
          <FooterLine />
          <ArrowToTop title="Back to Top" onClick={toTop}></ArrowToTop>
        </FooterArrowLine>

        <Copyright>
          <small>
            &copy; Copyright {year},{" "}
            <Link to="/login" className="link_white">
              Pradeep Kumar Dhital
            </Link>
          </small>
        </Copyright>
      </div>
    </StyledFooter>
  );
};

export default Footer;
