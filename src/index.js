import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ContextApi from './Component/ContextApi';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<ContextApi><BrowserRouter><App /></BrowserRouter></ContextApi>);
