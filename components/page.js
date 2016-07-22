import React,{Component} from 'react';

import {connect} from 'react-redux';

import Loading from './loading';

import TitleBar from './titleBar';

import PageMain from './PageMain';
class Page extends Component{

	componentDidMount(){
		$.ajax({
			url:'http://192.168.1.235:8082/imkb/immoapp/showSmsFullApp',
			data:{
				id:this.props.params.id,
				imagePath:'http://www.immortalshealth.com/'
			},
			success:(res) => {
				this.props.dispatch({
					type:'LOADPAGE',
					content:res.data.sms,
					title:res.data.title
				})
			}
		})
	}
	render(){
		return (
			<div className="content">
          		<TitleBar history={this.props.history} title={this.props.title} height={this.props.height} className="header" />
          		<PageMain height={this.props.height} content={this.props.content}/>
      		</div>	
		)
	}	
}

function select(state){
	return {
	    height:state.index.height,
	    content:state.page.content,
	    title:state.page.title
	  }
}


export default connect(select)(Page)
