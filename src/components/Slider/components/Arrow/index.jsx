import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Fab } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';

import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

const StyledFab = styled(Fab)((props) => ({
  zIndex: '2',
  display: 'flex',
  position: 'absolute',
  top: '50%',
  height: '50px',
  width: '50px',
  justifyContent: 'center',
  borderRadius: '50%',
  cursor: 'pointer',
  alignItems: 'center',
  transition: 'transform ease-in 0.1s',
  right: props.direction === 'right' ? '25px' : 'initial',
  left: props.direction === 'left' ? '25px' : 'initial',
  '&:hover': {
    transform: 'scale(1.1)',
  },
  img: {
    transform: props.direction === 'left' ? 'translateX(-2px)' : 'translateX(2px)',
    '&:focus': {
      outline: 0,
    },
  },
}));

const Arrow = ({ direction, handleClick }) => (
  <StyledFab onClick={() => handleClick()} direction={direction} color="primary">
    {direction === 'right' ? <KeyboardArrowRightIcon /> : <KeyboardArrowLeftIcon />}
  </StyledFab>
);

Arrow.propTypes = {
  handleClick: PropTypes.func.isRequired,
  direction: PropTypes.string.isRequired,
};

export default memo(Arrow);
