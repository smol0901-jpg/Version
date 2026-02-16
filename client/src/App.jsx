import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import Reflection from './pages/Reflection';
import Settings from './pages/Settings';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/tasks" component={Tasks} />
        <Route path="/reflection" component={Reflection} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </Router>
  );
};

export default App;