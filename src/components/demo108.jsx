import React from 'react';
import { getPinyinFirstLetter } from './demo107.jsx';
//定义一个textbox边框的css，在textbox中应用时使用style={textStyle}
const textStyle = {
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
    //transition: 'border-color 0.3s ease',
    borderColor: '#4c9aff',
    height: 28,
    paddingLeft: 6,
    marginTop: 10
}   

/*
.beautiful-border {
    border: 2px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: border-color 0.3s ease;
  }  
  .beautiful-border:focus {
    border-color: #4c9aff;
  }
*/
//定义一个类组件
export default class Demo108 extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
        error:[]
      }
    }
    //构造一个箭头函数，验证输入的数据 
    validation = () => {
        //获取客户编码和客户名称两个元素，在return中定义了其id分别为cid和cname
        let cid = document.getElementById('cid');
        let cname = document.getElementById('cname');
        //用value属性获取客户编码和客户名称两个元素的值
        let s1 = cid.value;
        let s2 = cname.value;
        //定义一个记录错误信息的变量error，不同错误之间换行显示。
        let error=this.state.error;
        //去掉客户编码和客户名称左右边的空格
        s1 = s1.replace(/[\s]/g,'').toUpperCase();//小写变大写
        s2 = s2.replace(/[\s]/g,'').toUpperCase();
        if (s1 == '' || s2 =='') error.push("客户编码和客户名称都不能为空");

        if(s1.length!=7)error.push("客户编码长度不为7");

        if(s1.slice(0,5)==getPinyinFirstLetter(s2))error.push("客户编码前四位拼音与客户名称不匹配");

        let latter=Number(s1.slice(4,7));
        if(isNaN(latter)||latter<10||latter>500)error.push("客户编码后三位不为10~500之间的数字");

        if(s2.length==0||!s2[0].match(/[\u4e00-\u9fa5]/g))error.push("客户名称要以汉字开头");

        if(s2.match(/\d/g))error.push("客户名称不能包含数字");

        if(!/["公司" "店" "商行"]/.test(s2))error.push("客户名称要包含公司、商行或店");
        
        cid.value=s1;
        cname.value=s2;
        let set=new Set(error);
        this.setState({error:[...set]},()=>{
            if(this.state.error.length==0)alert("数据验证正确！")
        });
        
    }
    ResetError=()=>{
        this.setState({error:[]})
    }
    render() { 
        //const str = 'Hello World, Hello World';
        //console.log(str.replace('World', 'OpenAI'), str.replaceAll('World', 'OpenAI'), str.replace(/o/g, 'a'))
        //console.log(str.replace('Hello', 'Good', 13), str.charAt(100),str[100])
        let elist=this.state.error.map((item,index)=><p>错误{index+1}:{item}</p>)
        return (  //输出各个元素变量
            <div style={{marginLeft:10, marginTop:20}}>
                <div>
                    <label>客户编码：</label>
                    <input type="text" id="cid" style={textStyle} required maxLength="10" size="15" onChange={this.ResetError.bind(this)}  />
                    <br/>
                    <label>客户名称：</label>
                    <input type="text" id="cname" style={textStyle} required maxLength="100" size="50" onChange={this.ResetError.bind(this)}  />
                    <p><button onClick={() => this.validation()}>验证数据</button></p>
                    {this.state.error.length!=0&&<div>({elist})</div>}
                </div>
            </div>
        )
    }
}
