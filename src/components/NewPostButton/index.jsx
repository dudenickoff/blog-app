import React from 'react';
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

// TODO: PROPTYPES
/* eslint-disable react/prop-types */
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

export default NewPostButton;
