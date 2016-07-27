import React,{Component} from 'react';

import {connect} from 'react-redux';

import Loading from './loading';

import TitleBar from './titleBar';

import PageMain from './PageMain';
class Page extends Component{
	constructor(props) {
	  super(props);
	}
	componentWillReceiveProps(nextProps){
		console.log(nextProps.location);
	}
	componentDidMount(){
		const URI = this.props.params.id;
		$.ajax({
			url:'http://www.immortalshealth.com/imkb/immoapp/showSmsFullApp',
			data:{
				id:this.props.params.id,
				imagePath:'http://www.immortalshealth.com/'
			},
			success:(res) => {
				this.props.dispatch({
					type:'LOADPAGE',
					content:res.data.sms,
					title:res.data.title
				});
				wx.ready(function() {
		            // 分享
		            var info = {
		                title: res.data.title,
		                link: 'http://www.immortalshealth.com/imkb_wechat/',
		                imgUrl: 'http://www.immortalshealth.com/pubshare/imkb-share-logo.png',
		                desc: res.data.sms[res.data.signShare].content
		            };
		            wx.onMenuShareTimeline({
		                title: info.title, // 分享标题
		                link: info.link, // 分享链接
		                imgUrl: info.imgUrl, // 分享图标
		                success: function() {
		                    alert('分享成功！');
		                }
		            });
		            wx.onMenuShareAppMessage({
		                title: info.title,
		                desc: info.desc, // 分享描述
		                link: info.link, // 分享链接
		                imgUrl: info.imgUrl, // 分享图标
		                type: '', // 分享类型,music、video或link，不填默认为link
		                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
		                success: function() {
		                    // 用户确认分享后执行的回调函数
		                    alert('分享成功！');
		                }
		            });
		        })
			}
		});



	}
	render(){
		return (
			<div className="content">
          		<TitleBar share={this.props.params.share} title={this.props.title} location={this.props.location} height={this.props.height} className="header" />
          		<PageMain height={this.props.height} content={this.props.content}/>
      		</div>	
		)
	}	
}

function select(state){
	return {
	    height:state.index.height,
	    content:state.page.content,
	    title:state.page.title
	  }
}


export default connect(select)(Page)
