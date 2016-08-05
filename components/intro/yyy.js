import  React,{Component} from 'react';

import Header from '../titleBar';

import Footer from './footer';

export default class Yyy extends Component{
	render(){
		return(
			<div className="yhospital">
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
			<div className="mobile" style={{paddingTop:'4.2rem'}}>
				<div className="main-yyy">
					 <img src="images/app-yhospital-ddn.png" alt="" className="ddn"/>
					 <img src="images/app-yhospital-xdn.png" alt="" className="xdn"/>
					 <div className="title">云医院（医院在线合理用药）</div>
					 <div className="app-hpms">APMS</div>
					 <p className="app-text">
						医睦云医院处方点评平台通过自主研发的云计算引擎<br/>
						实现药学干预，处方点评和用药分析等功能帮助医院解决大量<br/>
						的处方数据手工处理的问题，大大降低医院的合理用药系统投入<br/>
						通过数据脱敏加密的方式，只要点击上传，实时审核，支持下载<br/>
						 一切都那么简单。
					 </p>
					 <a href="javascript:void(0)" className="sysm">
						<i className="icon-sysm"></i>
						产品手册
					 </a>
					<div className="title mgt">
					   云处方超级核动力
					 </div>
					 <img src="images/app-yhospital-hdl.jpg" className="app-hdl"/>	
					<div className="content-title mgb">
						模式
						 <p className="content-text">MODULE</p>
					</div>
					<img src="images/app-yhospital.jpg" alt="" className="app-model"/>
				</div>
			</div>
		)
	}
}