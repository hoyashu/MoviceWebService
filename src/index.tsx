import 'antd/dist/antd.min.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

// eslint-disable-next-line import/extensions
import App from './containers/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
// 셋팅 블로그 : https://gingerkang.tistory.com/98
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
