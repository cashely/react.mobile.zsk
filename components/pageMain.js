import React,{Component} from 'react';

class PageMain extends Component{
	constructor(props) {
	  super(props);
	}
	render(){
		var mainList = this.props.content.map(function (ele){
					return (
						<div key={ele.title}>
							<h2 style={{fontSize:'1.2rem'}}>{ele.title}</h2>
							<p style={{fontSize:'1.2rem'}} dangerouslySetInnerHTML={{__html:ele.content}}></p>
						</div>
					)
				});
		return(
			<div style={{paddingTop:this.props.height,paddingLeft:'1rem',paddingRight:'1rem'}}>
				{mainList}
			</div>
		)
	}
}

export default PageMain;