import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { toast } from 'react-toastify';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import postValidationSchema from '../../../constants/postValidationSchema';

const useStyles = makeStyles({
  title: {
    fontWeight: '500',
    color: '#142127',
    textTransform: 'uppercase',
  },
  textField: {
    marginTop: '16px',
  },
  submitButton: {
    marginTop: '32px',
  },
});

const createArticle = ({ values: { title, text }, onCloseModal, setIsLoading }) => {
  setIsLoading(true);
  fetch('https://jsonplaceholder.typicode.com/posts/', {
    method: 'POST',
    body: {
      title,
      body: text,
    },
  })
    .then(() => {
      onCloseModal();
      toast.success('The post was successfully created');
    })
    .catch(() => {
      setIsLoading(false);
      toast.error('Failed to create a post');
    });
};

const AddForm = ({ onCloseModal }) => {
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Formik
      initialValues={{
        title: '',
        text: '',
      }}
      validationSchema={postValidationSchema}
      onSubmit={(values) => {
        createArticle({ values, onCloseModal, setIsLoading });
      }}
    >
      {(formik) => (
        <form onSubmit={formik.handleSubmit}>
          <Typography className={classes.title} align="center">
            Create a new post
          </Typography>
          <TextField
            fullWidth
            id="title"
            name="title"
            label="Title"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
            className={classes.textField}
          />
          <TextField
            fullWidth
            id="text"
            name="text"
            label="Text"
            type="text"
            value={formik.values.text}
            onChange={formik.handleChange}
            error={formik.touched.text && Boolean(formik.errors.text)}
            helperText={formik.touched.text && formik.errors.text}
            className={classes.textField}
            multiline
          />
          <Button
            disabled={isLoading}
            color="primary"
            variant="contained"
            fullWidth
            className={classes.submitButton}
            type="submit"
          >
            Create the post
          </Button>
        </form>
      )}
    </Formik>
  );
};

AddForm.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};

export default AddForm;
