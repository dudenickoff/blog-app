import React from 'react';
import PropTypes from 'prop-types';

const getWrapperStyle = ({ translate, transition, width }) => ({
  display: 'flex',
  transform: `translateX(-${translate}px)`,
  transition: `transform ease-out ${transition}s`,
  height: '100%',
  width: `${width}px`,
});

const SliderContentWrapper = ({ translate, transition, width, children }) => (
  <div style={getWrapperStyle({ translate, transition, width })} className="sliderContentWrapper">
    {children}
  </div>
);

SliderContentWrapper.propTypes = {
  translate: PropTypes.number.isRequired,
  transition: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default SliderContentWrapper;
