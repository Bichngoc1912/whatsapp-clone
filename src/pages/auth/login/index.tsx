import { Button } from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import WhatsAppLogo from '@/assets/images/icons8-whatsapp-240.png';

const StyledContainer = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
  background-color: whitesmoke;
`;

const StyledLoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

const StyledImageWrapper = styled.div`
  margin-bottom: 50px;
`;

const LoginPage = () => {
  return (
    <StyledContainer>
      <Head>
        <title>Login</title>
      </Head>

      <StyledLoginContainer>
        <StyledImageWrapper>
          <Image 
            src={WhatsAppLogo} 
            alt='whatsapp logo' 
            height={200} 
            width={200}
          />
        </StyledImageWrapper>

        <Button variant='outlined' onClick={() => {console.log('sign in')}}>Sign in with google</Button>
      </StyledLoginContainer>
    </StyledContainer>
  )
}

export default LoginPage;