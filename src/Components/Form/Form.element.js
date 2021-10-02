import styled from "styled-components";
export const FormComponent = styled.form`
padding: 2rem;
width:100%;
`
export const NameContainer = styled.div`
display:grid;
grid-template-columns: 1fr 1fr;
gap: 2rem;
width:100%;

@media screen and (max-width:768px){
    grid-template-columns: 1fr;
    gap: 0;
}

`
export const Input= styled.input`
padding: 1rem 2rem;
width:100%;
background-color: lightgray;
margin:0.5rem auto;
outline:none;
border:transparent;
border-radius:5px;
:focus{
    border:2px solid var(--primary);
    background-color: var(--white);
    color:lightgray;
}

`
export const Message = styled.textarea`
padding: 1rem 2rem;
width:100%;
height:200px;
outline:none;
border:transparent;
border-radius:5px;
background: lightgray;
font-size:1rem;
margin:0.5rem auto;

:focus{
    background-color: var(--white);
    color:lightgray;
    border:2px solid var(--primary);
}
`
export const Button = styled.input`
background-color: var(--white);
color:var(--primary);
padding:1rem 3rem;
text-transform:capitalize;
font-size:1rem;
transition:var(--transition);
border:2px solid var(--primary);
margin-top:0.5rem;
:hover{
    background-color: var(--primary);
    color:var(--white);
}
`