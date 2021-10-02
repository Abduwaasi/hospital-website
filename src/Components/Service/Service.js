import React from 'react'
import { serviceObj } from '../../data'
import { Servic, ServiceContainer,ServiceContent,ImageContainer,ServiceInfo,ServiceTitle,ServiceText} from './Services.element'

const Service = () => {
    return (
       <Servic>
           <ServiceContainer>
               {serviceObj.map((item)=>{
                   return <EachService key={item.id} {...item}/>
               })}
           </ServiceContainer>
       </Servic>
    )
}

const EachService =({image, title, text,alt})=>{
    return <ServiceContent>
            <ImageContainer src={image} alt={alt}/>
            <ServiceInfo>
                <ServiceTitle>{title}</ServiceTitle>
                <ServiceText>{text}</ServiceText>
            </ServiceInfo>
       </ServiceContent>
}

export default Service
