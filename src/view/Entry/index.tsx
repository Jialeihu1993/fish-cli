import React, { useEffect, memo, useState } from 'react';
import classNames from 'classnames';

function App(props) {
  const [test, setA] = useState('hh');
  useEffect(() => {
    let a = test;
    console.log(a);
  }, []);

  return (
    <section>
      <div className={'g-mt20 g-ml20'}>entry</div>
    </section>
  );
}

export default memo(App);
