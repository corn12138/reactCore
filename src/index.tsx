import React from 'react';
// import { AuthProvider } from './context/AuthContext'; //context
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { store } from './store/store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './tailwind/tailwind.css' //引入tailwindcss
import 'bootstrap/dist/css/bootstrap.min.css'; //bootstrap
// import  "./styles/main.scss"; //引入一些个全局的样式(scss)
// import 'antd/dist/antd.css'; // 或者 'antd/dist/antd.less'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  //     <React.StrictMode>  //暂时 注释一下 以避免 useEffect 两次触发
  // {/* <AuthProvider>
  //   <App />
  // </AuthProvider> */}
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
