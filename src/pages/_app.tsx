import Loading from '@/components/Loading';
import { auth, db } from '@/configs/firebase';
import styles from '@@/styles/Home.module.css';
import type { AppProps } from 'next/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import LoginPage from './auth/login';
import { useEffect } from 'react';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';

export default function App({ Component, pageProps }: AppProps) {
  const [loggedInUser, loading, error] = useAuthState(auth);

  useEffect(() => {
    const setUserInDb = async () => {
      try {
        await setDoc(
          doc(db, 'users', loggedInUser?.email as string),
          {
            email: loggedInUser?.email,
            lastSeen: serverTimestamp(),
            photoURL: loggedInUser?.photoURL,
          },
          {
            merge: true, // just update what is changed
          },
        );
      } catch (error) {
        console.log('ERROR SETTING USER', error);
      }
    };

    if (loggedInUser) {
      setUserInDb();
    }
  }, [loggedInUser]);

  if (loading) return <Loading />;

  if (!loggedInUser) return <LoginPage />;

  return <Component {...pageProps} />;
}
