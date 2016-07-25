import React,{Component} from 'react';

class PageMain extends Component{
	constructor(props) {
	  super(props);
	}
	render(){
		var mainList = this.props.content.map(function (ele){
					return (
						<div key={ele.title}>
							<h2 style={{fontSize:'1.68rem',marginTop:'2rem'}}>{ele.title}</h2>
							<p style={{fontSize:'1.68rem'}} dangerouslySetInnerHTML={{__html:ele.content}}></p>
						</div>
					)
				});
		return(
			<div style={{textAlign:'left',paddingTop:this.props.height,lineHeight:2,paddingLeft:'1.4rem',paddingRight:'1.4rem'}}>
				{mainList}
			</div>
		)
	}
}

export default PageMain;