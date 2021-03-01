import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../Pages/Home';
import Index from '../Data/Index'

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/data" component={ Index }/>
    </Switch>
  );
}
 
export default Routes;