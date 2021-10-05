import styled from "styled-components"
export const Servic=  styled.section`
background-color: var(--white);
padding-top:4rem;
padding-bottom:4rem;
`
export const ServiceContainer = styled.div`
display:grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
gap:1rem;
box-shadow:10px 10px 15px var(--white);
width:100%;
`
export const ServiceContent = styled.div`
padding:1rem;
`
export const ImageContainer = styled.img`
width:100%;
height:250px;
display:inline-block;
border-top-left-radius:5px;
border-top-right-radius:5px;
`
export const ServiceInfo = styled.div`
background-color:var(--white);
color:var(--dark);
padding:2rem 1rem;
border-bottom-left-radius:5px;
border-bottom-right-radius:5px;
transition:var(--transition);

:hover{
    background-color:var(--primary);
    color:var(--white);   
}
`
export const ServiceTitle = styled.h3`
 font-size:1.5rem;
 font-weight:600;
 margin-bottom:1rem;
`
export const ServiceText = styled.p`
 font-size:1rem;
 line-height:1.2;
`