import React, { memo } from 'react';
import styled from 'styled-components';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

const StyledArrow = styled.div`
  z-index: 3;
  display: flex;
  position: absolute;
  top: 50%;
  ${(props) => (props.direction === 'right' ? 'right: 25px' : 'left: 25px')};
  height: 50px;
  width: 50px;
  justify-content: center;
  background: white;
  border-radius: 50%;
  cursor: pointer;
  align-items: center;
  transition: transform ease-in 0.1s;

  &:hover {
    transform: scale(1.1);
  }

  img {
    transform: ${(props) => (props.direction === 'left' ? 'translateX(-2px)' : 'translateX(2px)')};

    &:focus {
      outline: 0;
    }
  }
`;
// TODO: PROPTYPES
/* eslint-disable react/prop-types */
const Arrow = ({ direction, handleClick }) => (
  <StyledArrow direction={direction} onClick={() => handleClick()}>
    {direction === 'right' ? (
      <KeyboardArrowRightIcon />
    ) : (
      <KeyboardArrowLeftIcon />
    )}
  </StyledArrow>
);

export default memo(Arrow);
