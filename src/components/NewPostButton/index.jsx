import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Fab } from '@material-ui/core';

import { MODAL_ADD_POST } from '../../constants/modalTypes';

// TODO: Find out why use styles not synced in next.js
// ERROR IN CONSOLE - react-dom.development.js:67 Warning: Prop `className` did not match.
// Server: "MuiButtonBase-root MuiFab-root makeStyles-addNewPostButton-36 MuiFab-primary"
// Client: "MuiButtonBase-root MuiFab-root makeStyles-addNewPostButton-3 MuiFab-primary"

// const useStyles = makeStyles({
//   addNewPostButton: {
//     position: 'fixed',
//     bottom: '30px',
//     right: '30px',
//   },
// });

const styles = {
  position: 'fixed',
  bottom: '30px',
  right: '30px',
};

// TODO: PROPTYPES
/* eslint-disable react/prop-types */
const NewPostButton = ({ openModal }) => (
  <Fab
    color="primary"
    aria-label="add"
    onClick={() => openModal(MODAL_ADD_POST)}
    style={styles}
  >
    <AddIcon />
  </Fab>
);

export default NewPostButton;
