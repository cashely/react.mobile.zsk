import  React,{Component} from 'react';

import Header from '../titleBar';

import Footer from './footer';

export default class Yjk extends Component{
	render(){
		return(
			<div className="yjk">
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
			<div className="mobile">
				<div className="main">
					<img src="images/yjk03-app.png" alt=""className="ddn"/>
					<div className="title yjk-title">云健康（患者用药教育）</div>
					<p className="app-text">
						 云健康将实现线上线下一体化的患者用药教育
					</p>
				    <a href="javascript:void(0)" className="sysm">
						<i className="icon-sysm"></i>
						产品手册
					</a>
				</div>
				 <p className="maintop-text"><i className="icon"></i>患者用药教育的目的</p>
				<img src="images/yjk-talk-app.jpg" alt="" className="yjk-tal"/>
				<div className="jiaoyu">
					<p className="maintop-text"><i className="icon"></i>患者用药教育的实现</p>
					<div className="content-title">
						患者用药教育系统
						<p className="content-text">PTIENTS WITH MEDICINE EDZUCATION SYSTEM</p>
					</div>
					<img src="images/yjk11-app.jpg" alt="" className="img"/>
					<div className="content-title">
						线下运营
						<p className="content-text">OFFLINE OPERATION</p>
					</div>
					<img src="images/yjk02-app.jpg" alt="" className="ddn-img"/>
					<img src="images/yjk12-app.jpg" alt="" className="bot-img"/>
				</div>
			 </div>
		)
	}
}