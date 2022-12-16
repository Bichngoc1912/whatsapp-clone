import { useReciptient } from "@/hooks/useReceipient";
import { AppUser } from "@/types";

type UserRecipientReturnType = ReturnType<typeof useReciptient>;

export interface RecipientAvatarProps extends UserRecipientReturnType {}