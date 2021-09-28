import React, { Fragment } from "react";
import {FaFacebook, FaLinkedin,FaYoutube,FaInstagram,FaTwitter} from "react-icons/fa"
import { Button } from "../../GlobalStyle";
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
  SocialIcon,
  WebsiteRight,
  SocialIcons,
  SocialIconLink
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
              <FooterLink to="/sign-up">How it works</FooterLink>
              <FooterLink to="/sign-up">Testimonials</FooterLink>
              <FooterLink to="/sign-up">Carees</FooterLink>
              <FooterLink to="/sign-up">Investors</FooterLink>
              <FooterLink to="/sign-up">Terms of services</FooterLink>
           </FooterLinksItems>
           <FooterLinksItems>
             <FooterLinkTitle>Services</FooterLinkTitle>
              <FooterLink to="/sign-up">Emergency Help</FooterLink>
              <FooterLink to="/sign-up">Hospital Treatment</FooterLink>
              <FooterLink to="/sign-up">Mobile Healthcare</FooterLink>
              <FooterLink to="/sign-up">Medication Pill</FooterLink>
              <FooterLink to="/sign-up">Full life support</FooterLink>
           </FooterLinksItems>
           </FooterLinksWrapper>
           
           <FooterLinksWrapper>
           <FooterLinksItems>
             <FooterLinkTitle>About us</FooterLinkTitle>
              <FooterLink to="/sign-up">How it works</FooterLink>
              <FooterLink to="/sign-up">Testimonials</FooterLink>
              <FooterLink to="/sign-up">Carees</FooterLink>
              <FooterLink to="/sign-up">Investors</FooterLink>
              <FooterLink to="/sign-up">Terms of services</FooterLink>
           </FooterLinksItems>
          
         </FooterLinksWrapper>
       </FooterLinksContainer>
       <SocialMedia>
         <SocialMediaWrap>
           <SocialLogo to="/">
            <SocialIcon/>
            Medicals
           </SocialLogo>
           <WebsiteRight>The Medicals &copy; 2021</WebsiteRight>
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
               <SocialIconLink href="/" target="_blank" arial-label="Youtube" rel="noopener noreferrer">
               <FaYoutube/>
             </SocialIconLink>
           </SocialIcons>
         </SocialMediaWrap>
       </SocialMedia>
      </FooterContainer>
    </Fragment>
  );
};
export default Footer;
