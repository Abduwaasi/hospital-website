import React from 'react'
import styled from "styled-components"
import {Container} from "../../GlobalStyle"
import {Form,Cards,InfoCard,Map} from "../../Components"

const ContactPage = styled.section`
 padding-top:3rem;
 padding-bottom:3rem;
 background-color:var(--white);
`

 const ContactContainer = styled(Container)`
 ${Container}
 `
  const FormWrapper = styled.div`
  display:grid;
  grid-template-columns:2fr 1fr;
  @media screen and (max-width:768px){
      grid-template-columns:1fr;
  }
  `
  const CardWrapper = styled.div`
 display:grid;
 grid-template-rows: 1fr 1fr;
 row-gap:2rem;
  
  `

const Contact = () => {
    return (
        <ContactPage>
            <ContactContainer>
             <FormWrapper>
                 <Form/>
                <CardWrapper>
                    <Cards/>
                    <InfoCard/>
                </CardWrapper>
             </FormWrapper>
             <Map/>
            </ContactContainer> 
        </ContactPage>
    )
}

export default Contact
