import React from 'react';
import ObjectAssign from 'object-assign';
import {combineReducers} from 'redux';

var defaultState = {
	isLoading : false,
	height:'4.2rem'
}

function index(state = defaultState ,action){
	switch(action.type){
		case 'LOADING' : 
			return ObjectAssign(
								{},state,{isLoading:true}
							);
		case 'UNLOAD' :
			return ObjectAssign(
								{},state,{isLoading:false}
							);
		default : return state;
	}
}

function header(state = {showNav:false,queryStr:''},action){
	switch(action.type){
		case 'SHOW' :
			return ObjectAssign({},state,{showNav:true});
		case 'UNSHOW' :
			return ObjectAssign({},state,{showNav:false});
		case 'SEARCH' :
			return ObjectAssign({},state,{queryStr:action.queryStr});
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
			return ObjectAssign({},state,{
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
			return ObjectAssign({},state,{data:[]});
		case 'ADDDATA' :
			return ObjectAssign({},state,{data:state.data.concat(action.data)});
		case 'SHOWLOADING' :
			return ObjectAssign({},state,{isLoading:true});
		case 'UNSHOWLOADING' :
			return ObjectAssign({},state,{isLoading:false});
		case 'PAGE' :
			return ObjectAssign({},state,{pageNo:action.pageNo});
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