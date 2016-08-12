import React,{Component} from 'react';

import {connect} from 'react-redux';

var InfiniteScroll = require('react-infinite-scroll')(React);

import Loading from './loading';

import {Link} from 'react-router';


class Main extends Component{
  render(){
    return (
      <div>
          <Mainblock dispatch = {this.props.dispatch} queryStr={this.props.queryStr} data={this.props.data} pageNo={this.props.pageNo} isLoading={this.props.isLoading} top={this.props.top} />
      </div>
    )
  }
}
class Mainblock extends Component{
  constructor(props){
    super(props);
    this.handleLoad=this.handleLoad.bind(this);
    this.scrollHander = this.scrollHander.bind(this);
  }

  scrollHander(){
    var desUnder = 0;
    desUnder = $(this.refs.main).outerHeight()-$(window).scrollTop()-$(window).height();
    if(desUnder <= 0 && this.props.isLoading == false){
      this.handleLoad();
    }
  }

  componentDidMount(){
    this.handleLoad();
    
    window.addEventListener('scroll',this.scrollHander,false)
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.scrollHander,false)
  }
  handleLoad(){
    const _self = this;
    this.props.dispatch({
      type:'SHOWLOADING'
    });
    $.ajax({
      url:'http://www.immortalshealth.com/imkb/immoapp/searchApp',
      data:{
        pageNo: this.props.pageNo,
        pageSize: 20,
        queryStr:this.props.queryStr
      },
      success:function(res){
        _self.props.dispatch({
          type:'PAGE',
          pageNo:_self.props.pageNo + 1
        })
        _self.props.dispatch({
          type:'ADDDATA',
          data:res.rows
        })
        setTimeout(()=>{
          _self.props.dispatch({
            type:'UNSHOWLOADING'
          });
        },0);
      },
      error:function(code){
        alert(code)
      }
    })
  }
  render(){
    console.log(this.props.data);
    var results = this.props.data.map(function(e,s){
          return (
            <Link to={`page/${e.id}`}  key={e.id+s}>
              <dl className="dl-list">
                <dt>
                  <div className="dl-list-icon">说明书</div>
                  <span dangerouslySetInnerHTML={{__html:e.genericName}}></span>
                </dt>
                <dd>
                  <div className="dl-sublist">{e.spec}&nbsp;{e.manufacturerShort || e.fileName}<span>{e.releaseDate|| e.smsDate}</span> </div>
                </dd>
              </dl>
            </Link>
          );
    });
    const _height = $(window).height();
    console.log(_height);
    return (
        <div className="main-block" ref="main" style={{paddingTop:this.props.top}}>
          <div className="main-body">
              {this.props.isLoading ? <Loading/> : null}
              {results}
          </div>
        </div>
    )
  }
}

function select(state){
  return{
    data:state.main.data,
    pageNo:state.main.pageNo,
    isLoading:state.main.isLoading,
    queryStr:state.header.queryStr
  }
}

export default connect(select)(Main)
