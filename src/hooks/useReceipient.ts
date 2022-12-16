import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, db } from '@/configs/firebase';
import { AppUser, Conversation } from '@/types';
import { getReceipitientEmail } from '@@/utils/getRecipientEmail';
import { collection, query, where } from 'firebase/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';

export const useReciptient = (converstationUser: Conversation['users']) => {
  const [loggedInUser, _loading, _error] = useAuthState(auth);

  const recipientEmail = getReceipitientEmail(converstationUser, loggedInUser);
  const queryGetRecipient = query(
    collection(db, 'users'),
    where('email', '==', recipientEmail),
  );
  const [recipientSnapshot, __loading, __error] = useCollection(queryGetRecipient);

  //recipientSnapShot?.docs could be an empty array, leading to docs[0] being undefined
  //so we have to force "?" after docs[0] because there is no data() on "undefined"
  const recipient = recipientSnapshot?.docs[0]?.data() as AppUser | undefined;

  return {
    recipientEmail,
    recipient,
  };
};
