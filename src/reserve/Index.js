import React from 'react';
import browserHistory from 'react-router/lib/browserHistory';
const Index = () => (
  <div onClick={() => browserHistory.push('biztone')}>11今天是个好日子, 就是为了测试</div>
);
export default Index;
