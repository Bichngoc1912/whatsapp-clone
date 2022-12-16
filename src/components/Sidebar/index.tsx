import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';
import Tooltip from '@material-ui/core/Tooltip';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVerticalIcon from '@material-ui/icons/MoreVert';
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { signOut } from 'firebase/auth';
import { auth, db } from '@/configs/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState, useMemo } from 'react';
import FormDialog from '@/components/DialogForm';
import * as EmailValidator from 'email-validator';
import { addDoc, collection, query, where } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { Conversation } from '@/types';
import ConversationSelect from '../ConversationSelect';

const StyledContainer = styled.div`
  height: 100vh;
  min-width: 300px;
  max-width: 350px;
  overflow-y: scroll;
  border-right: 1px solid whitesmoke;
`;

const StyledHeader = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 1;
  background-color: white;
  justify-content: space-between;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
  align-items: center;
`;

const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 2px;
`;

const StyledUserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

const StyledSearchInput = styled.input`
  outline: none;
  border: none;
  flex: 1;
`;

const StyledSidebarButton = styled(Button)`
  width: 100% !important;
  border-top: 1px solid whitesmoke !important;
  border-bottom: 1px solid whitesmoke !important;
  color: #0369a1 !important;
  font-weight: 550 !important;
  text-transform: uppercase !important;
`;

export const Sidebar = () => {
  const [loggedInUser, _loading, _error] = useAuthState(auth);
  const [isOpenNewConversationDialog, setIsOpenNewConversationDialog] = useState(false);
  const [receiptEmail, setReceiptEmail] = useState('');

  const toggleNewConversationDialog = (isOpen: boolean) => {
    setIsOpenNewConversationDialog(isOpen);

    if (!isOpen) setReceiptEmail('');
  };

  const closeNewConversationDialog = () => {
    toggleNewConversationDialog(false);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  const isInvitingSeft = useMemo(() => {
    return receiptEmail === loggedInUser?.email;
  }, [loggedInUser?.email, receiptEmail]);

  //check if conversation already exits beween the current logged in user and recipient
  const queryGetConversattionsForCurrentUsser = query(
    collection(db, 'conversations'),
    where('users', 'array-contains', loggedInUser?.email),
  );
  const [conversationsSnapshot, __loading, __error] = useCollection(
    queryGetConversattionsForCurrentUsser,
  );

  const isConversationAlreadyExists = (recipientEmail: string) => {
    return conversationsSnapshot?.docs.find((conversation) =>
      (conversation.data() as Conversation).users.includes(recipientEmail),
    );
  };

  const createConversation = async () => {
    if (!receiptEmail) return;

    if (
      EmailValidator.validate(receiptEmail) &&
      !isInvitingSeft &&
      !isConversationAlreadyExists(receiptEmail)
    ) {
      await addDoc(collection(db, 'conversations'), {
        users: [loggedInUser?.email, receiptEmail],
      });
    }

    closeNewConversationDialog();
  };

  return (
    <StyledContainer>
      <StyledHeader>
        <Tooltip title={loggedInUser?.email as string} placement="right">
          <StyledUserAvatar src={loggedInUser?.photoURL || ''} />
        </Tooltip>

        <div>
          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVerticalIcon />
          </IconButton>

          <IconButton onClick={() => handleLogout()}>
            <LogoutIcon />
          </IconButton>
        </div>
      </StyledHeader>
      <StyledSearch>
        <SearchIcon />
        <StyledSearchInput placeholder="Search in conversations" />
      </StyledSearch>

      <StyledSidebarButton onClick={() => toggleNewConversationDialog(true)}>
        Start a new conversation
      </StyledSidebarButton>

      {conversationsSnapshot?.docs?.map((conversation, idx) => {
        return (
          <ConversationSelect
            key={conversation.id}
            id={conversation.id}
            converssationUser={(conversation.data() as Conversation).users}
          />
        );
      })}
      <FormDialog
        closeNewConversationDialog={closeNewConversationDialog}
        isOpenDialog={isOpenNewConversationDialog}
        toggleNewDialog={toggleNewConversationDialog}
        receiptEmail={receiptEmail}
        createConversation={createConversation}
        setReceiptEmail={setReceiptEmail}
      />
    </StyledContainer>
  );
};
