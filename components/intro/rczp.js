import  React,{Component} from 'react';

import Header from '../titleBar';

import Footer from './footer';

export default class Rczp extends Component{
	render(){
		return(
			<div className="rczp">
				<Header title={this.props.params.title}/>
				<Main/>
				<Footer/>
			</div>
		)
	}
}

class Main extends Component{
	render(){
		return(
			 <div className="main">
				<div className="content-title">
					人才招聘
					<div className="content-text">TALENT RECRUITMENT</div>
				 </div>
				<a href="javascript:void(0)" className="web">前端工程师</a>
				<div className="message">
				</div>
			</div>
		)
	}
}