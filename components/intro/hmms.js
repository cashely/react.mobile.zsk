import  React,{Component} from 'react';

import Header from '../titleBar';

import Footer from './footer';

export default class Hmms extends Component{
	render(){
		return(
			<div className="ybgl">
				<Header title={this.props.params.title}height='4.2rem'/>
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
				<div className="main-ybgl">
					<div className="video" style={{overflow: "hidden"}}>
						<video id="example_video_2" className="video-js vjs-default-skin" controls preload="none"
							poster="images/ybgl-video.png"
							data-setup="{}">
							<source src="../oceans-clip.mp4" type='video/mp4'/>
						</video>
					</div>
					<div className="main-logo">医院医保管理软件</div>
					<div className="app-hpms">HMMS</div>
					<p className="yb-main-text">
						医院医保管理软件是基于<br/>
						医保三大目录、结算办法和自主研发的规则<br/>
						引擎构建的智能化管理平台软件帮助医院优化医保管理流程规<br/>
						范医保诊疗行为提高医保基金使用效率，并可及时应对医保政策<br/>
						未来变化
					</p>
					<a href="javascript:void(0)" className="sysm">
						<i className="icon-sysm"></i>
						产品手册
					</a>
					<div className="content-title mgt">
						价值对比
						<div className="content-text">VALUE CONTRAST</div>
					</div>
					<div className="yb-merit">
						<ul className="title-merit">
							<li className="title-lf">上线前</li>
							<li className="title-rt">上线后</li>
						</ul>
						<div className="merit-conter">
							<ul className="merit-left mt2">
								<li>由人工分析控费目标</li>
								<li>执行艰难</li>
								<li>监管不到位</li>
								<li> 事后追责难</li>
							</ul>
							<ul className="merit-center">
								<li>
									<span className="linetop"></span>
									<a href="javascript:void(0)">费用管理</a>
									<span className="line"></span>
								</li>
							</ul>
							<ul className="merit-right mt2">
								<li>系统自动生成目标</li>
								<li>落实到具体科室、人员</li>
								<li>实时监管</li>
								<li>追责明确</li>
							</ul>
						</div>
						<div className="merit-conter">
							<ul className="merit-left mt15">
								<li> 规则不明确、监管缺失</li>
								<li> 事后追责手工匹配到</li>
								<li>责任科室、责任医生</li>
							</ul>
							<ul className="merit-center">
								<li>
									<a href="javascript:void(0)" className="green">诊疗管理</a>
									<span className="line"></span>
								</li>
							</ul>
							<ul className="merit-right mt15">
								<li>事前规划医保端规则、个性化规则</li>
								<li>HIS界面实时提醒</li>
								<li>事后追责自动明细到责任人</li>
							</ul>
						</div>
						<div className="merit-conter">
							<ul className="merit-left mt15">
								<li>不符合多种结算病人</li>
								<li>不能第一时间发现</li>
								<li> 经验性选择结算方式</li>
							</ul>
							<ul className="merit-center">
								<li>
									<a href="javascript:void(0)" className="yellow">结算管理</a>
									<span className="line"></span>
								</li>
							</ul>
							<ul className="merit-right mt15">
								<li>符合多种结算病人</li>
								<li>第一时间提醒</li>
								<li>择优推荐</li>
							</ul>
						</div>
						<div className="merit-conter">
							<ul className="merit-left mt15">
								<li>由信息科、财务科支持 <br/>
									难具体到医生维度
								</li>
							</ul>
							<ul className="merit-center">
								<li>
									<a href="javascript:void(0)" className="orange">绩效管理</a>
									<span className="line"></span>
								</li>
							</ul>
							<ul className="merit-right mt15">
								<li>各维度数据由系统自动 <br/>
									生成
								</li>
							</ul>
						</div>
						<div className="merit-conter">
							<ul className="merit-left mt15">
								<li>出入院处提醒</li>
								<li>医生手工填写表格</li>
								<li>通知医保科</li>
							</ul>
							<ul className="merit-center">
								<li>
									<a href="javascript:void(0)" className="purple">流程优化</a>
									<span className="line"></span>
								</li>
							</ul>
							<ul className="merit-right mt15">
								<li>系统自动提醒</li>
								<li>HIS界面弹出表格</li>
								<li>直接填写上传</li>
							</ul>
						</div>
						<div className="merit-conter">
							<ul className="merit-left mt15">
								<li>传阅纸质文档</li>
								<li>OA文档杂乱</li>
							</ul>
							<ul className="merit-center">
								<li>
									<a href="javascript:void(0)" className="pink">通知公告</a>
									<span className="line"></span>
								</li>
							</ul>
							<ul className="merit-right mt25">
								<li>专属医保文档发布、查看</li>
							</ul>
						</div>
						<div className="merit-conter">
							<ul className="merit-left mt15">
								<li>设置规则需要 <br/>
									技术人员写代码
								</li>
							</ul>
							<ul className="merit-center">
								<li>
									<a href="javascript:void(0)" className="c">规则管理</a>
									<span className="line"></span>
								</li>
							</ul>
							<ul className="merit-right mt25">
								<li>业务人员可自定义规则</li>
							</ul>
						</div>
						<div className="merit-conter last">
							<ul className="merit-left mt15">
								<li>无系统医保 <br/>
									知识库
								</li>
							</ul>
							<ul className="merit-center">
								<li>
									<span className="line"></span>
									<a href="javascript:void(0)" className="zsk">知识库</a>
									<span className="linebot"></span>
								</li>
							</ul>
							<ul className="merit-right mt15">
								<li>
									可查询医保政策、临床 <br/>
									路径、基本医疗保险诊疗 <br/>
									常规、药品说明书等
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="yb-action">
					<div className="center">
						<div className="content-title">
							功能介绍
							<div className="content-text"> FUNCTION INTRODUCTION</div>
						</div>
						<div className="action-conter">
							<img src="images/action-yb05-app.jpg" alt="" className="yb-action-img"/>
						</div>
						<div className="action-btm">
							<dl>
								<dt>事前</dt>
								<dd>
								费用控制指标：科室总额、次均定额<br/>
								病种分值指标：医院病种分值、实际病例分值等
								</dd>
							</dl>
							<dl className="dl-mg">
								<dt>事中</dt>
								<dd>
								实时预结算<br/>
								报销费用、自负费用
								</dd>
							</dl>
							<dl className="dl-btm">
								<dt>事后</dt>
								<dd className="tar">
								事后报表：全院纬度、科室纬度 <br/>
								医生纬度、病人纬度
								</dd>
							</dl>
						</div>
					</div>
				</div>
				<ul className="page-icon">
					<li className="lione"></li>
					<li className="litwo"></li>
					<li className="lithree"><img src="images/smionic.png" alt=""/></li>
				</ul>
				<div className="yb-case">
					<div className="center">
						<div className="content-title">
							典型案例
							<div className="content-text">APPLICATION CASE</div>
						</div>
						<div className="case-box">
							<img src="images/yb-case-app.jpg" alt="" className="app-left"/>
							<img src="images/yb-case-app-right.jpg" alt="" className="app-right"/>
						</div>
						<ul className="app-ul">
							<li>
								<i></i>
								<p>医院医保管理软件不仅仅能够满足我院现在的需求而且可以适应 <br/>
								未来医院管理的要求 </p>
							</li>
							<li><i></i>
								<p>智能化管理平台</p></li>
								<li><i></i>
									<p>提高医保基金使用效率</p></li>
									<li><i></i>
										<p>有效降低医保扣费风险</p></li>
										<li><i></i>
											<p>优化医院医保管理流程</p></li>
										</ul>
									</div>
								</div>
							</div>
		)
	}
}