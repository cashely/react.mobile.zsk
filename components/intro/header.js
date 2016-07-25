import React,{Component} from 'react';
export default class Header extends Component{
	render(){
		return (
			<header>
				<div className="mobile">
					<div className="app-top">
						<a className="navbar-toggle"></a>
						医院药事管理软件
					</div>
					<ul className="navbar-collapse">
						<li><a href="javascript:void(0)">云处方医院点评</a></li>
						<li><a href="javascript:void(0)">云药店</a></li>
						<li><a href="javascript:void(0)">云健康</a></li>
						<li><a href="javascript:void(0)">医院药事管理软件</a></li>
						<li><a href="javascript:void(0)">医院医保管理软件</a></li>
						<li><a href="javascript:void(0)"> 医疗大数据中心平台</a></li>
						<li><a href="javascript:void(0)">决策支持BI平台</a></li>
					</ul>
				</div>
			</header>
		)
	}
}