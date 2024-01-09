// 在src/pages/notFound/NotFoundPage.tsx
import React from 'react';
import { Link } from "react-router-dom";
const NotFoundPage: React.FC = () => {
  return (
    <main className="flex items-center justify-center h-screen bg-gray-100"><div className="max-w-md w-full space-y-8"><div><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mx-auto h-12 w-auto"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"></path></svg><h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
      404 - Page Not Found
    </h2><p className="mt-2 text-center text-sm text-gray-600">
        The page you are looking for does not exist. It might have been moved or deleted.
      </p></div><div><Link to="/login"><button className="ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
        返回登录页面
      </button></Link ></div></div></main>
  )
}

export default NotFoundPage;
