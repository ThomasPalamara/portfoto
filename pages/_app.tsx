import type { AppProps } from 'next/app';
import { IKContext } from 'imagekitio-react';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Nav from '../components/Navigation/Nav';
import Footer from '../components/Navigation/Footer';
import ImageKit from 'imagekit';
import { PopupContextProvider } from '../components/Contexts/PopupContext';
import PageTitle from '../components/Navigation/PageTitle';
import { useRouter } from 'next/router';

import useSWR from 'swr';
interface Props extends AppProps {
  props: {
    results: any;
  };
}
function MyApp({ Component, pageProps }: Props) {
  const navHeight = 100;
  const footerHeight = 60;

  const AnyComponent = Component as any;

  const router = useRouter();

  const arrPath = router.asPath.split('/');
  const pageName = arrPath[arrPath.length - 1].replace('-', ' ');

  const fetcher = (url: string) =>
    fetch(`${url}?category=lofoten`).then((res) => res.json());
  const { data, error } = useSWR('/api/hello', fetcher);
  console.log('data :', data);
  console.log('error :', error);

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
            className="w-full p-0 m-0 overflow-x-hidden flex"
            style={{ height: `calc(99vh - ${navHeight + footerHeight}px)` }}
          >
            <AnyComponent {...pageProps} />
          </div>

          <Footer height={footerHeight} />
        </div>
      </PopupContextProvider>
    </IKContext>
  );
}
export default MyApp;
