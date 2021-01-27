/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';

function BlogApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

BlogApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.oneOfType([PropTypes.object]),
};

BlogApp.defaultProps = {
  Component: () => null,
  pageProps: {},
};

export default BlogApp;
