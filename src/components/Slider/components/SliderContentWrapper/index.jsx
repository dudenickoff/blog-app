import React from 'react';

// TODO: PROPTYPES
/* eslint-disable react/prop-types */

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

export default SliderContentWrapper;
