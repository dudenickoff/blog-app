import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  textField: {
    marginTop: '16px',
  },
  submitButton: {
    marginTop: '32px',
  },
});

/* eslint-disable react/prop-types */
// TODO: PROPTYPES
const FormFields = ({ formik }) => {
  const classes = useStyles();

  return (
    <>
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
        color="primary"
        variant="contained"
        fullWidth
        className={classes.submitButton}
        type="submit"
      >
        Create a post
      </Button>
    </>
  );
};

export default FormFields;
