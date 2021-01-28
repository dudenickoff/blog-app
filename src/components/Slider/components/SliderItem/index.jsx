import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  sliderItemWrapper: (props) => ({
    width: props.width,
    display: 'flex',
    position: 'relative',
    justifyContent: 'flex-end',
  }),
  image: {
    width: '400px',
    height: '200px',
    position: 'absolute',
    top: '32%',
    left: '100px',
  },
  greyBox: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: '400px',
    width: '600px',
    background: '#f8f9f9',
    padding: '24px',
    margin: '32px 0',
  },
  textWrapper: {
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: '72px',
  },
  readMore: {
    textDecoration: 'none',
  },
});

const SliderItem = ({ imageSource, imageAltText, title, text, readMoreLink, width }) => {
  const classes = useStyles({ width });
  return (
    <div className={classes.sliderItemWrapper}>
      <img src={imageSource} alt={imageAltText} className={classes.image} />
      <div className={classes.greyBox}>
        <div className={classes.textWrapper}>
          <Box my={2}>
            <Typography variant="h5">{title}</Typography>
          </Box>
          <Typography>{text}</Typography>
          <Box my={2}>
            <a href={readMoreLink} className={classes.readMore}>
              <Typography color="primary">Read more</Typography>
            </a>
          </Box>
        </div>
      </div>
    </div>
  );
};

SliderItem.propTypes = {
  imageSource: PropTypes.string.isRequired,
  imageAltText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  readMoreLink: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default SliderItem;
