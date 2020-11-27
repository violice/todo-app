import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { AuthContainer, TasksContainer } from 'containers';
import { Header } from './components';

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/auth" component={AuthContainer} />
        <Route path="/" component={TasksContainer} />
        {!localStorage.getItem('token') && <Redirect from="/" to="auth" />}
      </Switch>
    </>
  );
};

export default App;
