// src/LoginPage.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// import { useAuthState, useAuthDispatch } from '../../context/AuthContext'; //context
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useSelector, useDispatch } from 'react-redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { RootState, AppDispatch } from '../../store/store';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { login, logout } from '../../features/user/userSlice';
import { loginUser } from '../../api/login'
import { message } from 'antd';


const LoginPage = () => {
  const [messageApi] = message.useMessage();

  const success = (msg:string) => {
    messageApi.open({
      type: 'success',
      content: msg,
    });
  };
  // const authState = useAuthState();//context
  // const dispatch = useAuthDispatch();//context
  // const user = useSelector((state: RootState) => state.user.value);

  const dispatch = useDispatch<AppDispatch>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // 添加一个状态来处理错误信息
  const navigate = useNavigate();
  const [showError, setShowError] = useState(false); // 新状态来控制是否显示错误消息
  useEffect(() => {
    if (showError) {
      message.error(error); // 显示错误消息
      setShowError(false); // 重置显示错误的状态
    }
  }, [showError, error]); // 依赖于 showError 和 error
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); //form 标签的默认提交事件阻止
    setError(''); // 清空之前的错误信息
    try {
      // 调用loginUser函数尝试登录
      const response = await loginUser(username, password);
      if (response.success) {
        success(response.msg); //登录成功后的提示。
        navigate('/main'); // 登录成功，跳转到MainPages页面去
        // dispatch({ type: 'LOGIN', payload: response.user }); //context
        dispatch(login(response.user)); //redux存 登录的信息
        localStorage.setItem("UserToken",response.token)
      } else {
        setError(response.message || '登录失败'); // 设置错误消息
        setShowError(true); // 触发显示错误消息
      }
      console.log(response, '登录后的响应'); // 登录成功，处理响应数据，比如保存token到localStorage

      // 这里可以进行页面跳转或全局状态更新
      // history.push('/dashboard'); 如果你使用react-router可以这样跳转页面
    } catch (err: object | any) {
      // 处理登录失败情况
      if (err.response) {
        // 服务器响应了请求，但是返回的是错误状态码
        setError(err.response.data.message); // 假设错误信息在响应的data.message字段中
      } else {
        // 服务器没有响应或者其他错误
        setError('登录失败，请重试');
      }
      console.error('登录失败:', err);
      setError(err.response?.data.message || '登录失败，请重试');
      setShowError(true); // 触发显示错误消息
    }
  };
  return (
    <main className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <section className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <article className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <header>
              <h1 className="text-2xl font-semibold">Sign in to your account</h1>
              {error && <p className="text-red-500">{error}</p>}
            </header>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-semibold text-gray-700">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  placeholder="Your Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0"
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Sign in
                </button>
              </div>
            </form>
            <footer className="flex justify-between items-center mt-6">
              <Link to="/forgot-password" className="text-blue-500 hover:text-blue-700">
                Forgot password?
              </Link>
              <Link to="/create-account" className="text-blue-500 hover:text-blue-700">
                Create an account
              </Link>
            </footer>
          </div>
        </article>
      </section>
    </main>
  );

};
export default LoginPage;
