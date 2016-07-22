import React,{Component} from 'react';

import {connect} from 'react-redux';

class Header extends Component{
  constructor(props){
    super(props);
    this.menuHandle = this.menuHandle.bind(this);
    this.searchAction = this.searchAction.bind(this);
  }
  menuHandle(e){
    e.preventDefault();
    e.stopPropagation();
    if(!this.props.showNav){
      this.props.dispatch({
        type:'SHOW'
      });
      window.addEventListener('click',this.menuHandle,false);
    }else{
      this.props.dispatch({
        type:'UNSHOW'
      });
      window.removeEventListener('click',this.menuHandle,false);
    }
  }

  searchAction(){
    this.props.dispatch({
      type:'SHOWLOADING'
    });
    console.log(this.refs.search.value);
    this.props.dispatch({
      type:'SEARCH',
      queryStr:this.refs.search.value
    })

    let _self = this;
    $.ajax({
      url:'http://192.168.1.235:8082/imkb/imkbapp/searchApp',
      data:{
        queryStr:this.refs.search.value,
        pageSize: 20
      },
      success:function(res){
        if(res.status == 1){
          _self.props.dispatch({
            type:'UNSHOWLOADING'
          });
        }
        _self.props.dispatch({
          type:'CLEARDATA'
        });
        _self.props.dispatch({
          type:'PAGE',
          pageNo:2
        });
        _self.props.dispatch({
          type:'ADDDATA',
          data:res.rows
        })
        
      }
    })
  }

  changeHandle(){
    console.log(this.refs.search.value);
  }

  render(){
    return (
        <header style={{height:this.props.height}} className={this.props.className}>
          <div className="header-left">
              <button style={{backgroundColor: this.props.showNav ? '#077DB3' : null}} onClick={this.menuHandle.bind(this)}><i className="fa fa-lg fa-list"></i></button>
          </div>
          <form className="header-right">
              <input ref="search" onChange={this.changeHandle.bind(this)} placeholder="请输入需要搜索的关键词"/>
              <button type="button" onClick={this.searchAction}>搜索</button>
          </form>
        </header>
    )
  }
}

function select(state){
  return{
    showNav:state.header.showNav,
    queryStr:state.header.queryStr
  }
}

export default connect(select)(Header)
