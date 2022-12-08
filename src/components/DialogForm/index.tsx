import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogFormProps } from './types';

export default function FormDialog(props: DialogFormProps) {
  const { 
    isOpenDialog, 
    receiptEmail, 
    setReceiptEmail, 
    closeNewConversationDialog,
    createConversation
  } = props;

  return (
    <div>
      <Dialog open={isOpenDialog} onClose={closeNewConversationDialog}>
        <DialogTitle>New Conversation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter a Google email address for the user 
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={receiptEmail}
            onChange={e => {
              setReceiptEmail(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeNewConversationDialog}>Cancel</Button>
          <Button onClick={createConversation}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}