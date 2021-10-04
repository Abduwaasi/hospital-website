import react from "react"
import styled from "styled-components"
 const Wrapper = styled.div`
 background-color: var(--btn-blue);
 color: var(--white);
 padding:2rem;
 width:100%;
 height: 350px;
 border-radius:3px;


 h2{
     margin-bottom: 1rem;
     font-size: 1.5rem;
     font-weight: 700;
     line-height: 1.4;
     letter-spacing: 1.4;
 }
 h4{
     font-size: 2.4rem;
     margin-bottom: 1.4rem;
     color:var(--dark-blue);
     letter-spacing: 1.5;
 }
 p{
     font-size: 1rem;
     font-weight: 400;
     line-height:1.4;
 }
`

 const Cards =()=>{
    return <Wrapper>
      <h2>For Emergencies</h2>
      <h4>08167641246</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, dolor. Ipsam est praesentium, exercitationem quod pariatur explicabo laudantium quasi nam.</p>
    </Wrapper>
}
export default Cards