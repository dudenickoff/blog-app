import React from 'react';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MODAL_ADD_POST } from '../../constants/modalTypes';
import AddForm from '../Modals/AddForm';

const useStyles = makeStyles({
  modalWrapper: {
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    background: '#ffffff',
    padding: '16px',
  },
});

// TODO: PROPTYPES
/* eslint-disable react/prop-types */
const FormModal = ({ type, modalIsOpen, handleCloseModal }) => {
  const classes = useStyles();
  const getModalContent = () => {
    if (type === MODAL_ADD_POST) {
      return <AddForm handleCloseModal={handleCloseModal} />;
    }
    return null;
  };

  return (
    <Modal
      open={modalIsOpen}
      onClose={handleCloseModal}
      className={classes.modalWrapper}
    >
      <div className={classes.modalContent}>{getModalContent()}</div>
    </Modal>
  );
};

export default FormModal;
