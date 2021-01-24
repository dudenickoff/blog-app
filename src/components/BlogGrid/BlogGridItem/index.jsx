/* eslint-disable react/prop-types */
import React from 'react';
import { Typography, Card, CardMedia } from '@material-ui/core';

// TODO: PROPTYPES
const BlogGridItem = ({ title, body }) => (
  <Card>
    <CardMedia
      image="https://placekitten.com/400/400"
      title="Nice kitten"
      style={{ height: '400px', width: '100%' }}
    />
    <Typography>{title}</Typography>
    <Typography>{body}</Typography>
  </Card>
);

export default BlogGridItem;
