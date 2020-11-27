import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useAsync } from 'react-async';
import { AuthForm } from 'components';
import { authApi } from 'api';

const AuthContainer = ({ history }) => {
  const [username, setUsername] = useState('user');
  const [password, setPassword] = useState('randompassword');
  const { isLoading, error, run } = useAsync({
    deferFn: authApi.auth,
    onResolve: ({ token }) => {
      localStorage.setItem('token', token);
      history.replace('/');
    },
  });

  return (
    <AuthForm
      username={username}
      password={password}
      isLoading={isLoading}
      error={error}
      onUsernameChange={setUsername}
      onPasswordChange={setPassword}
      onFormSubmit={run}
    />
  );
};

AuthContainer.propTypes = {
  history: PropTypes.object.isRequired,
};

export default AuthContainer;