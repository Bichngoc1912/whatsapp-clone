import styles from '@@/styles/Home.module.css';
import type { AppProps } from 'next/app';
import LoginPage from './auth/login';

export default function App({ Component, pageProps }: AppProps) {
  const loggedInUser = false;

  if (!loggedInUser) return <LoginPage />
  
  return <Component {...pageProps} />;
}
