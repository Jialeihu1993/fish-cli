/*
 * @Author: hujialei
 * @Date: 2021-10-11 17:34:29
 * @Last Modified by: hujialei
 * @Last Modified time: 2021-10-12 17:51:10
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Index from '@/view/App';
import '@/packages/moo-css-base/index';

const App = () => {
  return (
    <div>
      <Index></Index>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
