import React from 'react';
import Title from '../components/Title';
import emailjs from '@emailjs/browser';
import { Alert } from '@mui/material';
import { useIsMobile } from '../utils/hooks';
import Head from 'next/head';
import { siteTitle } from '../utils/constants';

const Contact = () => {
  const form = React.useRef<HTMLFormElement>(null);
  const [done, setDone] = React.useState(false);
  const [error, setError] = React.useState(false);
  const isMobile = useIsMobile();

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (form.current)
      emailjs
        .sendForm('service_bby2g87', 'template_iwu8059', form.current, 'asdf')
        .then(
          () => {
            setDone(true);
          },
          () => {
            setError(true);
          }
        );
    else setError(true);
  };

  return (
    <>
      <Head>
        <title>{'Contact me - ' + siteTitle}</title>
      </Head>
      <div
        className={
          isMobile ? 'flex flex-col-reverse' : 'flex flex-col md:flex-row'
        }
        style={{ minHeight: isMobile ? 'unset' : '80%' }}
      >
        <div className="bg-white pr-10 pl-12 py-9 text-base font-extralight overflow-scroll flex flex-col justify-center">
          <Title title="Contact" />
          <p className="pb-2">
            Do not hesitate to contact me for whatever reason, a problem about
            the website, a question about my work, a request for a photo print,
            or just to say hello. I will answer you as soon as possible.
          </p>
          <p className="pb-8">
            You can also follow me on my instagram{' '}
            <a
              className="text-blue-400 font-normal"
              href="https://www.instagram.com/tomapalamara/"
              aria-label="Instagram account"
            >
              @tomapalamara
            </a>
            .
          </p>

          {error && (
            <Alert severity="error" className="mb-4">
              There has been a problem submitting this form, make sure you
              filled it properly, if you still experience issues feel free to
              directly contact me to{' '}
              <span
                className="font-bold"
                onClick={() =>
                  navigator.clipboard.writeText('palamara.thomas@gmail.com')
                }
              >
                palamara.thomas@gmail.com
              </span>
            </Alert>
          )}
          {done ? (
            <Alert className="mt-6" severity="success">
              Your message has been sent
            </Alert>
          ) : (
            <form ref={form} onSubmit={sendEmail}>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/2">
                  <input
                    className="bg-gray-100 appearance-none border-b border-gray-100 w-full py-2 px-4 text-gray-700 font-light"
                    id="name"
                    type="text"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/2">
                  <input
                    className="bg-gray-100 appearance-none border-b border-gray-100 w-full py-2 px-4 text-gray-700 font-light"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="md:flex md:items-center mb-6">
                <div className="md:w-11/12">
                  <textarea
                    className="bg-gray-100 appearance-none border-b border-gray-100 w-full py-2 px-4 text-gray-700 font-light"
                    name="message"
                    placeholder="Your message"
                    style={{ height: '100px' }}
                  />
                </div>
              </div>
              <button
                className="bg-gray-700 hover:bg-gray-400 text-white py-2 px-8 inline-flex items-center"
                type="submit"
              >
                Submit
              </button>
            </form>
          )}
        </div>
        <div
          className={`w-full relative overflow-hidden ${
            isMobile ? 'h-80' : ''
          }`}
        >
          <div
            className="w-full h-full relative overflow-hidden bg-cover bg-center"
            style={{
              maxWidth: '700px',
              backgroundImage:
                'url("https://ik.imagekit.io/uiw3np2kr8ww/tr:q-30/contact_qDbNusnok.jpg?updatedAt=1707574697089")',
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Contact;
