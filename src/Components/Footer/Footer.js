import React, { Fragment } from "react";
import {FaFacebook, FaLinkedin,FaInstagram,FaTwitter,FaClock} from "react-icons/fa"
import {GoMail,GoLocation} from "react-icons/go"
import { Button } from "../../GlobalStyle";
import AMF_LOGO from "../../Images/amf_logo-min.png"
import {IconContext} from "react-icons/lib"

import {
  FooterContainer,
  FooterSubcription,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  OfficialLogo,
  WebsiteRight,
  SocialIcons,
  SocialIconLink,
  IconWrapper
} from "./Footer.elements";

const Footer = () => {
  return (
    <Fragment>
      <FooterContainer>
        <FooterSubcription>
          <FooterSubHeading>
            Join our exclusive membership to receive the latest news and trends
          </FooterSubHeading>
          <FooterSubText>You can unsubcribe at any time</FooterSubText>
          <Form>
            <FormInput
              name="email"
              type="email"
              placeholder="enter email"
            ></FormInput>
          <Button fontBig>Subcribe</Button>
          </Form>
       </FooterSubcription>
       <FooterLinksContainer>
         <FooterLinksWrapper>
           <FooterLinksItems>
             <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/about">How it works</FooterLink>
              <FooterLink to="/about">Testimonials</FooterLink>
              <FooterLink to="/about">Carees</FooterLink>
              <FooterLink to="/about">Investors</FooterLink>
              <FooterLink to="/about">Terms of services</FooterLink>
           </FooterLinksItems>
           <FooterLinksItems>
             <FooterLinkTitle>Services</FooterLinkTitle>
              <FooterLink to="/service">Emergency Help</FooterLink>
              <FooterLink to="/service">Hospital Treatment</FooterLink>
              <FooterLink to="/service">Mobile Healthcare</FooterLink>
              <FooterLink to="/service">Medication Pill</FooterLink>
              <FooterLink to="/service">Full life support</FooterLink>
           </FooterLinksItems>
           <FooterLinksItems>
           <FooterLinkTitle>Contact</FooterLinkTitle>
           <IconContext.Provider value={{style:{fontSize:"2rem", color:"var(--dark-blue"}}}>
            <FooterLink to="/contact">
            <IconWrapper>
             <FaClock/>
             <div>
                 <p>Monday - Friday 08:00 - 21:00</p>
                 <p>Saturday and Sunday - CLOSED</p>
             </div>
            </IconWrapper>
            </FooterLink>
              <FooterLink to="/contact">
              <IconWrapper>
             <GoMail/>
             <div>
                 <p>673 729 766 OR 234 5678 900</p>
                 <p>contact@business.com</p>
             </div>
            </IconWrapper> 
            </FooterLink>
              <FooterLink to="/contact">
              <IconWrapper>
             <GoLocation/>
             <div>
                 <p>Adesina Close, Local Government Scheme</p>
                 <p> Odo- Ori, Iwo, Osun State</p>
             </div>
            </IconWrapper> 
              </FooterLink>
              </IconContext.Provider>
           </FooterLinksItems>
           </FooterLinksWrapper>  
       </FooterLinksContainer>
       <SocialMedia>
         <SocialMediaWrap>
           <SocialLogo to="/">
            < OfficialLogo  src={AMF_LOGO} alt="official logo"/>
            AMF Health Services
           </SocialLogo>
           <WebsiteRight>AMF Health Services &copy; 2021</WebsiteRight>
           <SocialIcons>
             <SocialIconLink href="/" target="_blank" arial-label="Facebook">
               <FaFacebook/>
             </SocialIconLink>
             <SocialIconLink href="/" target="_blank" arial-label="Instagram">
               <FaInstagram/>
             </SocialIconLink>
             <SocialIconLink href="/" target="_blank" arial-label="Twitter">
               <FaTwitter/>
             </SocialIconLink>
             <SocialIconLink href="/" target="_blank" arial-label="FaLinkedin">
               <FaLinkedin/>
             </SocialIconLink>
           </SocialIcons>
         </SocialMediaWrap>
       </SocialMedia>
      </FooterContainer>
    </Fragment>
  );
};
export default Footer;
