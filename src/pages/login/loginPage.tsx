// src/LoginPage.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { loginUser } from '../../api/login'
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // 添加一个状态来处理错误信息
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(''); // 清空之前的错误信息
    try {
      // 调用loginUser函数尝试登录
      // const response = await loginUser(username, password);
      navigate('/main'); // 登录成功，跳转到主页面
      // console.log(response); // 登录成功，处理响应数据，比如保存token到localStorage
      // 这里可以进行页面跳转或全局状态更新
      // history.push('/dashboard'); 如果你使用react-router可以这样跳转页面
    } catch (err: object|any) {
      // 处理登录失败情况
      if (err.response) {
        // 服务器响应了请求，但是返回的是错误状态码
        setError(err.response.data.message); // 假设错误信息在响应的data.message字段中
      } else {
        // 服务器没有响应或者其他错误
        setError('登录失败，请重试');
      }
      console.error('登录失败:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 border border-gray-300">
        {/* 使用form表单 包裹了button 然后在使用button的type为submit的属性 当点击的时候指向 form的onSubmit并触发 handleSubmit*/}
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <p className="text-red-500">{error}</p>} {/* 显示错误信息 */}

          <div>
            <label htmlFor="username" className="text-sm font-medium text-gray-700">
              Username
            </label>
            <div className="mt-1">
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
