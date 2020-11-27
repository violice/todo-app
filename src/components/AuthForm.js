import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { Button, TextField, Message, LoadingIndicator } from 'components/shared';

const useStyles = createUseStyles({
  container: {
    maxWidth: '320px',
    padding: '32px',
    margin: '0 auto',
    backgroundColor: '#fff',
    boxShadow: '0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12)',
    borderRadius: '8px',
    position: 'relative',
  },
  messageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: '32px',
  },
});

const AuthForm = ({ username, password, isLoading, error, onUsernameChange, onPasswordChange, onFormSubmit }) => {
  const styles = useStyles();

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit({ username, password });
  }

  return (
    <form className={styles.container} onSubmit={onSubmit}>
      {isLoading && <LoadingIndicator withOverlay />}
      <TextField title="Username" value={username} onChange={onUsernameChange} />
      <TextField title="Password" value={password} onChange={onPasswordChange} />
      {error &&
        <div className={styles.messageContainer}>
          <Message value={error.message} />
        </div>
      }
      <div className={styles.buttonContainer}>
        <Button title="SignIn / SignUp" />
      </div>
    </form>
  );
};

AuthForm.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isLoading: PropTypes.bool,
  error: PropTypes.object,
  onUsernameChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

AuthForm.defaultProps = {
  isLoading: false,
  error: null,
};

export default AuthForm;