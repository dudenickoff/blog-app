import React, { useState, useEffect, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SliderContentWrapper from './components/SliderContentWrapper';
import Arrow from './components/Arrow';
import SliderItem from './components/SliderItem';

const useStyles = makeStyles({
  mainSlider: {
    position: 'relative',
    height: '800px',
    width: '800px',
    margin: '0 auto',
    overflow: 'hidden',
  },
});

// TODO: PROPTYPES
/* eslint-disable react/prop-types */

const getWidth = () => 800;

const Slider = ({ slides }) => {
  const firstSlide = slides[0];
  const secondSlide = slides[1];
  const lastSlide = slides[slides.length - 1];

  const [state, setState] = useState({
    activeSlide: 0,
    translate: getWidth(),
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
    setState({ ...state, translate: getWidth(), transition: 0 });
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
      translate: getWidth(),
    });
  };

  const nextSlide = () => {
    setState({
      ...state,
      translate: translate + getWidth(),
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
        width={getWidth() * slidesBuffer.length}
      >
        {slidesBuffer.map(({ id, imageSource, imageAltText, title, text, readMoreLink }) => (
          <SliderItem
            key={id}
            imageSource={imageSource}
            imageAltText={imageAltText}
            title={title}
            text={text}
            readMoreLink={readMoreLink}
            width={getWidth()}
          />
        ))}
      </SliderContentWrapper>
      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
    </div>
  );
};

export default ({ slides }) => (slides.length === 0 ? null : <Slider slides={slides} />);
