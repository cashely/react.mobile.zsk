import  React,{Component} from 'react';

import Header from '../titleBar';

import Footer from './footer';

export default class Yjk extends Component{
	render(){
		return(
			<div className="yjk">
				<Header title={this.props.params.title} height='4.2rem'/>
				<Main/>
				<Footer/>
			</div>
		)
	}
}

class Main extends Component{
	render(){
		return(
			<div  className="mobile" style={{paddingTop:'4.2rem'}}>
				<div  className="main">
					<img src="images/yjk03-app.png" alt=""  className="ddn"/>
					<div  className="title yjk-title">云健康（患者用药教育）</div>
					<p  className="app-text">
						云健康将实现线上线下一体化的患者用药教育
					</p>
					<a href="javascript:void(0)"  className="sysm">
						<i  className="icon-sysm"></i>
						 产品手册
					</a>
				</div>
				<p  className="maintop-text"><i  className="icon"></i>患者用药教育的目的</p>
				<img src="images/yjk-talk-app.png" alt=""  className="yjk-tal"/>
				<div  className="jiaoyu">
					<p  className="maintop-text"><i  className="icon"></i>患者用药教育的实现</p>
					 <div  className="content-title">
						患者用药教育系统
						<p  className="content-text">PTIENTS WITH MEDICINE EDZUCATION SYSTEM</p>
					</div>
					 <img src="images/yjk11-app.png" alt=""  className="img"/>
					<div  className="content-title">
						线下运营
						<p  className="content-text">OFFLINE OPERATION</p>
					</div>
					<img src="images/yjk02-app.jpg" alt=""  className="ddn-img"/>
					<div  className="bot-img">
						<p   className="bot-p">
							1.用药时间提醒短信：<br/>
							从患者购药次日开始，给患者发送所用药物的用法<br/>
							用量，一直持续到出院所带药物用完。<br/>
							2.药物实用信息短信：<br/>
							包含药物的使用方法和注意事项，将根据患者服用药物<br/>
							将相关信息发送给患者。<br/>
							3.药物不良反应信息：<br/>
							将药物最常见的不良反应自动发送至患者手机，提醒患者注意。
						</p>
					</div>
				</div>
			</div>
		)
	}
}