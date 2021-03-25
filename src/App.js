import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './scss/style.scss';
import { UsersContextProvider } from './staticData';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheLayout = React.lazy(() => import('./containers/TheLayout'));

class App extends Component {
  render() {
    return (
      <UsersContextProvider>
        <HashRouter>
            <React.Suspense fallback={loading}>
              <Switch>
                <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
              </Switch>
            </React.Suspense>
        </HashRouter>
      </UsersContextProvider>
    );
  }
}

export default App;
