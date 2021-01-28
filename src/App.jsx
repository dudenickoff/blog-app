import React, { useState } from 'react';
import { Container, ThemeProvider } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';
import { BlogGrid, FormModal, NewPostButton, Slider } from './components';
import sliderItemsMock from './constants/sliderItems.mock';
import 'react-toastify/dist/ReactToastify.css';

import theme from './styles/theme';

export default function Home() {
  const [modalState, setModalState] = useState({
    modalIsOpen: false,
    modalType: null,
    values: {},
  });

  const handleOpenModal = ({ type, data }) => {
    setModalState({ modalIsOpen: true, modalType: type, values: data });
  };

  const handleCloseModal = () => {
    setModalState({ modalIsOpen: false, modalType: null, values: {} });
  };

  const { modalIsOpen, modalType, values } = modalState;
  return (
    <ThemeProvider theme={theme}>
      <main>
        <Container maxWidth="lg">
          <BlogGrid onOpenModal={handleOpenModal} />
        </Container>
        <Slider slides={sliderItemsMock} />
        <FormModal
          type={modalType}
          modalIsOpen={modalIsOpen}
          data={values}
          onCloseModal={handleCloseModal}
        />
        <NewPostButton onOpenModal={handleOpenModal} />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </main>
    </ThemeProvider>
  );
}
