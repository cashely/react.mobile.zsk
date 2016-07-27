import React,{Component,contextTypes} from 'react';
import {withRouter} from 'react-router';

class TitleBar extends Component{
	backHandle(){
		if(this.props.share){
			this.props.router.replace('/');
		}else{
			this.props.router.goBack();
		}
	}
	render(){
		return (
			<header style={{height:this.props.height}} className={this.props.className}>
				<div className="header-left">
	              <button onClick={this.backHandle.bind(this)}><i className="fa fa-2x fa-angle-left"></i> 返回</button>
	            </div>
				<span className="header-title">{this.props.title}</span>
			</header>
		);
	}
}

export default withRouter(TitleBar);
