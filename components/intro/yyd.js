import  React,{Component} from 'react';

import Header from '../titleBar';

import Footer from './footer';

export default class Yyd extends Component{
	render(){
		return(
			<div className="yyd">
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
				<div className="main-yyd">
					<div className="title">云药店（药店处方评价）</div>
					<div className="app-hpms hpms-yyd">APMS</div>
					<p className="main-text">
						根据药监管理部门《药品经营质量管理规范》<br/>
					   《加强药品零售企业规范化管理若干意见》等规范要求<br/>
						零售药店须建立药学服务信息管理系统和处方调剂信息管理系统<br/>
						建立责任药师制度并实施及时有效管理<br/>
						云药店能够帮助连锁药店、单体药店，以及药店的店员建立药学<br/>
						服务云平台，达到规范的要求，提高药学服务能力。
					</p>
					<a href="javascript:void(0)" className="sysm sysm-yyd">
						<i className="icon-sysm"></i>
						产品手册
					</a>
					<ul className="page-icon mgt">
						<li className="lione"></li>
						<li className="litwo"></li>
						<li className="lithree"><img src="images/smionic.png" alt=""/></li>
					</ul>

					<div className="content-title">
						现状
						<p className="content-text">STATUS QUO</p>
					</div>
					<img src="images/yyd01-app.jpg" alt="" className="status"/>
				</div>
				<ul className="page-icon">
					<li className="lione"></li>
					<li className="litwo"></li>
					<li className="lithree"><img src="images/smionic.png" alt=""/></li>
				</ul>
				<div className="model">
					<div className="content-title">
						模式
						<p className="content-text">MODULE</p>
					</div>
					<img src="images/yyd03-app.jpg" alt=""/>
					<img src="images/yyd04-app.jpg" alt=""/>
				</div>
			</div>
		)
	}
}