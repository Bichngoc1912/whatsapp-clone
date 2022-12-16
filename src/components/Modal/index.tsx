import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MyModalProps } from './types';
import HiImg from '@/assets/images/hi.gif';
import Image from 'next/image';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #0891B2',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
};

const MyModal = (props: MyModalProps) => {
  const { isOpen, isAutoClose, handleOpenModal, handleCloseModal } = props;

  useEffect(() => {
    setTimeout(() => {
      if (isAutoClose) handleCloseModal();
    }, 7000);
  }, [handleCloseModal, isAutoClose]);

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, ':focus-visible': { borderColor: '#0891B2' } }}>
          <Image src={HiImg} alt="hi, helo helo :D" width={300} height={200} />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Hi, Hề lô hế lô, chat với mình hoặc bất kì ai, nhưng mà người đó phải login dô
            nhe, không login là tui chịu thua á 🥺🥺 Tâm hự thầm kín dí tui khum, email
            tui nà: <b style={{ color: '#0891B2' }}>ngocntbnctk40@gmail.com</b>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default MyModal;
