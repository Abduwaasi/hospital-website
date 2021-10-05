import React from 'react'
import styled from 'styled-components'
import { Button } from '../../GlobalStyle'
import { Container } from '../../GlobalStyle'


const SuccessWrapper= styled.main`
width:100vw;
height:100vh;
display:flex;
justify-content: center;
align-items:center;
background: :linear-gradient(to right var(--dark-blue), var(--light-blue));
`

const SuccessContainer = styled(Container)`
background-color:var(--gray-background);
display:flex;
justify-content:center;
align-items:center;
${Container};
`
export const SuccessCard = styled.div`
width:90vw;
max-width:800px;
text-align:center;

h2{
    font-size:2.5rem;
    font-weight:700;
    line-height:1.5;
    letter-spacing:1.5;
    color:var(--text-black);
    
}
p{
    font-size:1.4rem;
    font-weight:300;
    letter-spacing:1.5;
    margin:1rem auto;
}

`

const Success = () => {
    return (
        <SuccessWrapper>
            <SuccessContainer>
                <SuccessCard>
                    <h2>Your submission has been successful!</h2>
                    <p>Thank you for getting in touch! We appreciate you contacting us</p>
                    <Button>Submit Another</Button>
                </SuccessCard>
            </SuccessContainer>
            
        </SuccessWrapper>
    )
}

export default Success
