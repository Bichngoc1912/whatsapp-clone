import { Dispatch, SetStateAction } from "react";

export interface DialogFormProps {
  closeNewConversationDialog: () => void;
  toggleNewDialog: (isOpen: boolean) => void;
  isOpenDialog: boolean;
  receiptEmail: string;
  createConversation: () => void;
  setReceiptEmail: Dispatch<SetStateAction<string>>;
}