// 路由注册
import React from 'react';
import { Router, Route } from 'react-router';

import Biztone from './biztone/Container';
import Reserve from './reserve/index';

export default () => (
  <div>
    <Route path="/" component={Reserve} />
    <Route path="biztone" component={Biztone} /> 
  </div>   
);