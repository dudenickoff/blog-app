import React from 'react';
import PropTypes from 'prop-types';
import AddIcon from '@material-ui/icons/Add';
import { Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { MODAL_ADD_POST } from '../../constants/modalTypes';

const useStyles = makeStyles({
  addNewPostButton: {
    position: 'fixed',
    bottom: '30px',
    right: '30px',
  },
});

const NewPostButton = ({ onOpenModal }) => {
  const classes = useStyles();
  return (
    <Fab
      color="primary"
      aria-label="add"
      onClick={() => onOpenModal({ type: MODAL_ADD_POST })}
      className={classes.addNewPostButton}
    >
      <AddIcon />
    </Fab>
  );
};

NewPostButton.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
};

export default NewPostButton;
