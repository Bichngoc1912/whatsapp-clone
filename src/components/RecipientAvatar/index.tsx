import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';
import { RecipientAvatarProps } from './types';

const StyledAvatar = styled(Avatar)`
  margin: 5px 5px 5px 5px;
`;
const RecipentAvatar = ({ recipient, recipientEmail }: RecipientAvatarProps) => {
  return recipient?.photoURL ? (
    <StyledAvatar src={recipient.email} />
  ) : (
    <StyledAvatar>{recipientEmail && recipientEmail[0].toUpperCase()}</StyledAvatar>
  );
};

export default RecipentAvatar;
