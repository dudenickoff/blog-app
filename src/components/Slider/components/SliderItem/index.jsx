import React from 'react';
import { Typography } from '@material-ui/core';

// TODO: PROPTYPES
/* eslint-disable react/prop-types */

const SliderItem = ({
  imageSource,
  imageAltText,
  title,
  text,
  readMoreLink,
  width,
}) => (
  <div style={{ maxWidth: width }}>
    <img src={imageSource} alt={imageAltText} style={{ width: '800px' }} />
    <div>
      <Typography>{title}</Typography>
      <Typography>{text}</Typography>
      <a href={readMoreLink}>Read more</a>
    </div>
  </div>
);

export default SliderItem;
