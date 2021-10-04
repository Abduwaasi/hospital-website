import React from 'react'
import styled from 'styled-components'
import { AppointmentForm, Cards, InfoCard,Service} from '../../Components'
import { Container } from '../../GlobalStyle'

const ServicePage = styled.div`
padding-top:3rem;
padding-bottom:3rem;
background-color:var(--white);
`
export const ServicePageContainer = styled(Container)`
display:grid;
grid-template-columns: 1fr 2.5fr;

@media screen and (max-width:768px){
    grid-template-columns: 1fr;  
}
${Container}
`
export const CardWrapper = styled.div`
 color:var(--white);
 
`


const Services = () => {
    return (
        <ServicePage>
            <ServicePageContainer>
                <CardWrapper>
                  <Cards/>
                  <InfoCard/>
                  <AppointmentForm/>
                </CardWrapper>
                <Service/>
            </ServicePageContainer>
            
        </ServicePage>
    )
}

export default Services
