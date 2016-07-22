import {Component} from 'react';


class Loading extends Component{
  render(){
    return (
      <div style={{textAlign:'center',position:'fixed',backgroundColor:'#fff',top:this.props.top,padding:'1rem',left:0,width:'100%'}}>
        <i className="fa fa-spinner fa-spin fa-2x"></i>
      </div>
    )
  }
}

export default Loading;
