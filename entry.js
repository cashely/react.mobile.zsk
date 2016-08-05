import React,{Component} from 'react';
import ReactDom from 'react-dom';
import {Router,Route,hashHistory,browserHistory,useRouterHistory} from 'react-router';
import { createHashHistory } from 'history';
let history = useRouterHistory(createHashHistory)();
//导入样式

import './style/all.css';

import {createStore} from 'redux';

import {Provider} from 'react-redux';

import reducer from './reducer/index';

const appStore = createStore(reducer);

import Index from './components/index';//首页

import Page from './components/page';//内容详细页面


import './components/share';

import Hpms from './components/intro/hpms';
import Bi from './components/intro/bi';
import Hmms from './components/intro/hmms';
import Yjk from './components/intro/yjk';
import Gywm from './components/intro/gywm';
import Sjpt from './components/intro/sjpt';
import Yyd from './components/intro/yyd';
import Yyy from './components/intro/yyy';

const ele = document.getElementById('content');

const routerSencen = (
		<Provider store={appStore}>
			<Router history={history}>
				<Route path="/" component={Index}/>
				<Route path="page">
					<Route path=":id" component={Page}>
						<Route path=":share" component={Page}/>
					</Route>
				</Route>
				<Route path="intro">
					<Route path="hpms/:title" component={Hpms}/>
					<Route path="bi/:title" component={Bi}/>
					<Route path="hmms/:title" component={Hmms}/>
					<Route path="yjk/:title" component={Yjk}/>
					<Route path="gywm/:title" component={Gywm}/>
					<Route path="sjpt/:title" component={Sjpt}/>
					<Route path="yyd/:title" component={Yyd}/>
					<Route path="yyy/:title" component={Yyy}/>
				</Route>
			</Router>
		</Provider>
	)
ReactDom.render(routerSencen,ele);


