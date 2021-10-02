import react from "react"
import styled from "styled-components"
 const Wrapper = styled.div`
 background-color: var(--primary);
 color: var(--white);
 padding: 3rem 2rem;
 border-radius: 3px;
 box-shadow: 5px 5px 10px lightgray;

 h2{
     margin-bottom: 1rem;
     font-size: 1.4rem;
     font-weight: 700;
     line-height: 1.4;
     letter-spacing: 1.4;
 }
 h4{
     font-size: 2rem;
     margin-bottom: 1.4rem;
     color:var(--dark);
     letter-spacing: 1.3;
 }
 p{
     font-size: 1rem;
     font-weight: 5oo;
 }
`

 const EmergencyCard =()=>{
    return <Wrapper>
      <h2>For Emergencies</h2>
      <h4>08167641246</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, dolor. Ipsam est praesentium, exercitationem quod pariatur explicabo laudantium quasi nam.</p>
    </Wrapper>
}
export default EmergencyCard