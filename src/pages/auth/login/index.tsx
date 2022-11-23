import { Button } from "@material-ui/core";
import Head from "next/head";
import styled from "styled-components";
import Image from "next/image";
import WhatsAppLogo from '@/assets/images/avatar1.jpg';
import { auth } from "@/configs/firebase";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import MyModal from '@/components/Modal';
import { useState } from 'react';

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
  padding: 50px;
  background-color: white;
  max-width: 300px;
  border-radius: 5px;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

const StyledImageWrapper = styled.div`
  margin-bottom: 50px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const StyledButtonLogin = styled(Button)`
  padding: 5px 15px !important;
  color: #0891B2 !important;
  font-weight: 700 !important;
  border: 1px solid #0891B2 !important;
  :hover {
    text-decoration: none !important;
    color: #06B6D4 !important; 
    background-color: transparent !important; 
  }
`;

const StyledBlockText = styled.div`
  width: 100%;
  word-wrap: break-word;
`;

const LoginPage = () => {
  const [signInWithGoogle, _user, _loading, error] = useSignInWithGoogle(auth);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(true);

  const handleOpenModel = () => {
    setIsOpenModal(true);
  };

  const handleCloseModel = () => {
    setIsOpenModal(false);
  };

  return (
    <>
      <StyledContainer>
        <Head>
          <title>Login</title>
        </Head>

        <StyledLoginContainer>
          <StyledImageWrapper>
            <Image 
              src={WhatsAppLogo} 
              alt='whatsapp logo'
              width={200}
              height={200}
              style={{ borderRadius: '50%' }}
            />
          </StyledImageWrapper>

          <StyledButtonLogin 
            variant='outlined' 
            onClick={() => {signInWithGoogle()}}
          >
            Sign in with google
          </StyledButtonLogin>
        </StyledLoginContainer>
      </StyledContainer>
      
      <MyModal
        isOpen={isOpenModal} 
        isAutoClose={true} 
        handleCloseModal={handleCloseModel} 
        handleOpenModal={handleOpenModel} 
      />
    </>
  
  )
}

export default LoginPage;