import Loading from '@/components/Loading';
import { auth } from '@/configs/firebase';
import styles from '@@/styles/Home.module.css';
import type { AppProps } from 'next/app';
import { useAuthState } from 'react-firebase-hooks/auth';
import LoginPage from './auth/login';

export default function App({ Component, pageProps }: AppProps) {
  const [loggedInUser, loading, error] = useAuthState(auth);

  if (loading) return <Loading />

  if (!loggedInUser) return <LoginPage />
  
  return <Component {...pageProps} />;
}
