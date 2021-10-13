import React, { useEffect, memo, useState, useContext } from 'react';
import classNames from 'classnames';
import { useStoreHook } from 'think-react-store';

function Footer(props) {
  const {
    user: { id, name, setName, setNameAsync }
  } = useStoreHook();
  const handleName = () => {
    setName({
      name: '同步修改'
    });
  };

  const handleNameAsync = () => {
    setNameAsync({
      name: '异步修改'
    });
  };
  return (
    <section>
      <h1>function 类型组件</h1>
      <p>
        用户：name--{name} id--{id}
      </p>
      <p>
        <button onClick={handleName}>修改用户</button>
      </p>
      <p>
        <button onClick={handleNameAsync}>异步修改用户</button>
      </p>
    </section>
  );
}

export default memo(Footer);
