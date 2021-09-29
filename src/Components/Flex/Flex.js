import React from 'react'
import DoctorImg from "../../Images/med1.svg"
import { Button } from '../../GlobalStyle'
import {FlexWrapper,FlexContainer,FlexRow,FlexInfo,FlexImage,Image} from "./Flex.elements"

const Flex = () => {
    return (
       <FlexWrapper>
           <FlexContainer>
               <FlexRow>
                   <FlexInfo>
                    <h1>Medical healthcare solution</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates illo doloribus, similique delectus amet suscipit nulla quod? Explicabo, aut sint?</p>
                    <Button>Services</Button>
                   </FlexInfo>
                   <FlexImage>
                       <Image src={DoctorImg} alt="Medical doctor"/>
                   </FlexImage>
               </FlexRow>
           </FlexContainer>
       </FlexWrapper>
    )
}

export default Flex
