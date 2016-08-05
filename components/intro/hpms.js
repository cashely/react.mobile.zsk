import  React,{Component} from 'react';

import Header from '../titleBar';

import Footer from './footer';

export default class Hpms extends Component{
	render(){
		return(
			<div className="ysgl">
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
				<div className="main-ysgl">
					<img src="images/computer-img01-app.png" alt="" className="ddn-ysgl"/>
					<img src="images/computer-img02-app.png" alt="" className="xdn-ysgl"/>
					<div className="main-logo">医院药事管理软件</div>
					<div className="app-hpms">HPMS</div>
					<p className="main-text  mgtSixteen">
						医院药事管理软件主要是利用应用自然语言定义的图形化<br/>
						规则技术基于庞大的临床用药标准知识库、结合现行医疗法规<br/>
						为医院提供一套智能化的药事管理软件
					</p>
					<a href="javascript:void(0)" className="sysm sysm-ysgl">
						<i className="icon-sysm"></i>
						产品手册
					</a>
					<p className="title">价值在哪里?</p>
					<img src="images/box-app.jpg" alt="" className="box-app"/>
					<div className="action">
						<div className="content-title">
							功能模块
							<p className="content-text">FUNCTIONAL MODULE</p>
						</div>
						<img src="images/ysgl-action-app.jpg" alt="" className="action-app"/>
					</div>
				</div>
				<ul className="page-icon">
					<li className="lione"></li>
					<li className="litwo"></li>
					<li className="lithree"><img src="../dist/images/smionic.png" alt=""/></li>
				</ul>
				<div className="core">
					<div className="content-title">
						核心优势
						<p className="content-text">CORE STRENGTHS</p>
					</div>
					<ul>
						<li className="first">
							<div className="num">1</div>
							采用思维导图技术，逻辑描述和智能引擎的分离方式
						</li>
						<li>
							<div className="num">2</div>
							完全模拟临床实际管理逻辑判断，业务管理人员通过可视化的图形设计完成管理规则的设计
						</li>
					</ul>
					<img src="images/phone-app.jpg" alt="" className="phone-app"/>
				</div>
				<ul className="page-icon">
					<li className="lione"></li>
					<li className="litwo"></li>
					<li className="lithree"><img src="../dist/images/smionic.png" alt=""/></li>
				</ul>
				<div className="case">
					<div className="center">
						<div className="content-title">
							典型案例
							<p className="content-text">APPLICATION CASE</p>
						</div>
						<p className="case-p">
							目前医院药事管理软件已在 <span>86</span>家不同级别医院使用并在<br/>
							区域化项目“三明市药械合理使用管理平台”“姑苏区药事监管平台”得到推广与应用
						</p>
						<img src="images/doctor-app.jpg" alt="" className="doctor"/>
					</div>
				</div>
			</div>
		)
	}
}