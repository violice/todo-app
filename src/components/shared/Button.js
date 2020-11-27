import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  button: {
    backgroundColor: '#673ab7',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '8px 16px',
    minWidth: '96px',
    '&:focus': {
      outline: 'none',
    },
    '&:hover': {
      backgroundColor: '#8561c5',
      cursor: 'pointer',
    },
  },
});

const Button = ({ title, onClick }) => {
  const styles = useStyles();
  return (
    <button className={styles.button} onClick={onClick}>{title}</button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  onClick: () => {},
};

export default Button;