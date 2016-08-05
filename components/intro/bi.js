import  React,{Component} from 'react';

import Header from '../titleBar';

import Footer from './footer';

export default class Bi extends Component{
	render(){
		return(
			<div className="bipt">
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
				<div className="main-bipt">
					<img src="images/bipt-app.png" alt="" className="bipt-img"/>
					<div className="main-logo">决策支持BI平台</div>
					<div className="app-hpms">HPMS</div>
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
					<div className="bipt-content">
						<ul className="page-icon">
							<li className="lione"></li>
							<li className="litwo"></li>
							<li className="lithree"><img src="images/smionic.png" alt=""/></li>
						</ul>
						<div className="content-title">
							定制化BI分析平台
							<div className="content-text">USTOMIZED BI ANALYSIS PLATFORM</div>
						</div>
						<div className="img-group">
							<span className="img-left"></span>
							<img src="images/bipt02-app.jpg" alt=""/>
							<p>
								BI对客户关注的各类信息进行整合、对比、抽象<br/>
								分析面向决策层直观、简洁展现，从而实现支持决策的目的
							</p>
							<img src="images/bipt03-app.jpg" alt=""/>
							<p>
								根据政府、医院、企业的监管或管理需求，灵活定制监管<br/>
								分析决策平台
							</p>
						</div>
						<ul className="page-icon">
							<li className="lione"></li>
							<li className="litwo"></li>
							<li className="lithree"><img src="images/smionic.png" alt=""/></li>
						</ul>
					</div>
					<div className="bipt-case">
						<div className="content-title">
							典型案例
							<div className="content-text">APPLICATION CASE</div>
						</div>
						<div className="bipt-list-group">
							<div className="list-left">
								<img src="images/bipt04-app.jpg" alt=""/>
								<div>
									标点信息委托医睦科技改造米内网<br/>
									高级会员格局库用户体验和展现形<br/>
									式得到进一步提升
								</div>
							</div>
							<div className="list-right">
								<img src="images/bipt-ys-app.jpg" alt=""/>
								<div>
									依据医睦科技现有数据资源开发代<br/>
									理商药品筛选平台图表结合，层层<br/>
									下转，帮助客户准确把握行业发展<br/>
									趋势洞悉行业竞争格局
								</div>
							</div>
						</div>
						<div className="imgtop"></div>
						<div className="imgbot"></div>
					</div>
				</div>
			</div>
		)
	}
}