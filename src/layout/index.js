import React, {Component} from 'react';
import styles from './index.less';
import { Button, message } from 'antd';
// require('./index.less');

class MenuFooter extends Component{
    constructor(props){
        super(props);
        console.log(props);
        message.error('hahahah')
    }
    render(){
        return(
            <div className={styles.menuFooter}>
        {/*<div className='menuFooter'>*/}
                <ul>
                    <li>
                        <Button type='primary' >哈哈哈哈</Button>
                        <img src="" alt=""/>
                        <span>摘录</span>
                    </li>
                    <li>
                        <img src="" alt=""/>
                        <span>创作</span>
                    </li>
                    <li>
                        <img src="" alt=""/>
                        <span>发现</span>
                    </li>
                    <li>
                        <img src="" alt=""/>
                        <span>文库</span>
                    </li>
                    <li>
                        <img src="" alt=""/>
                        <span>我</span>
                    </li>
                </ul>
            </div>
        )
    }
};
export default MenuFooter;
