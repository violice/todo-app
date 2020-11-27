import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  textFieldContainer: {
    marginBottom: '16px',
    borderBottom: '1px solid rgba(0,0,0,.87)',
    padding: '4px',
  },
  textFieldLabel: {
    display: 'block',
    marginBottom: '8px',
    color: 'rgba(0,0,0,.54)',
    fontSize: '12px',
  },
  textField: {
    display: 'block',
    width: '100%',
    padding: '0px',
    border: 'none',
    backgroundColor: 'transparent',
    '&:focus': {
      outline: 'none',
    },
  },
});

const TextField = ({ title, value, multiline, onChange }) => {
  const styles = useStyles();
  return (
    <div className={styles.textFieldContainer}>
      <label className={styles.textFieldLabel}>{title}</label>
      {multiline
        ? <textarea
          className={styles.textField}
          name="username"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        : <input
          className={styles.textField}
          name="username"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
      }
    </div>
  );
};

TextField.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

TextField.defaultProps = {
  title: '',
  multiline: false,
};

export default TextField;