import React from 'react';
import App from './App';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Room from './components/room';
const AppRouter = () => {
  return(
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/234" component={Room} />
      </div>
    </Router>
  )
}

export default AppRouter;