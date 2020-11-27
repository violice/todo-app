import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  message: {
    backgroundColor: '#FFE4E9',
    borderRadius: '4px',
    color: '#FF1A43',
    fontSize: '12px',
    padding: '8px 16px',
  },
});

const Message = ({ value }) => {
  const styles = useStyles();
  return (
    <span className={styles.message}>{value}</span>
  );
};

Message.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Message;