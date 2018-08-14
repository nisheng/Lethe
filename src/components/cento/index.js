import React,{ Component } from 'react';
import {Button} from 'antd';
class Cento extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div>
                你好 这是cento
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
            </div>
        )
    }
}

module.exports = Cento;
// export default Cento;

