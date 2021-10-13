/*
 * @Author: hujialei
 * @Date: 2021-10-13 10:49:15
 * @Last Modified by:   hujialei
 * @Last Modified time: 2021-10-13 10:49:15
 */

import React from 'react';
import { Route } from 'react-router-dom';
import App from '@/view/App';
import Entry from '@/view/Entry';

function Routers() {
  return (
    <section>
      <Route exact path="/" component={App} />
      <Route exact path="/entry" component={Entry} />
    </section>
  );
}

export default Routers;
