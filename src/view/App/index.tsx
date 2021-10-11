import React, { useEffect , memo} from "react";
import classNames from 'classnames';
// css modules既解决了className命名冲突的问题，也解决了样式全局作用污染的问题
import styles from './index.less';

console.log(styles);

function App (props) {

    useEffect(() => {

    }, [])
 
    return (
        <section>
            <div className={classNames(styles['title'],'hh')}>11</div>
        </section>
    )

}

export default memo(App)
