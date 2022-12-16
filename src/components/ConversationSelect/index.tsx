import { Conversation } from "@/types";
import styled from "styled-components";

const ConversationSelect = ({ id, converssationUser }: {id: string; converssationUser: Conversation['user']}) => {
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
  console.log('hhhihihiihih');

  return (
    <StyledContainer> 
      ------- uar gif day 
      {id} - {converssationUser}
    </StyledContainer>
  )
}

export default ConversationSelect;