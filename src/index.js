import React from "react";
import ReactDOM from "react-dom";
import './style.less';

const App = () => {
    return <div className="title"> App入口 </div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));