import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { IKContext } from 'imagekitio-react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IKContext
      publicKey={process.env.IK_PUBLIC_KEY}
      urlEndpoint={process.env.IK_URL_ENDPOINT}
      transformationPosition="path"
      authenticationEndpoint="http://www.yourserver.com/auth"
    >
      <Component {...pageProps} />
    </IKContext>
  );
}
export default MyApp;
