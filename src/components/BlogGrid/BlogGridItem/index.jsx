/* eslint-disable react/prop-types */
import React from 'react';
import { Typography, Card, CardMedia, Fab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import RemoveIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { MODAL_EDIT_POST } from '../../../constants/modalTypes';

const useStyles = makeStyles({
  postWrapper: {
    padding: '16px',
    position: 'relative',
    '&:hover button': {
      opacity: 1,
    },
  },
  postTitle: {
    fontSize: '12px',
    fontWeight: '700',
    textTransform: 'uppercase',
    margin: '16px 0',
    color: '#27A581',
  },
  postText: {
    fontWeight: '500',
    color: '#142127',
  },
  mediaCard: {
    width: '100%',
    height: '240px',
  },
  removeButton: {
    position: 'absolute',
    top: '30px',
    left: '30px',
    opacity: 0,
    transition: 'opacity 0.5s',
  },
  eidtButton: {
    position: 'absolute',
    top: '30px',
    left: '100px',
    opacity: 0,
    transition: 'opacity 0.5s',
  },
});

// TODO: PROPTYPES
/* eslint-disable react/prop-types */
const BlogGridItem = ({ title, body, deleteArticle, id, onOpenModal }) => {
  const classes = useStyles();

  return (
    <Card className={classes.postWrapper}>
      <CardMedia
        image="https://placekitten.com/400/240"
        title="Nice kitten"
        className={classes.mediaCard}
      />
      <Typography className={classes.postTitle}>{title}</Typography>
      <Typography className={classes.postText}>{body}</Typography>
      <Fab
        color="secondary"
        aria-label="add"
        className={classes.removeButton}
        onClick={() => deleteArticle(id)}
      >
        <RemoveIcon />
      </Fab>
      <Fab
        color="primary"
        aria-label="edit"
        className={classes.eidtButton}
        onClick={() => onOpenModal({ type: MODAL_EDIT_POST, data: { title, body, postId: id } })}
      >
        <EditIcon />
      </Fab>
    </Card>
  );
};

export default BlogGridItem;
