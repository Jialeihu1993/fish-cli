import React, { useEffect, memo, useState } from 'react';
import classNames from 'classnames';
// css modules既解决了className命名冲突的问题，也解决了样式全局作用污染的问题
import styles from './index.less';

function App(props) {
  const [test, setA] = useState('hh');
  useEffect(() => {
    let a = test;
    console.log(a);
  }, []);

  return (
    <section>
      <div className={classNames(styles['title'], 'g-mt20 g-ml20')}>移动脚手架</div>
    </section>
  );
}

export default memo(App);
