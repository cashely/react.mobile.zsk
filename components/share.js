$.ajax({
  url: 'http://www.immortalshealth.com/imkb/immoapp/getJsSdkInfo',
  data: {
    strBackUrl: encodeURI(encodeURI(location.href))
  },
  success:function(res){
    wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: 'wxf471476d87bbf6c6', // 必填，公众号的唯一标识
        timestamp: res.datas.timestamp, // 必填，生成签名的时间戳
        nonceStr: res.datas.nonceStr, // 必填，生成签名的随机串
        signature: res.datas.signature,// 必填，签名，见附录1
        jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
    wx.ready(function() {
        // 分享
        var info = {
            title: '分享医药知识 专业专注共建',
            link: 'http://www.immortalshealth.com/imkb_wechat/',
            imgUrl: 'http://www.immortalshealth.com/pubshare/imkb-share-logo.png',
            desc: '常春树旨在为临床医生、药师、护士及医疗人员提供便捷的药物信息查询工具，并根据临床医生实际工作流程进行优化设计,帮助提高医疗机构的效益及效率，最终实现社会价值和企业价值的体现'
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
  },
  error:function(code){
    alert(code);
  }
});