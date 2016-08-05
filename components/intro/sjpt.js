import  React,{Component} from 'react';

import Header from '../titleBar';

import Footer from './footer';

export default class Sjpt extends Component{
	render(){
		return(
			<div className="sjpt">
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
				<div className="main-sjpt">
					<ul className="sjpt-timg">
						 <li className="bg-blue">
							<a href="javascript:void(0)">
								 <img src="images/computer-sjpt01-app.png" alt=""/>
								 <span>药品标准数据中心</span>
							</a>
						</li>
						<li className="bg-green">
							 <a href="javascript:void(0)">
								<img src="images/computer-sjpt02-app.png" alt=""/>
								<span>政策数据中心</span>
							</a>
						</li>
						<li className="bg-yellow">
							<a href="javascript:void(0)">
								<img src="images/computer-sjpt03-app.png" alt=""/>
								<span>机构资质中心</span>
							 </a>
						</li>
						 <li className="bg-red">
							<a href="javascript:void(0)">
								 <img src="images/computer-sjpt04-app.png" alt=""/>
								 <span>医药知识库</span>
							 </a>
						</li>
				  </ul>	
					<div className="main-logo">医疗大数据中心平台</div>
					<div className="app-hpms">MCD</div>
					<p className="main-text">
						通过建立标准编码体系，将产品各种特征信息按<br/>
						 一定顺序和规律进行整合实现统计分析、云计算等应用，涵盖<br/>
						了企业和政府相关部门的需求信息是目前国内医药产品信息最全<br/>
						最细致的编码系统
					 </p>
					 <a href="javascript:void(0)" className="sysm">
						<i className="icon-sysm"></i>
						 产品手册
					</a>
					 <ul className="page-icon">
						<li className="lione"></li>
						<li className="litwo"></li>
						<li className="lithree"><img src="images/smionic.png" alt=""/></li>
					</ul>
					<div className="content-title">
						专利大数据技术
						<div className="content-text">PATENTED BIG DATA TECHNOLOGY</div>
						<img src="images/sjpt-yl-app.jpg" alt="" className="yl-app"/>
					</div>
				</div>
				<div className="sjpt-progress">
					<div className="center">
						<div className="content-title">
							大数据进展
							<div className="content-text">BIG DATA PROGRESS</div>
						</div>
						<p className="sjpt-p">
							首创交叉式网状数据体系，拥有智慧的设计
						</p>
							<div className="sjpt-content">
								<ul className="sjpt-group ">
									<li>
										<h2>18万条</h2>
										<span>药品数据库 </span>
									</li>
									<li>
										<h2>全国各省6万条</h2>
										<span>政策数据库</span>
									</li>
									<li>
										<h2>9万家</h2>
										<span>机构数据库</span>
									</li>
									 <li>
										<h2>105万条<p>(现行有效价格)</p></h2>
										<span className="mgt">中标数据库</span>
									</li>
									<li>
										<h2>10万份
										<p>(涵盖药品说明书) </p>
										</h2>
										<span className="mgt">医药知识库 </span>
									</li>
									<li>
										<h2>近1万份
											<p>(由专业药师整理药学、诊<br/>
											疗、医保分析报告)</p>
										</h2>
										<span>药品价格库</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
				<div className="yb-case">
					<ul className="page-icon">
						<li className="lione"></li>
						<li className="litwo"></li>
						<li className="lithree"><img src="images/smionic.png" alt=""/></li>
					</ul>
					<div className="content-title">
						典型案例
						 <div className="content-text">APPLICATION CASE</div>
					</div>
					<p className="sjpt-case-p">
						 医疗大数据平台在政府监管、医院质量控制、精细化管理上发挥的重要作用
					</p>
					<div className="sjpt-case-img">
						 <img src="images/sjpt01-app.jpg" alt="" className="mgr"/>
						 <img src="images/sjpt02-app.jpg" alt=""/>
						 <img src="images/sjpt03-app.jpg" alt="" className="mgr"/>
						 <img src="images/sjpt04-app.jpg" alt=""/>
					</div>
				</div>
			</div>
		)
	}
}