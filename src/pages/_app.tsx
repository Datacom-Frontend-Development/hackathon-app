import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import LogRocket from 'logrocket';

LogRocket.init('n6wjam/hackathon-app');

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
