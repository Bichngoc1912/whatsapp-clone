import { useReciptient } from "@/hooks/useReceipient";
import { Conversation } from "@/types";
import { useRouter } from "next/router";
import styled from "styled-components";
import RecipientAvatar from "../RecipientAvatar";

const ConversationSelect = ({ id, converssationUser }: {id: string; converssationUser: Conversation['users']}) => {
  const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 15px;
  word-break: break-all;

  :hover {
    background-color: #e9eaeb;
  }
  `
  const { recipient, recipientEmail } = useReciptient(converssationUser);
  const router = useRouter();

  const onSelectConversation = () => {
    router.push(`/conversations/${id}`)
  }

  return (
    <StyledContainer onClick={onSelectConversation}> 
      <RecipientAvatar recipient={recipient} recipientEmail={recipientEmail} />
      <span>{recipientEmail}</span>
    </StyledContainer>
  )
}

export default ConversationSelect;