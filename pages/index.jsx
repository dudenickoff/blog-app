import React, { useState } from 'react';
import Head from 'next/head';
import { Container, ThemeProvider } from '@material-ui/core';
import {
  BlogGrid, FormModal, NewPostButton, Slider,
} from '../src';
import sliderItemsMock from '../src/constants/sliderItems.mock';

import theme from '../src/styles/theme';

export default function Home() {
  const faviconUrl = process.env.NODE_ENV === 'production'
    ? '/blog-app/favicon.ico'
    : '/favicon.ico';

  const [modalState, setModalState] = useState({
    modalIsOpen: false,
    modalType: null,
  });

  const handleOpenModal = (type) => {
    setModalState({ modalIsOpen: true, modalType: type });
  };

  const handleCloseModal = () => {
    setModalState({ modalIsOpen: false, modalType: null });
  };

  const { modalIsOpen, modalType } = modalState;

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Blog app</title>
        <link rel="icon" href={faviconUrl} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>

      <main>
        <Container maxWidth="lg">
          <BlogGrid />
        </Container>
        <Slider slides={sliderItemsMock} />
        <FormModal
          type={modalType}
          modalIsOpen={modalIsOpen}
          handleCloseModal={handleCloseModal}
        />
        <NewPostButton openModal={handleOpenModal} />
      </main>
    </ThemeProvider>
  );
}
