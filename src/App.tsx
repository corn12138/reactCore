import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from './pages/login/loginPage';
import MainPages from './pages/main/MainPages';
import HomePage from "./components/aboutMeCompontens";
import NotFoundPage from './pages/notFound/NotFoundPage'; // 引入404页面组件
import './App.css';
import  "antd/dist/reset.css";
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
  return (<Router>
    <Routes>
      <Route path='/homePage' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='main' element={<MainPages />} />
      <Route path='/' element={<Navigate replace to='/homePage' />} /> {/**这个决定 首屏加载 哪个页面 */}
      <Route path='*' element={<NotFoundPage />} /> {/* 用于捕获所有未匹配的路径 */}
    </Routes>
  </Router>)
}

export default App;
