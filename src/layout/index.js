import React, {Component} from 'react';
import styles from './index.less';
import { Button, message, Icon } from 'antd';
import {Link} from 'react-router';
require('./index.less');

class MenuFooter extends Component{
    constructor(props){
        super(props);
        console.log(props);
        // message.error('hahahah')
    }
    render(){
        return(
            <div className={styles.layout}>
                <div className="layout-content">
                    <div className="layout-main">{this.props.children}</div>
                </div>
                <div className={styles.menuFooter}>
                    {/*<div className='menuFooter'>*/}
                    <ul>
                        <Link to={"cento"} activeClassName="active">
                            <li>
                                {/*<Button type='primary' >哈哈哈哈</Button>*/}
                                <Icon type="edit" />
                                <span>摘录</span>
                            </li>
                        </Link>
                        <Link to={"/produce"} activeClassName="active">
                            <li>
                                <Icon type="file-text" />
                                <span>创作</span>
                            </li>
                        </Link>
                        <Link to={"/discover"} activeClassName="active">
                            <li>
                                <Icon type="compass" />
                                <span>发现</span>
                            </li>
                        </Link>
                        <Link to={"/library"} activeClassName="active">
                            <li>
                                <Icon type="database" />
                                <span>文库</span>
                            </li>
                        </Link>
                        <Link to={"/user"} activeClassName="active">
                            <li>
                                <Icon type="user" />
                                <span>我</span>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        )
    }
};
export default MenuFooter;
