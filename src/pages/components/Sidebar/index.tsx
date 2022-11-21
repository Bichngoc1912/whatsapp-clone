import Avatar from "@material-ui/core/Avatar";
import styled from "styled-components";
import Tooltip from "@material-ui/core/Tooltip";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVerticalIcon from "@material-ui/icons/MoreVert";
import LogoutIcon from '@mui/icons-material/Logout';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from "@material-ui/core/IconButton";

const StyledContainer = styled.div``;
const StyledHeader = styled.div``;
const StyledSearch = styled.div``;
const StyledSidebarButton = styled.button``;
const StyledUserAvatar = styled(Avatar)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

export const Sidebar = () => {
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

          <IconButton>
            <LogoutIcon />
          </IconButton>
        </div>
      </StyledHeader>
      <StyledSearch></StyledSearch>

      <StyledSidebarButton></StyledSidebarButton>
    </StyledContainer>
  )
};