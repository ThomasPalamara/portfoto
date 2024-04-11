import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import Nav from '../components/Navigation/Nav';
import Footer from '../components/Navigation/Footer';
import { PopupContextProvider } from '../components/Contexts/PopupContext';
import PageTitle from '../components/Navigation/PageTitle';
import { useRouter } from 'next/router';
import { useIsMobile } from '../utils/hooks';
import CookieConsent from 'react-cookie-consent';

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
          className="w-full p-0 m-0 overflow-x-hidden flex justify-center"
          style={{
            height: isMobile
              ? 'auto'
              : `calc(99vh - ${navHeight + footerHeight}px)`,
          }}
        >
          <AnyComponent {...pageProps} />
        </div>

        <Footer height={footerHeight} />
        <CookieConsent
          location="bottom"
          buttonText="I understand"
          expires={365}
          disableButtonStyles
          buttonClasses="text-gray-700 hover:bg-gray-400 bg-white py-2 px-8 inline-flex items-center"
        >
          This website uses cookies to enhance your experience.
        </CookieConsent>
      </div>
    </PopupContextProvider>
  );
}
export default MyApp;
