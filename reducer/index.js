import {combineReducers} from 'redux';

var defaultState = {
	isLoading : false,
	height:'3rem'
}

function index(state = defaultState ,action){
	switch(action.type){
		case 'LOADING' : 
			return Object.assign(
								{},state,{isLoading:true}
							);
		case 'UNLOAD' :
			return Object.assign(
								{},state,{isLoading:false}
							);
		default : return state;
	}
}

function header(state = {showNav:false,queryStr:''},action){
	switch(action.type){
		case 'SHOW' :
			return Object.assign({},state,{showNav:true});
		case 'UNSHOW' :
			return Object.assign({},state,{showNav:false});
		case 'SEARCH' :
			return Object.assign({},state,{queryStr:action.queryStr});
		default : return state;
	}
}


let defaultPageState = {
	title:'正在获取中...',
	content:[]
}

function page(state = defaultPageState,action){
	switch(action.type){
		case 'LOADPAGE' :
			return Object.assign({},state,{
				content:action.content,
				title:action.title
			});
		default : return state;
	}
}


var defaultMain = {
	data : [],
	pageNo : 1,
	isLoading : false
}

function main(state = defaultMain,action){
	switch(action.type){
		case 'CLEARDATA' :
			return Object.assign({},state,{data:[]});
		case 'ADDDATA' :
			return Object.assign({},state,{data:state.data.concat(action.data)});
		case 'SHOWLOADING' :
			return Object.assign({},state,{isLoading:true});
		case 'UNSHOWLOADING' :
			return Object.assign({},state,{isLoading:false});
		case 'PAGE' :
			return Object.assign({},state,{pageNo:action.pageNo});
		default : return state;
	}
}

const zskApp = combineReducers({
	index,
	header,
	main,
	page
})

export default zskApp;