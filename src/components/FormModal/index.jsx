import React from 'react';
import PropTypes from 'prop-types';

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

FormModal.propTypes = {
  type: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.oneOf([null]).isRequired]),
  modalIsOpen: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  data: PropTypes.shape({
    postId: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  }),
};
FormModal.defaultProps = {
  type: null,
  data: null,
};
export default FormModal;
