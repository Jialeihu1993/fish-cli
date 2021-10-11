import React from 'react';
import ReactDOM from 'react-dom';
import Index from '@/view/App'


const App = () => {
  return (
      <div>
        <Index></Index>
      </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));