export interface MyModalProps {
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  isAutoClose: boolean;
  isOpen: boolean;
}