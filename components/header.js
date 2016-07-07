import {Component} from 'react';


export default class extends Component{
  render(){
    return (
      <header className={this.props.className}>
        <div className="header-left">
            <button><i className="fa fa-lg fa-list"></i></button>
        </div>
        <form className="header-right">
            <input placeholder="请输入需要搜索的关键词"/>
            <button type="submit">搜索</button>
        </form>
      </header>
    )
  }
}
