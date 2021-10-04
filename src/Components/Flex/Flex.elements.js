import styled from "styled-components";

import { Container } from "../../GlobalStyle";

export const FlexWrapper = styled.div`
background:linear-gradient(to right, var(--dark-blue) , var(--light-blue));
width:100%;
`

export const FlexContainer = styled(Container)`
padding-top:3rem;
padding-bottom:3rem;
display:flex;
${Container};
`
export const FlexRow = styled.div`
display:flex;
flex-direction: row;
justify-content:space-between;
align-items:center;
flex-wrap:wrap;


`

export const FlexInfo = styled.div`
width:50%;
margin-bottom:2rem;
color:var(--white);

h1{
    margin-bottom:1rem;
    letter-spacing:1.5;
    font-size:3rem;
    font-weight:700;
    width:90%;

}
p{
    margin-bottom:1.6rem;
    font-size:1.5rem;
    font-weight:400;
    letter-spacing:1.4;
    line-height:1.5;
}
@media screen and (max-width:768px){
  width:100%;
  

  h1{
      width:100%;
      font-size:2rem;
  }
  p{
      width:100%;
      
  }

}

`
export const FlexImage = styled.div`
width:50%;
@media screen and (max-width:768px){
    width:100%;
    max-width:90%;
    margin:0 auto;
}
`
export const Image = styled.img`
 width:100%;
 display:inline-block;
 vertical-align:middle;
 height:400px;

`

// Home Info styling

export const HomeContact = styled.div`
background-color:var(--gray-background);
padding-top: 5rem;
padding-bottom: 5rem;
`
export const HomeContainer= styled(Container)`
display:flex;
justify-content: space-between;
align-items:center;
flex-wrap:wrap;
${Container};
`

export const IconWrapper= styled.div`
display:flex;
justify-content:center;
align-items:center;
max-width:100%;

div{
    margin-left:1rem;
     
}
p{
    line-height:1.5;
    font-size:1rem;
}

@media screen and (max-width:768px){
    margin-bottom:1.5rem;
}
`

// Home card

export const HomeCard =styled.div`
width:100%;
background-color:var(--white);
padding-top:3rem;
padding-bottom:3rem;
`
export const HomeCardContainer = styled(Container)`
margin:auto;
margin-top:-5rem;
display:grid;
grid-template-columns:repeat(auto-fit, minmax(300px,1fr));

@media screen and (max-width:768px){
    padding:0;
}


${Container};
`