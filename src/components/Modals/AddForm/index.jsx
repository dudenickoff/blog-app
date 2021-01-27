import React from 'react';
import { useFormik } from 'formik';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import FormFields from './components/FormFields';
import postValidationSchema from '../../../constants/postValidationSchema';

const useStyles = makeStyles({
  title: {
    fontWeight: '500',
    color: '#142127',
    textTransform: 'uppercase',
  },
});

const createArticle = ({ values: { title, text }, handleCloseModal }) => {
  fetch('https://jsonplaceholder.typicode.com/posts/', {
    method: 'POS1T',
    body: {
      title,
      body: text,
    },
  }).then(() => {
    handleCloseModal();
  });
};
// TODO: PROPTYPES
/* eslint-disable react/prop-types */
const AddForm = ({ handleCloseModal }) => {
  const formik = useFormik({
    initialValues: {
      title: '',
      text: '',
    },
    postValidationSchema,
    onSubmit: (values) => {
      createArticle({ values, handleCloseModal });
    },
  });

  const classes = useStyles();

  return (
    <form onSubmit={formik.handleSubmit}>
      <Typography className={classes.title} align="center">
        Create a new post
      </Typography>
      <FormFields formik={formik} />
    </form>
  );
};

export default AddForm;
