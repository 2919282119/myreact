import React, { Component } from 'react'
import "./../css/log.css";
import Lightbutton from './Lightbutton';
export default class Log extends Component {
  render() {
    return (
      <form className='board'>
        <div className='title'>*五子棋积分管理系统*</div>
        <div>
            用户名：<input type="text" id="username" />
        </div>
        <div>
            密码：&nbsp;&nbsp; <input type="text" id="password" />
        </div>
        <Lightbutton content="登录"/>
      </form>
    )
  }
}
