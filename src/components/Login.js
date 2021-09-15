import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <SignUp>Get All There</SignUp>
                <Description>
                Get Premier Access to Raya and the Last Dragon for an additional fee with a Disney+ subscription. As of 03/26/21, the price of Disney+ and The Disney Bundle will increase by $1.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" />
            </CTA>
        </Container>
    )
}

export default Login

const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    
    justify-content: center;

    &:before {
        background-position: top;
        background-size: cover;
        position: absolute;
        background-repeat: no-repeat;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        opacity: 0.7;
        content: "";
        background-image: url("/images/login-background.jpg");
        z-index: -1;
    }


`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    margin-top: 100px;
    align-items: center;
    flex-direction: column;

`

const CTALogoOne = styled.img`

`

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 20px;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    color: #f9f9f9;
    font-size: 18px;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 10px;
    margin-bottom: 12px;


    &:hover {
        background: #0483ee;
    }

`
const Description = styled.p`
    font-size: 11px;
    text-align: center;
    line-height: 1.5;
    letter-spacing: 1.5px;
`

const CTALogoTwo = styled.img`
    width: 90%;
    
`