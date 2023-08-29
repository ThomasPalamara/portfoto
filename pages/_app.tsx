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
import { useIsMobile } from '../utils/hooks';

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
  const isMobile = useIsMobile();

  const arrPath = router.asPath.split('/');
  const pageName = arrPath[arrPath.length - 1].replace('-', ' ');

  return (
    <PopupContextProvider>
      <div className="body md:h-full min-h-screen px-1 md:px-16">
        <Nav height={navHeight} />
        <PageTitle title={pageName === '' ? 'home' : pageName} />
        <div
          className="w-full p-0 m-0 md:overflow-x-hidden flex"
          style={{
            height: isMobile
              ? 'auto'
              : `calc(99vh - ${navHeight + footerHeight}px)`,
          }}
        >
          <AnyComponent {...pageProps} />
        </div>

        <Footer height={footerHeight} />
      </div>
    </PopupContextProvider>
  );
}
export default MyApp;
