import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';

export default(
  <Route path='/' component={App}>
  	<Route path='license' component={App}/>
  	<Route path='refresh-data' component={App}/>
  </Route>
);