/*

*/

import React,{Component} from 'react';

import {connect} from 'react-redux';
import {Link} from 'react-router';

class Nav extends Component{
  constructor(props){
    super(props);

  }
  render(){
    var ISSHOW = this.props.show;
    var menus = (
      <div style={{padding:'10px',borderBottom:'1px solid #d9d9d9',boxShadow:'0 2px 2px #d9d9d9',fontSize:'12px'}}>
        <ul className="uk-list-line uk-list">
          <li><Link to="intro/bi/决策支持BI平台">决策支持BI平台</Link></li>
          <li><Link to="">云药店</Link></li>
          <li><Link to="">云健康</Link></li>
          <li><Link to="intro/hpms/医院药事管理软件">医院药事管理软件</Link></li>
          <li><Link to="intro/hmms/医院医保管理软件">医院医保管理软件</Link></li>
        </ul>
      </div>
    );
    return (
      <div style={{top:this.props.top,zIndex:2,position:'absolute',backgroundColor:'#fff',width:'100%'}}>
        {
          ISSHOW ? menus : ''
        }
      </div>
    )
  }
}

function select(state){
  return {
    top:state.index.height,
    show:state.header.showNav
  }
}

export default connect(select)(Nav);
