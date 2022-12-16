import { Sidebar } from '@/components/Sidebar';
import { auth, db } from '@/configs/firebase';
import { Conversation, IMessage } from '@/types';
import { generateQueryGetMessages, transformMessage } from '@@/utils/getMessageInConversation';
import { getReceipitientEmail } from '@@/utils/getRecipientEmail';
import { doc, getDoc, getDocs } from 'firebase/firestore';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { useAuthState } from 'react-firebase-hooks/auth';
import styled from 'styled-components';

interface ConversationProps {
  conversation: Conversation;
  messages: IMessage[];
}

export const getServerSideProps: GetServerSideProps<
  ConversationProps,
  { id: string }
> = async (context) => {
  const conversationId = context.params?.id;

  //get conversation, to know who we are chatting with
  const conversationRef = doc(db, 'conversations', conversationId as string);
  const conversationSnapshot = await getDoc(conversationRef);

  //get all messages between logged in user and recipient in this conversation 
  const queryMessages = generateQueryGetMessages(conversationId); 
  const messagesSnapshot = await getDocs(queryMessages);
  const messages = messagesSnapshot.docs.map(messageDoc => transformMessage(messageDoc));

  return {
    props: {
      conversation: conversationSnapshot.data() as Conversation,
      messages: messages
    },
  };
};

const StyledContainer = styled.div`
  display: flex;
`;

function ConversationPage({ conversation, messages }: ConversationProps) {
  const [loggedInUser, __loading, __error] = useAuthState(auth);

  return (
    <StyledContainer>
      <Head>
        <title>
          Conversation with {getReceipitientEmail(conversation.users, loggedInUser)}
        </title>
      </Head>

      <Sidebar />
      
      {
        messages.map(message => <p key={message.id}>{JSON.stringify(message)}</p>)
      }
    </StyledContainer>
  );
}

export default ConversationPage;