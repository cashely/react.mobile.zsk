/*

*/

import React,{Component} from 'react';

import {connect} from 'react-redux';

class Nav extends Component{
  constructor(props){
    super(props);

  }
  render(){
    var ISSHOW = this.props.show;
    var menus = (
      <div style={{padding:'10px',borderBottom:'1px solid #d9d9d9',boxShadow:'0 2px 2px #d9d9d9',fontSize:'12px'}}>
        <ul className="uk-list-line uk-list">
          <li><a href="#">云处方医院点评</a></li>
          <li><a href="#">云药店</a></li>
          <li><a href="#">云健康</a></li>
          <li><a href="#">医院药事管理软件</a></li>
          <li><a href="#">医院医保管理软件</a></li>
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
