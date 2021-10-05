import React from 'react'
import { FaPhone } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import styled from "styled-components"
import { Container } from '../../GlobalStyle'
import { doctors } from '../../data'
const CardWrapper = styled.section`
background-color:var(--gray-background);
padding-top:3rem;
padding-bottom:3rem;
`
 const CardContainer = styled(Container)`
text-align: center;

h2{
  font-size:2rem;
  color:var(--dark-blue);
  letter-spacing: 1.5;
 }
 p{
     font-size:1.2rem;
     font-weight:400;
     letter-spacing:1.5;
 }

${Container};
`

const Underline = styled.div`
  width:100px;
  margin:0.5rem auto;
  height:3px;
  background-color:var(--dark-blue);
`

 const CardGridCenter = styled.div`
 display:grid;
 grid-template-columns: repeat(2, 350px);
 gap:2rem;
 justify-content:center;
 align-items:center;
 

 @media screen and (max-width:768px){
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
 }

 div{
     margin-top:2.5rem;
 }
 `
 const Image= styled.img`
 width:100%;
 height:300px;
 display:inline-block;
 `
 const Info = styled.div`
 background-color: var(--white);
 padding:1rem;
 `
 const Name = styled.h3`
 font-size:1.2rem;
 margin-bottom:0.5rem;
 `
 const Title = styled.h5`
 font-size: 0.8rem;
 font-weight:300;
 `
 const ContactContainer = styled.div`
 display:flex;
 justify-content: center;
 align-items:flex-start;
 font-size:1.5rem;

 p{
     margin-left:0.3rem;
 }
 `

const DoctorCard = () => {

    return (
        <CardWrapper>
            <CardContainer>
                
                <h2>Our Doctors</h2>
                <Underline/>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias, voluptatem?</p>
                <CardGridCenter>
                    {doctors.map((doctor)=>{
                        const {id,image,name,title,contact}=doctor
                        return <div key={id}>
                           <Image src={image} alt={name}/>
                           <Info>
                               <Name>{name}</Name>
                               <Title>{title}</Title>
                               <ContactContainer>
                                   <FaPhone/>
                                   <p>{contact}</p>
                               </ContactContainer>
                           </Info>
                        </div>
                        
                    })}

                </CardGridCenter>

             
             </CardContainer>
            
        </CardWrapper>
    )
}

export default DoctorCard
