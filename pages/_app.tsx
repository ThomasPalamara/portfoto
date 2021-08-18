import type { AppProps } from 'next/app';
import { IKContext } from 'imagekitio-react';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IKContext
      publicKey={process.env.NEXT_PUBLIC_IK_PUBLIC_KEY}
      urlEndpoint={process.env.NEXT_PUBLIC_IK_URL_ENDPOINT}
      transformationPosition="path"
      authenticationEndpoint="http://www.yourserver.com/auth"
    >
      <div className="bg-dark text-white h-full min-h-screen">
        <Component {...pageProps} />
      </div>
    </IKContext>
  );
}
export default MyApp;
