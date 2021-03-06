import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
  editButton: {
    position: 'absolute',
    top: '30px',
    left: '100px',
    opacity: 0,
    transition: 'opacity 0.5s',
  },
});

const BlogGridItem = ({ title, body, deleteArticle, id, onOpenModal }) => {
  const classes = useStyles();
  const [isRemoving, setIsRemoving] = useState(false);

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
        disabled={isRemoving}
        onClick={() => deleteArticle({ id, setIsRemoving })}
      >
        <RemoveIcon />
      </Fab>
      <Fab
        color="primary"
        aria-label="edit"
        className={classes.editButton}
        onClick={() => onOpenModal({ type: MODAL_EDIT_POST, data: { title, body, postId: id } })}
      >
        <EditIcon />
      </Fab>
    </Card>
  );
};

BlogGridItem.propTypes = {
  onOpenModal: PropTypes.func.isRequired,
  deleteArticle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default BlogGridItem;
