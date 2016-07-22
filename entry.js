import React,{Component} from 'react';
import ReactDom from 'react-dom';

import {Router,Route,hashHistory,browserHistory} from 'react-router';
//导入样式
import './style/all.css';

import {createStore} from 'redux';

import {Provider} from 'react-redux';

import reducer from './reducer/index';

const appStore = createStore(reducer);

import Index from './components/index';//首页

import Page from './components/page';//内容详细页面

const ele = document.getElementById('content');

const routerSencen = (
		<Provider store={appStore}>
			<Router history={hashHistory}>
				<Route path="/" component={Index}/>
				<Route path="page">
					<Route path=":id" component={Page}/>
				</Route>
			</Router>
		</Provider>
	)
ReactDom.render(routerSencen,ele);


