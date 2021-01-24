/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

function WeatherApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

WeatherApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.oneOfType([PropTypes.object]),
};

WeatherApp.defaultProps = {
  Component: () => null,
  pageProps: {},
};

export default WeatherApp;
