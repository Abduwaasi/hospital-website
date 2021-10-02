import React from 'react'
import { IconContext } from 'react-icons'
import {AiOutlineSetting} from "react-icons/ai"
import {medObj} from "../../data"
import {MedService,MedContainer,MedWrapper,Title,Text} from "./MedicalService.element"


const MedicalService = () => {
    return (
        <IconContext.Provider value={{style:{color:"#fff", fontSize:"3rem"}}}>

            <MedService>
              <AiOutlineSetting/>
            <h2>Our Services</h2>
            <MedContainer>
                {medObj.map((item)=>{
                    return <EachMedService key={item.id} {...item}/>
                })}
            </MedContainer>
        </MedService>

        </IconContext.Provider>

      
    )
}

const EachMedService =({icon,title, text})=>{
    return <MedWrapper>
        <span>{icon}</span>
        <Title>{title}</Title>
        <Text>{text}</Text>
    </MedWrapper>
}

export default MedicalService
