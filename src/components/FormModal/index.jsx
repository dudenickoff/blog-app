import React from 'react';
import { Modal } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MODAL_ADD_POST, MODAL_EDIT_POST } from '../../constants/modalTypes';
import AddForm from '../Modals/AddForm';
import EditForm from '../Modals/EditForm';

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
const FormModal = ({ type, modalIsOpen, onCloseModal, data }) => {
  const classes = useStyles();
  const getModalContent = () => {
    if (type === MODAL_ADD_POST) {
      return <AddForm onCloseModal={onCloseModal} />;
    }
    if (type === MODAL_EDIT_POST) {
      const { postId, title, body } = data;
      const initialValues = { title, text: body };
      return <EditForm onCloseModal={onCloseModal} postId={postId} initialValues={initialValues} />;
    }
    return null;
  };

  return (
    <Modal open={modalIsOpen} onClose={onCloseModal} className={classes.modalWrapper}>
      <div className={classes.modalContent}>{getModalContent()}</div>
    </Modal>
  );
};

export default FormModal;
