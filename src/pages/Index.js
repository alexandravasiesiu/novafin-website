import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Index() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className='relative overflow-y-hidden bg-gray-50 h-screen'>
          <img
            className='hidden lg:block absolute top-0 left-0 w-2/5 h-full object-cover'
            src='images/construction-helmet-on-shelf-2022-12-15-20-25-57-utc.jpg'
            alt=''
          />
          <img
            src='images/kattekrab-Brick-Wall-Texture.png'
            alt=''
            className='hidden lg:block h-full object-cover absolute right-0 opacity-25'
          />
          <div className='relative px-4 xl:px-10'>
            <nav className='flex justify-between items-center py-8'>
              <a
                className='inline-block mr-auto text-lg font-semibold'
                href='#'
              >
                <img
                  src='images/NovafinLogo.png'
                  alt=''
                  className='rounded shadow-md h-16'
                />
              </a>
              <div className='lg:hidden ml-auto'>
                <button className='navbar-burger flex items-center p-3 hover:bg-gray-50 rounded border border-blue-700'>
                  <svg
                    className='block h-4 w-4'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <title>Mobile menu</title>
                    <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                  </svg>
                </button>
              </div>
              <div className='hidden lg:flex w-auto lg:w-3/5 lg:pl-16 ml-auto justify-end'>
                <ul className='flex items-center space-x-12'>
                  <li>
                    <a
                      className='font-medium text-lg border rounded p-2 border-blue-700 hover:bg-gray-100'
                      href='#'
                    >
                      Despre
                    </a>
                  </li>
                  <li>
                    <a
                      className='font-medium text-lg border rounded p-2 border-blue-700 hover:bg-gray-100'
                      href='#'
                    >
                      Servicii
                    </a>
                  </li>
                  <li>
                    <a
                      className='font-medium text-lg border rounded p-2 border-blue-700 hover:bg-gray-100'
                      href='#'
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div className='relative container px-4 mx-auto pb-20'>
            <div className='w-full lg:w-3/5 lg:pl-16 ml-auto'>
              <div className='mt-10 lg:mt-20 lg:pr-10 max-w-2xl'>
                <div className='max-w-xl mb-20'>
                  <h2 className='mb-6 font-semibold text-red-400 text-4xl lg:text-5xl'>
                    Următorul Nivel în Finisaje Interioare
                  </h2>
                  <p className='mb-6 leading-relaxed font-semibold text-2xl'>
                    Definim Spațiul cu Inovație și Imaginație!
                  </p>
                  <p className='mb-6 leading-relaxed text-xl text-gray-600'>
                    Transformăm spațiile în căminuri primitoare și birouri pline
                    de stil. Cu o abordare creativă și pricepută, fiecare
                    proiect devine o poveste unică. Descoperă-ne și hai să facem
                    spațiul tău să strălucească!"
                  </p>
                </div>
              </div>
              <div
                className='flex flex-wrap mb-16 lg:mb-20'
                contentEditable='false'
              >
                <a
                  className='block w-full md:w-auto text-center mb-2 py-4 px-8 md:mr-4 text-sm text-white font-medium leading-normal rounded transition duration-200 bg-blue-700 hover:bg-gray-50 hover:text-gray-700 border border-blue-700'
                  href='#'
                >
                  Contactează-ne ACUM!
                </a>
              </div>
            </div>
          </div>
          <div className='hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50'>
            <div className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-25' />
            <nav className='relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto'>
              <div className='flex items-center mb-8'>
                <a
                  className='mr-auto text-lg font-semibold leading-none'
                  href='#'
                >
                  <img
                    className='h-7'
                    src='zeus-assets/logo/logo-zeus-red.svg'
                    alt=''
                    width='auto'
                  />
                </a>
                <button className='navbar-close'>
                  <svg
                    className='h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>
              <div>
                <ul>
                  <li className='mb-1'>
                    <a
                      className='block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded'
                      href='#'
                    >
                      About
                    </a>
                  </li>
                  <li className='mb-1'>
                    <a
                      className='block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded'
                      href='#'
                    >
                      Company
                    </a>
                  </li>
                  <li className='mb-1'>
                    <a
                      className='block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded'
                      href='#'
                    >
                      Services
                    </a>
                  </li>
                  <li className='mb-1'>
                    <a
                      className='block p-4 text-sm font-medium text-gray-900 hover:bg-gray-50 rounded'
                      href='#'
                    >
                      Testimonials
                    </a>
                  </li>
                </ul>
              </div>
              <div className='mt-auto'>
                <div className='pt-6'>
                  <a
                    className='block py-3 text-center text-sm leading-normal bg-red-50 hover:bg-red-100 text-red-300 font-semibold rounded transition duration-200'
                    href='#'
                  >
                    Contact Us
                  </a>
                </div>
                <p className='mt-6 mb-4 text-sm text-center text-gray-500'>
                  <span>© 2021 All rights reserved.</span>
                </p>
              </div>
            </nav>
          </div>
        </section>
        <section className='bg-gray-100'>
          <div className='container px-4 flex mx-auto py-20'>
            <div className='mx-auto'>
              <h2 className='mb-10 text-3xl font-semibold text-red-400'>
                Despre noi:
              </h2>
              <p className='mb-6 text-xl text-gray-500' contentEditable='false'>
                La Novafin, suntem specializați în furnizarea și instalarea
                finisajelor de cea mai înaltă calitate în România. Cu experiență
                vastă și o echipă dedicată de profesioniști, ne concentrăm pe
                oferirea soluțiilor perfecte pentru proiectele de construcții.
              </p>
              <h6 className='mt-2 mb-6 leading-tight text-2xl font-semibold'>
                Ceea Ce Ne Diferențiază:
              </h6>
              <p className='mb-6 text-xl text-gray-500'>
                Noi ne distingem prin calitatea superioară, atenția la detalii
                și abordarea personalizată. Colaborăm strâns cu clienții pentru
                a înțelege exact nevoile lor și a oferi finisaje durabile și
                estetice care să îmbunătățească fiecare spațiu. Indiferent dacă
                este vorba despre proiecte rezidențiale sau comerciale, ne
                angajăm să oferim rezultate excepționale.
              </p>
              <h6 className='mt-2 mb-6 leading-tight text-2xl font-semibold'>
                Misiunea Noastră:
              </h6>
              <p className='mb-6 text-xl text-gray-500'>
                Misiunea noastră este simplă: să transformăm fiecare proiect
                într-o reușită estetică și funcțională. Ne focusăm pe calitate,
                fiabilitate și satisfacția clientului. Cu fiecare finisaj, ne
                străduim să aducem valoare și stil în fiecare spațiu pe care îl
                atingem. Alegeți [Numele Firmei] pentru finisaje de încredere și
                pentru un spațiu care se remarcă prin eleganță și durabilitate.
              </p>
            </div>
          </div>
        </section>
        <section className='relative pb-20 lg:py-20 bg-gray-50'>
          <img
            className='lg:absolute lg:top-0 lg:left-0 h-full w-full lg:w-5/12 mb-12 lg:mb-0 object-cover'
            src='images/different-construction-tools-for-construction-on-r-2021-09-04-01-25-46-utc.jpg'
            alt=''
          />
          <div className='container px-4 mx-auto'>
            <div className='w-full lg:w-7/12 lg:ml-auto'>
              <div className='mx-auto'>
                <h2 className='mb-10 lg:mb-16 text-4xl font-semibold text-red-400'>
                  Gama de servicii oferite
                </h2>
                <div className='mb-10 flex items-start'>
                  <div className='mt-2 mr-4'>
                    <svg
                      width={20}
                      height={20}
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z'
                        fill='#45C1FF'
                      />
                    </svg>
                  </div>
                  <div className=''>
                    <h3 className='mb-6 text-2xl font-semibold'>
                      1. Gresie și Faianță:
                    </h3>
                    <p className='text-gray-500 text-lg'>
                      Executăm cu precizie montarea și finisarea gresiei și
                      faianței în spațiile dvs., asigurând durabilitate și
                      estetică. De la băi și bucătării până la terase, fiecare
                      detaliu este realizat cu grijă.
                    </p>
                  </div>
                </div>
                <div className='flex items-start mb-10'>
                  <div className='mt-2 mr-4'>
                    <svg
                      width={20}
                      height={20}
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z'
                        fill='#45C1FF'
                      />
                    </svg>
                  </div>
                  <div className=''>
                    <h3 className='mb-6 text-2xl font-semibold font-heading'>
                      2. Parchet Laminat sau Masiv:
                    </h3>
                    <p className='text-gray-500 text-lg'>
                      Echipa noastră expertă se ocupă de instalarea impecabilă a
                      parchetului laminat sau masiv în dormitoare, living-uri și
                      birouri. Asigurăm un aspect natural și o întreținere
                      ușoară pentru fiecare proiect.
                    </p>
                  </div>
                </div>
                <div className='flex items-start mb-10'>
                  <div className='mt-2 mr-4'>
                    <svg
                      width={20}
                      height={20}
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z'
                        fill='#45C1FF'
                      />
                    </svg>
                  </div>
                  <div className=''>
                    <h3 className='mb-6 text-2xl font-semibold font-heading'>
                      3. Vopsea Lavabilă:
                    </h3>
                    <p className='text-gray-500 text-lg'>
                      Aplicăm vopsea lavabilă de înaltă calitate pe pereții
                      interiori și exteriori. Aceasta nu doar adaugă culoare, ci
                      și rezistență la uzură, menținând aspectul proaspăt în
                      timp.
                    </p>
                  </div>
                </div>
                <div className='flex items-start mb-10'>
                  <div className='mt-2 mr-4'>
                    <svg
                      width={20}
                      height={20}
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z'
                        fill='#45C1FF'
                      />
                    </svg>
                  </div>
                  <div className=''>
                    <h3 className='mb-6 text-2xl font-semibold font-heading'>
                      4. Tencuieli Decorative:
                    </h3>
                    <p className='text-gray-500 text-lg'>
                      Specializați în aplicarea tencuielilor decorative pe
                      fațadele exterioare, adăugăm valoare estetică și protecție
                      durabilă proiectelor dvs. Indiferent de condițiile meteo,
                      finisajele noastre rezistă cu succes.
                    </p>
                  </div>
                </div>
                <div className='flex items-start mb-10'>
                  <div className='mt-2 mr-4'>
                    <svg
                      width={20}
                      height={20}
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z'
                        fill='#45C1FF'
                      />
                    </svg>
                  </div>
                  <div className=''>
                    <h3 className='mb-6 text-2xl font-semibold font-heading'>
                      5. Profile din Aluminiu sau PVC pentru Ferestre și Uși:
                    </h3>
                    <p className='text-gray-500 text-lg'>
                      Instalăm cu precizie profile din aluminiu sau PVC pentru
                      ferestre și uși, asigurând izolație termică și fonică
                      superioară. Realizăm lucrările cu atenție la detalii,
                      garantând durabilitate și siguranță.
                    </p>
                  </div>
                </div>
                <div className='flex items-start mb-10'>
                  <div className='mt-2 mr-4'>
                    <svg
                      width={20}
                      height={20}
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z'
                        fill='#45C1FF'
                      />
                    </svg>
                  </div>
                  <div className=''>
                    <h3 className='mb-6 text-2xl font-semibold font-heading'>
                      6. Piatră Naturală pentru Fațade și Accente:
                    </h3>
                    <p className='text-gray-500 text-lg'>
                      Ne ocupăm de montarea plăcilor din piatră naturală pentru
                      fațade și ziduri de accent. Aceste finisaje nu doar adaugă
                      eleganță, ci și rezistență, oferind proiectelor dvs. un
                      caracter distinct.
                    </p>
                  </div>
                </div>
                <div className='flex items-start mb-10'>
                  <div className='mt-2 mr-4'>
                    <svg
                      width={20}
                      height={20}
                      viewBox='0 0 20 20'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z'
                        fill='#45C1FF'
                      />
                    </svg>
                  </div>
                  <div className=''>
                    <h3 className='mb-6 text-2xl font-semibold font-heading'>
                      7. Sisteme de Iluminat LED:
                    </h3>
                    <p className='text-gray-500 text-lg'>
                      {' '}
                      Executăm instalarea sistemelor de iluminat LED eficiente
                      energetic în interior și exterior. Cu control variabil al
                      luminii și culorilor, transformăm fiecare spațiu într-un
                      mediu luminos și modern.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-20'>
          <div className='container px-4 mx-auto'>
            <div className='max-w-2xl mx-auto mb-12 lg:mb-20 text-center'>
              <h2 className='mt-8 mb-10 text-3xl lg:text-4xl font-semibold font-heading text-red-400'>
                Contactează-ne și începem să construim împreună!
              </h2>
              <p className='text-xl text-gray-500' contentEditable='false'>
                Echipa noastră entuziastă este aici pentru a asculta ideile tale
                și pentru a crea împreună spațiul pe care îl meriți.
              </p>
            </div>
            <div className='flex flex-wrap -mx-4'>
              <div className='w-full lg:w-1/3 px-4 mb-4 lg:mb-0'>
                <div className='py-12 h-full border text-center rounded-xl border-gray-500 bg-gray-100'>
                  <h3 className='mb-6 text-2xl text-gray-500'>Adresă</h3>
                  <p className='text-blue-700 font-semibold'>
                    1686 Geraldine Lane
                  </p>
                  <p className='text-blue-700 font-semibold'>
                    New York, NY 10013
                  </p>
                </div>
              </div>
              <div className='w-full lg:w-1/3 px-4 mb-4 lg:mb-0'>
                <div className='py-12 h-full border text-center rounded-xl border-gray-500 bg-gray-100'>
                  <h3 className='mb-6 text-2xl text-gray-500'>E-mail</h3>
                  <p className='text-blue-700 font-semibold'>
                    office.novafin.star@gmail.com
                  </p>
                </div>
              </div>
              <div className='w-full lg:w-1/3 px-4 lg:mb-0'>
                <div className='py-12 h-full border text-center rounded-xl border-gray-500 bg-gray-100'>
                  <h3 className='mb-7 text-2xl text-gray-500'>Telefon</h3>
                  <p className='text-blue-700 font-semibold'>+7-843-672-431</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-20 bg-blue-700'>
          <div className='container mx-auto px-4'>
            <div className='pb-6 lg:pb-10 border-b border-gray-100'>
              <div className='flex flex-wrap items-start justify-between'>
                <div className='w-full lg:w-1/5 mb-6 lg:mb-0'>
                  <a
                    className='inline-block mb-5 text-gray-900 text-lg font-semibold'
                    href='#'
                  >
                    <img
                      src='images/NovafinLogo.png'
                      alt=''
                      className='rounded shadow-md h-16'
                    />
                  </a>
                </div>
                <div className='w-full lg:w-auto'>
                  <ul className='flex flex-wrap space-x-4 lg:space-x-8 items-center text-sm'>
                    <li className='mb-2 md:mb-0'>
                      <a
                        className='text-sm font-medium text-white border rounded p-2'
                        href='#'
                      >
                        Despre
                      </a>
                    </li>
                    <li className='mb-2 md:mb-0'>
                      <a
                        className='text-sm font-medium text-white border rounded p-2'
                        href='#'
                      >
                        Servicii
                      </a>
                    </li>
                    <li className='mb-2 md:mb-0'>
                      <a
                        className='text-sm font-medium text-white border rounded p-2'
                        href='#'
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className='flex flex-wrap justify-between items-center'>
                <p className='text-sm mt-8 text-white'>
                  Toate drepturile rezervate © Novafin 2023
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    </React.Fragment>
  );
}

