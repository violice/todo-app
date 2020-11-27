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
        {!document.cookie.includes('todo-app-token') && <Redirect exact from="/" to="auth" />}
        <Route exact path="/" component={TasksContainer} />
        <Route path="/auth" component={AuthContainer} />
      </Switch>
    </>
  );
};

export default App;
