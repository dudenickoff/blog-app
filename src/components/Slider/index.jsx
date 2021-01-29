import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import SliderContentWrapper from './components/SliderContentWrapper';
import Arrow from './components/Arrow';
import SliderItem from './components/SliderItem';

const SLIDER_WIDTH = 1100;

const getSliderWidth = () => SLIDER_WIDTH;

const useStyles = makeStyles({
  mainSlider: {
    position: 'relative',
    height: '500px',
    width: `${getSliderWidth()}px`,
    margin: '0 auto',
    overflow: 'hidden',
  },
});

const Slider = ({ slides }) => {
  const firstSlide = slides[0];
  const secondSlide = slides[1];
  const lastSlide = slides[slides.length - 1];

  const [state, setState] = useState({
    activeSlide: 0,
    translate: getSliderWidth(),
    transition: 0.45,
    slidesBuffer: [lastSlide, firstSlide, secondSlide],
  });

  const { activeSlide, translate, slidesBuffer, transition } = state;

  const transitionRef = useRef();
  const resizeRef = useRef();
  const sliderRef = useRef();

  useEffect(() => {
    if (transition === 0) setState({ ...state, transition: 0.45 });
  }, [transition, state]);

  const handleResize = () => {
    setState({ ...state, translate: getSliderWidth(), transition: 0 });
  };

  const smoothTransition = () => {
    let slidesSmoothBuffer = [];

    if (activeSlide === slides.length - 1) {
      slidesSmoothBuffer = [slides[slides.length - 2], lastSlide, firstSlide];
    } else if (activeSlide === 0) {
      slidesSmoothBuffer = [lastSlide, firstSlide, secondSlide];
    } else {
      slidesSmoothBuffer = slides.slice(activeSlide - 1, activeSlide + 2);
    }

    setState({
      ...state,
      slidesBuffer: slidesSmoothBuffer,
      transition: 0,
      translate: getSliderWidth(),
    });
  };

  const nextSlide = () => {
    setState({
      ...state,
      translate: translate + getSliderWidth(),
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
    });
  };

  const prevSlide = () => {
    setState({
      ...state,
      translate: 0,
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
    });
  };

  useEffect(() => {
    transitionRef.current = smoothTransition;
    resizeRef.current = handleResize;
  });

  useEffect(() => {
    const slider = sliderRef.current;

    const smooth = (e) => {
      if (e.target.className.includes('sliderContentWrapper')) {
        transitionRef.current();
      }
    };

    const resize = () => {
      resizeRef.current();
    };

    const transitionEnd = slider.addEventListener('transitionend', smooth);
    const onResize = window.addEventListener('resize', resize);

    return () => {
      slider.removeEventListener('transitionend', transitionEnd);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const classes = useStyles();

  return (
    <div ref={sliderRef} className={classes.mainSlider}>
      <SliderContentWrapper
        translate={translate}
        transition={transition}
        width={getSliderWidth() * slidesBuffer.length}
      >
        {slidesBuffer.map(({ id, imageSource, imageAltText, title, text, readMoreLink }) => (
          <SliderItem
            key={id}
            imageSource={imageSource}
            imageAltText={imageAltText}
            title={title}
            text={text}
            readMoreLink={readMoreLink}
            width={getSliderWidth()}
          />
        ))}
      </SliderContentWrapper>
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
    </div>
  );
};

Slider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

// This limitation was added due to the component for this moment have no logic to work with less than 3 items
// This scenario will be fixed, logic should handle array with two items and with a single item
// Will be added two cases, and the logic of additional functions should be adjusted.
// In the case of one item controls should be hidden. In the case of two items, we should navigate between two.

const ExportSlider = ({ slides }) => (slides.length < 3 ? null : <Slider slides={slides} />);

ExportSlider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ExportSlider;
