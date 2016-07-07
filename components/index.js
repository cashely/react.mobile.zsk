import {Component} from 'react';

//头部

import Header from './header';
//中间内容
import Main from './main';


export default class Index extends Component{
  render(){
    return (
      <div className="content">
          <Header className="header"/>
          <Main/>
      </div>
    )
  }
}
