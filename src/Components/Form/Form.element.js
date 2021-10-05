import styled from "styled-components";
export const FormComponent = styled.form`
padding: 2rem;
background-color:var(--dark-blue);
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
background-color: var(--gray-background);
margin:0.5rem auto;
outline:none;
border:transparent;
border-radius:5px;
font-size:1.2rem;
:hover{
    background-color: var(--white);
    color:var(--text-black);
}
:focus{
    background-color: var(--white);
    border:2px solid var(--light-blue);
}

`
export const Message = styled.textarea`
padding: 1rem 2rem;
width:100%;
height:200px;
outline:none;
border:transparent;
border-radius:5px;
background: var(--gray-background);
color:var(--text-black);
font-size:1.2rem;
margin:0.5rem auto;
transition: var(--transition);

:hover{
    color:var(--text-black);
    background-color:var(--white);
}
:focus{
    background-color: var(--white);
    border:2px solid var(--light-blue);
}
`
export const Button = styled.input`
background-color: var(--white);
color:var(--btn-blue);
padding:1rem 3rem;
text-transform:capitalize;
font-size:1.2rem;
transition:var(--transition);
outline:none;
border:2px solid var(--btn-blue);

margin-top:0.5rem;
:hover{
    background-color: var(--btn-blue);
    color:var(--white);
}
`