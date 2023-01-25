import type { AppProps } from 'next/app';
import { IKContext } from 'imagekitio-react';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Nav from '../components/Navigation/Nav';
import { PhotoContextProvider } from '../components/Contexts/PhotoContext';
import { GetStaticProps } from 'next';
import ImageKit from 'imagekit';
import { PopupContextProvider } from '../components/Contexts/PopupContext';

interface Props extends AppProps {
  props: {
    results: Photo[];
  };
}
function MyApp({ Component, pageProps, props: { results } }: Props) {
  const navHeight = 100;
  const footerHeight = 50;

  return (
    <IKContext
      publicKey={process.env.NEXT_PUBLIC_IK_PUBLIC_KEY}
      urlEndpoint={process.env.NEXT_PUBLIC_IK_URL_ENDPOINT}
      transformationPosition="path"
      authenticationEndpoint="http://www.yourserver.com/auth"
    >
      <PopupContextProvider>
        <div className="body h-full min-h-screen px-10">
          <Nav height={navHeight} />
          <div
            className="w-full p-0"
            // style={{ height: `calc(100vh - ${navHeight + footerHeight}px)` }}
          >
            <Component {...pageProps} />
          </div>

          <Nav height={footerHeight} />
        </div>
      </PopupContextProvider>
    </IKContext>
  );
}
export default MyApp;

MyApp.getInitialProps = async () => {
  var imageKit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IK_PUBLIC_KEY || '',
    privateKey: process.env.IK_PRIVATE_KEY || '',
    urlEndpoint: process.env.NEXT_PUBLIC_IK_URL_ENDPOINT || '',
  });
  const results = await imageKit.listFiles({
    skip: 0,
    limit: 100,
  });

  return { props: { results } };
};
