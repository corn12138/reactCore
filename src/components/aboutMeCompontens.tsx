import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { UserOutlined, PictureOutlined, ReadOutlined, MessageOutlined } from '@ant-design/icons';

const HomePage: React.FC = () => {
    return (
        <div className="container mx-auto px-6 py-8">
            {/* Ant Design 菜单 */}
            <Menu mode="horizontal" className="border-b pb-2">
                <Menu.Item key="works" icon={<UserOutlined />}>
                    <Link to="/works">WORKS</Link>
                </Menu.Item>
                <Menu.Item key="propfuulok" icon={<PictureOutlined />}>
                    <Link to="/propfuulok">PROPFUULOK</Link>
                </Menu.Item>
                <Menu.Item key="showe" icon={<ReadOutlined />}>
                    <Link to="/showe">SHOWE</Link>
                </Menu.Item>
                <Menu.Item key="gifts" icon={<MessageOutlined />}>
                    <Link to="/gifts">Gifts</Link>
                </Menu.Item>
            </Menu>

            <header className="mt-8 flex">
                <h1 className="text-6xl font-bold text-gray-900">About Me</h1>
                {/* <p className="mt-4 text-gray-600">  
                    </p> */}
                <div></div>
            </header>

            {/* Profile image placeholder */}
            <div className="mt-12 w-full h-64 bg-gray-200"> {/* Image will go here */}</div>

            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Icons and titles */}
                <div className="text-center">
                    <UserOutlined className="mx-auto mb-4 h-6 w-6" />
                    <h2 className="text-lg font-semibold">ABOUT ME</h2>
                    <p className="text-gray-600 mt-2">Portraying the essence of who you are.</p>
                </div>
                {/* Repeat for other items, replacing the icon and text as needed */}
            </div>

            {/* Project images placeholders */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                    <div className="mx-auto mb-4 w-64 h-40 bg-gray-200"> {/* Image will go here */}</div>
                    <h3 className="text-lg font-semibold">Project 1</h3>
                    <p className="text-gray-600 mt-2">A modern approach to web design.</p>
                </div>
                {/* Repeat for other projects */}
            </div>
        </div>
    );
};

export default HomePage;
