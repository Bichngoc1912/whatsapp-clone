import styled from 'styled-components';
import Image from 'next/image';
import WhatsAppLogo from '@/assets/images/avatar1.jpg';
import { CircularProgress } from '@material-ui/core';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const StyledImageWrapper = styled.div`
  margin-bottom: 50px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const Loading = () => {
  return (
    <StyledContainer>
      <StyledImageWrapper>
        <Image
          src={WhatsAppLogo}
          alt="whatsapp logo"
          width={200}
          height={200}
          style={{ borderRadius: '50%' }}
        />
      </StyledImageWrapper>

      <CircularProgress />
    </StyledContainer>
  );
};

export default Loading;
