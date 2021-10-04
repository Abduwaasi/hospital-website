import React from 'react'
import DoctorImg from "../../Images/med1.svg"
import { Button } from '../../GlobalStyle'
import { Cards,InfoCard,AppointmentForm} from '../index'
import {FaClock} from "react-icons/fa"
import {GoMail,GoLocation} from "react-icons/go"
import { IconContext } from 'react-icons/lib'
import {FlexWrapper,FlexContainer,FlexRow,FlexInfo,FlexImage,Image,HomeContact,HomeContainer,IconWrapper, HomeCard,HomeCardContainer} from "./Flex.elements"


const Flex = () => {
    return (
       <FlexWrapper>
           <FlexContainer>
               <FlexRow>
                   <FlexInfo>
                    <h1>AMF health service solution</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illo doloribus, similique delectus amet suscipit nulla quod? Explicabo, aut sint?</p>
                    <Button>Services</Button>
                   </FlexInfo>
                   <FlexImage>
                       <Image src={DoctorImg} alt="Medical doctor"/>
                   </FlexImage>
               </FlexRow>
           </FlexContainer>
           <HomeInfo/>
           <CardSection/>
       </FlexWrapper>
    )
}

const HomeInfo = ()=>{
    return (
        <HomeContact>
      <HomeContainer>
    <IconContext.Provider value={{style:{fontSize:"2rem"}}}>
     <IconWrapper>
      <FaClock/>
      <div>
          <p>Monday - Friday 08:00 - 21:00</p>
          <p>Saturday and Sunday - CLOSED</p>
      </div>
     </IconWrapper> 
     <IconWrapper>
      <GoMail/>
      <div>
          <p>673 729 766 OR 234 5678 900</p>
          <p>contact@business.com</p>
      </div>
     </IconWrapper> 
     <IconWrapper>
      <GoLocation/>
      <div>
          <p>Adesina Close, Local Government Scheme</p>
          <p> Odo- Ori, Iwo, Osun State</p>
      </div>
     </IconWrapper> 

     </IconContext.Provider>
     </HomeContainer>
        
        </HomeContact>
    )
}

const CardSection =()=>{
    return (
        <HomeCard>
            <HomeCardContainer>
                <div>
                  <Cards/>
                </div>
                <div>
                <InfoCard/>
                </div>
                <div>
                <AppointmentForm/>
                </div>
            </HomeCardContainer>
        </HomeCard>
    )
}

export default Flex
