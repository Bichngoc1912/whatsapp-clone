import Avatar from "@material-ui/core/Avatar";
import styled from "styled-components";
import Tooltip from "@material-ui/core/Tooltip";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVerticalIcon from "@material-ui/icons/MoreVert";
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import { signOut } from "firebase/auth";
import { auth } from "@/configs/firebase";

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
  color: #0369A1 !important;  
  font-weight: 550 !important;  
  text-transform: uppercase !important;  
`;

export const Sidebar = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledContainer>
      <StyledHeader>
        <Tooltip title='user email..' placement="right">
          <StyledUserAvatar />
        </Tooltip>

        <div>
          <IconButton>
            <ChatIcon/>
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
        <StyledSearchInput placeholder='Search in conversations' />
      </StyledSearch>

      <StyledSidebarButton>
        Start a new conversation
      </StyledSidebarButton>
    </StyledContainer>
  )
};