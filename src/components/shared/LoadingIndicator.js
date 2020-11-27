import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  overlay: {
    position: 'absolute',
    zIndex: '100',
    height: '100%',
    width: '100%',
    top: '0',
    left: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255,255,255,.75)',
    borderRadius: '8px',
  },
  loading: {
    margin: '0 auto',
    display: 'block',
    position: 'relative',
    width: '40px',
    height: '40px',
    '&>div': {
      boxSizing: 'border-box',
      display: 'block',
      position: 'absolute',
      width: '32px',
      height: '32px',
      margin: '4px',
      border: '4px solid #673ab7',
      borderRadius: '50%',
      animation: 'loading-animation 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite',
      borderColor: '#673ab7 transparent transparent transparent',
      '&:nth-child(1)': {
        animationDelay: '-0.45s',
      },
      '&:nth-child(2)': {
        animationDelay: '-0.3s',
      },
      '&:nth-child(3)': {
        animationDelay: '-0.15s',
      },
    },
  },
});

const LoadingIndicator = ({ withOverlay }) => {
  const styles = useStyles();

  if (withOverlay) {
    return (
      <div className={`${styles.overlay}`}>
        <div className={styles.loading}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.loading}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

LoadingIndicator.propTypes = {
  withOverlay: PropTypes.bool,
};

LoadingIndicator.defaultProps = {
  withOverlay: false,
};

export default LoadingIndicator;