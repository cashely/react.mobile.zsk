import {Component} from 'react';

//头部

import Header from './header';
//中间内容
import Main from './main';

import Nav from './nav';

import {connect} from 'react-redux';

class Index extends Component{

  constructor(props){
    super(props);
  }

  routerWillLeave(nextLocation){
    alert(1);
  }
  render(){
    return ( 
      <div className="content">
          <Header height={this.props.height} className="header"/>
          <Nav styleName="nav" top={this.props.height}/>
          <Main top={this.props.height}/>
      </div>
    )
  }
}
function select(state){
  return {
    height:state.index.height
  }
}
export default connect(select)(Index);

