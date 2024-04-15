module.exports = [{
    "link": "/",
    "text": "介绍",
    "order": 0
},
{
    "text": "测试分组",
    "order": 2,
    "collapsable": false,
    "sidebarDepth": 1,
    "children": [{
        "link": "/testGroup/",
        "text": "第一项",
        "order": 0
    },
    {
        "link": "/testGroup/second.md",
        "text": "测试第二项",
        "order": 1
    },
    ],
    "type": "group"
}]

import React, { Component } from 'react'
class Children extends React.PureComponent {
    render() {
        console.log('子组件刷新'); r
        eturn(<div> children----{this.props.useInfo} </div>)
    }
}
export default class SetStatedemo extends Component {
    constructor(props) {
        super(props);
        this.state = { number: 0, useInfo: 555 }
    }
    onClickHandle = () => {
        this.setState({ number: this.state.number + 1 });
    }
    onChange = () => { console.log('onchange'); } render() {
        console.log('刷新啦----');

        return (<div onClick={this.onClickHandle}> parent---{this.state.number}
            <Children useInfo={this.state.useInfo} onChange={this.onChange} /> </div>)
    }
}