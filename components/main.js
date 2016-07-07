import React,{Component} from 'react';

var InfiniteScroll = require('react-infinite-scroll')(React);
export default class Mian extends Component{
  render(){
    return (
      <div className="main">
          <Mainblock />
      </div>
    )
  }
}


class Mainblock extends Component{
  constructor(props){
    super(props);
    this.state={
      data:[],
      page:1,
      isLoading:false
    }
    this.handleLoad=this.handleLoad.bind(this);

  }
  componentWillMount(){
    this.handleLoad();
    var desUnder = 0;
    $(window).on('scroll',() => {
      desUnder = $('.main').outerHeight()-$(window).scrollTop()-$(window).height();
      if(desUnder <= 0){
        this.setState({
          isLoading : true
        });
        setTimeout(()=>{
          this.handleLoad();
        },1000)
      }
    })
  }
  handleLoad(){
    const _self = this;
    $.ajax({
      url:'../json/data.json',
      success:function(res){
        _self.setState({
          data:_self.state.data.concat(res.root),
          page:_self.state.page+1,
          isLoading:false
        })
      }
    })
  }
  render(){
    var results = this.state.data.map(function(e,s){
          return (<dl key={e.type+s}><dt>{e.type}</dt><dd>{e.title}</dd></dl>);
    });
    const _height = $(window).height();
    console.log(_height);
    return (
        <div className="main-block" ref="main">
          <dl className="main-header">
            <dt>分类</dt>
            <dd>标题</dd>
          </dl>

          <div className="main-body">
              {results}
              {this.state.isLoading ? <div>loading...</div> : null}
          </div>


        </div>
    )
  }
}
