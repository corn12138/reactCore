import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './pages/login/loginPage';
import MainPages from './pages/main/MainPages';
import HomePage from "./components/aboutMeCompontens";
import ToComponents from "./components/tocomponents";
import Blog from "./pages/blog/blogPage";
import NotFoundPage from './pages/notFound/NotFoundPage'; // 引入404页面组件
import Dashboard from './pages/websocket//Dashboard'
import DemoScss from './pages/demoSCSS/backroung';
import AdvancedScss from './pages/demoSCSS/bgcjj/backgroundAdvanced'
// ckeditor 的 模块
import CkEditor from "./pages/ckeditor/ckeditor";
import CkeditorBalloon from "./pages/ckeditor/ckeditorBalloon";
import './App.css';
import "antd/dist/reset.css";
// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <LoginPage></LoginPage>
//     </div>
//   );
// }
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Navigate replace to='/homePage' />} /> {/* 首屏加载对应的 */}
        <Route path='/homePage' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/blog' element={<Blog />} />
        {/* main 是 LayOut 下的 子路由 */}
        <Route path='/main' element={<MainPages />}>
          <Route path='dashboard' element={<Dashboard />} /> {/* 在main下的子路由不要使用 '/xx'，要使用这样的相对路径  */}
          <Route path='ToComponents' element={<ToComponents />} /> {/* todolist */}
          <Route path='demoScss' element={<DemoScss />} />
          <Route path='advancedScss' element={<AdvancedScss />} />
          {/* ckeditor */}
          <Route path='ckeditorEasy' element={<CkEditor />} />
          {/* ckeditor的气球式编辑器 */}
          <Route path='ckeditorBalloon' element={<CkeditorBalloon />} />
        </Route>
        {/* 这是 notfound 页*/}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
