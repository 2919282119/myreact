import { Input, List } from 'antd';
import React, { Component } from 'react'
import Lightbutton from './components/Lightbutton';
import Log from './components/Log';
import Test from './components/Test';
import {reqdoSQL} from "./functions/sql"
export default class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        data:[]
      }
    }
    async componentDidMount(){
      let p={};
      p.database="voluntarys";
      p.sqlprocedure="demox001";
      const rs=await reqdoSQL(p);
      this.setState({data:rs.rows},()=>{
        console.log(rs.rows);
      });
    }

  render() {
    const list=this.state.data.map(item=><h3 key={item.feederid}>{item.actname}</h3>)


    return (
      <div>
        {list}
      </div>
    )
  }
}
