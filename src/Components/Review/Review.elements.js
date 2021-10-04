import styled from "styled-components";
import { Container } from "../../GlobalStyle";
 export const ReviewWrapper= styled.section`
 padding-top:3rem;
 padding-bottom:3rem;
 background:linear-gradient(to right, var(--dark-blue), var(--light-blue));;
 `

 export const ReviewContainer = styled(Container)`
 text-align:center;;
 ${Container}
 `
 export const TitleCenter = styled.div`
 color:var(--white);
 h2{
     text-transform:capitalize;
     font-size:2rem;
     letter-spacing:1.5;
     margin:1rem auto;
 }
 `
 export const PersonCard= styled.div`
  width:80%;
  max-width:800px;
  height:450px;
  margin:auto;
  text-align:center;
  position: relative;
  display:flex;
  overflow: hidden;
 `
 export const PersonArticle = styled.article`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: var(--transition);
  &.activeSlide {
  opacity: 1;
  transform: translateX(0);
}
&.lastSlide {
  transform: translateX(-100%);
}
&.nextSlide {
  transform: translateX(100%);
}

 `
 export const Text = styled.p`
 font-size: 1.4rem;
 color:var(--white);
 line-height:1.5;
 letter-spacing:1.3;
 font-weight: 400;
 margin-bottom: 1rem;
 `
 export const Image = styled.img`
 width:250px;
 height:250px;
 border:2px solid var(--light-blue);
 border-radius:50%;
 object-fit:cover;
 margin:0.8rem auto;

 @media screen and (max-width:768px){
  width:200px;
 height:200px;
 }
 `
 export const Name = styled.h4`
 color:var(--white);
 margin:0.7rem auto;
 text-transform:capitalize;
 letter-spacing:1.4;
 font-size:1.2rem;
 `
 export const Title = styled.h5`
 color:var(--white);
 text-transform:capitalize;
 letter-spacing:1.4;
 font-size:1rem;
 font-weight:300;
 `
 export const IconButton = styled.button`
 outline:none;
 position: absolute;
  top: 300px;
  transform: translateY(-50%);
  background: var(--primary);
  color: var(--white);
  width: 2rem;
  height: 2rem;
  display: grid;
  place-items: center;
  border:2px solid var(--white);
  font-size: 2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: var(--transition);
  left:${({prev})=>(prev&& "1rem")};
  right:${({next})=>(next && "1rem")};
 `