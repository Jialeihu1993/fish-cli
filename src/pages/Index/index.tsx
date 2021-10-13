/*
 * @Author: hujialei
 * @Date: 2021-10-11 17:34:29
 * @Last Modified by: hujialei
 * @Last Modified time: 2021-10-13 11:58:06
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import '@/packages/moo-css-base/index';
import Routers from './routers';
import { StoreProvider } from 'think-react-store';
import * as store from '@/stores/index';
/** 公共样式 **/
import '@/styles/less.less';

const Index = () => {
  return (
    <HashRouter>
      <StoreProvider store={store}>
        <Routers />
      </StoreProvider>
    </HashRouter>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
