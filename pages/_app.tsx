import type { AppProps } from 'next/app';
import { IKContext } from 'imagekitio-react';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Nav from '../components/Navigation/Nav';
import Footer from '../components/Navigation/Footer';
import { PhotoContextProvider } from '../components/Contexts/PhotoContext';
import { GetStaticProps } from 'next';
import ImageKit from 'imagekit';
import { PopupContextProvider } from '../components/Contexts/PopupContext';
import PageTitle from '../components/Navigation/PageTitle';
import { useRouter } from 'next/router';

interface Props extends AppProps {
  props: {
    results: Photo[];
  };
}
function MyApp({ Component, pageProps, props: { results } }: Props) {
  const navHeight = 120;
  const footerHeight = 75;
  console.log('pageProps :', pageProps);

  const router = useRouter();
  console.log('router :', router);
  const arrPath = router.asPath.split('/');
  const pageName = arrPath[arrPath.length - 1].replace('-', ' ');
  console.log('pageName :', pageName);

  return (
    <IKContext
      publicKey={process.env.NEXT_PUBLIC_IK_PUBLIC_KEY}
      urlEndpoint={process.env.NEXT_PUBLIC_IK_URL_ENDPOINT}
      transformationPosition="path"
      authenticationEndpoint="http://www.yourserver.com/auth"
    >
      <PopupContextProvider>
        <div className="body h-full min-h-screen px-16">
          <Nav height={navHeight} />
          <PageTitle title={pageName === '' ? 'home' : pageName} />
          <div
            className="w-full p-0 m-0 overflow-x-hidden overflow-y-scroll"
            style={{ height: `calc(99vh - ${navHeight + footerHeight}px)` }}
          >
            <Component {...pageProps} />
          </div>

          <Footer height={footerHeight} />
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
