import React from 'react'
import {About,AboutContainer,AboutInfo,AboutTitle,AboutText,AboutList,AboutItem,AboutImage} from "./AboutComponent.element"

const AboutComponent = () => {
    return (
        <About>
            <AboutContainer>
               <AboutInfo>
               <AboutTitle>Welcome to AMF Health Service</AboutTitle>
               <AboutText>Phasellus at nunc orci. Donec ipsum metus, pharetra quis nunc sit amet, maximus vehicula nibh. Praesent pulvinar porta elit, a commodo erat accumsan sed. Vivamus vel tristique nibh. Donec imperdiet congue orci consequat mattis. Donec rutrum porttitor sollicitudin. Pellentesque id dolor tempor sapien feugiat ultrices nec sed neque. Fusce ac mattis nulla. Morbi eget ornare dui. Donec nec fringilla mi. Pellentesque molestie consequat felis vitae elementum. Proin ut tempor urna.</AboutText>
               <AboutList>
                   <AboutItem>Cardiovascular Diseases</AboutItem>
                   <AboutItem>Neonatology</AboutItem>
                   <AboutItem>Ophthalmology</AboutItem>
                   <AboutItem>Gastroenterology</AboutItem>
                   <AboutItem>Plastic Surgery</AboutItem>
               </AboutList>
               </AboutInfo>
               <AboutImage src={"https://preview.colorlib.com/theme/medica/img/bg-img/xdoctor.png.pagespeed.ic._d8oqojioK.webp" } alt="doctor"></AboutImage>
            </AboutContainer>
        </About>

    )
}

export default AboutComponent
