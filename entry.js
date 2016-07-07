import React,{Component} from 'react';
import ReactDom from 'react-dom';

//导入样式
import './style/all.css';
import Index from './components/index'
const ele = document.getElementById('content');
ReactDom.render(<Index/>,ele);
