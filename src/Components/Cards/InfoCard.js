import React from 'react'
import styled from 'styled-components'
import {FaClock} from "react-icons/fa"
import {GoMail,GoLocation} from "react-icons/go"
import { IconContext } from 'react-icons/lib'


export const Wrapper= styled.div`
 background-color: var(--primary);
 color: var(--white);
 padding: 3rem 2rem;
 border-radius: 3px;
 text-align:left;
`

export const IconWrapper = styled.div`
display:flex;
justify-content: flex-start;
align-items: center;
margin:1rem auto;


 div{
     margin-left: 1.4rem;

     p{
         color:var(--white);
         line-height: 1.6;
         font-size: 0.9rem;
         letter-spacing: 1.4;
         text-transform: capitalize;
     }
 }
`


const InfoCard = () => {
    return (
        <Wrapper>
            <h3>Useful Information</h3>
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
        </Wrapper>
    )
}

export default InfoCard
