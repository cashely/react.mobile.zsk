import  React,{Component} from 'react';

import Header from '../titleBar';

import Footer from './footer';

export default class Gywm extends Component{
	render(){
		return(
			<div className="gywm">
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
			<div style={{paddingTop:'4.2rem'}}>
				<div className="main">
					<div className="content-title">
						关于我们
						<div className="content-text">ABOUT ＵＳ</div>
					</div>
					<img src="images/logo-gywm-app.jpg" alt="" className="mn-logo"/>
					<p className="gywm-p">
						广东医睦科技有限公司（简称医睦科技）位于广州市<br/>
						珠江新城核心CBD商务区，是一家聚焦医疗领域信息化应用技术和医药<br/>
						信息咨询服务的提供商。
					</p>
					<p className="gywm-p">
						医睦科技”历经数年积累，目前已经成功研发区域化药事监管<br/>
						平台、医院药事管理软件、医院医保管理软件，为众多医药企业开发移动<br/>
						APP及提供专业的医药市场行业咨询服务。
					</p>
					<p className="gywm-p">
						我们的使命：不断为医疗机构、医药行业各企业提供行业领先的<br/>
						信息化产品和高品质服务，帮助提高医疗机构的效益及效率，最终实现<br/>
						社会价值和企业价值的体现。
					</p>
					<div className="gywm-img">
						<img src="images/gs01-app.jpg" alt="" className="mr"/>
						<img src="images/gs02-app.jpg" alt=""/>
					</div>
				</div>
				<ul className="page-icon">
					<li className="lione"></li>
					<li className="litwo"></li>
					<li className="lithree"><img src="images/smionic.png" alt=""/></li>
				</ul>
				<div className="content-title">
					合作模式
					<div className="content-text">COOPERATION MODE</div>
				</div>
				<img src="images/fc-gywm.jpg" className="gywm-mianbot"/>
			</div>
		)
	}
}