import { Sidebar } from '@/components/Sidebar';
import { auth, db } from '@/configs/firebase';
import { Conversation } from '@/types';
import { getReceipitientEmail } from '@@/utils/getRecipientEmail';
import { doc, getDoc } from 'firebase/firestore';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components';

interface ConversationProps {
  conversation: Conversation;
}

export const getServerSideProps: GetServerSideProps<
  ConversationProps,
  { id: string }
> = async (context) => {
  const conversationId = context.params?.id;

  //get conversation, to know who we are chatting with
  const conversationRef = doc(db, 'conversations', conversationId as string);
  const conversationSnapshot = await getDoc(conversationRef);

  return {
    props: {
      conversation: conversationSnapshot.data() as Conversation,
    },
  };
};

const StyledContainer = styled.div`
  display: flex;
`;

function ConversationPage({ conversation }: ConversationProps) {
  const [loggedInUser, __loading, __error] = useAuthState(auth);

  return (
    <StyledContainer>
      <Head>
        <title>
          Conversation with {getReceipitientEmail(conversation.users, loggedInUser)}
        </title>
      </Head>

      <Sidebar />
      <h1>MESSAGE</h1>
    </StyledContainer>
  );
}

export default ConversationPage;
