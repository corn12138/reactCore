import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    // UploadOutlined,
    // UserOutlined,
    VideoCameraOutlined,
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    PieChartOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import { useNavigate,Outlet } from 'react-router-dom';  //Outlet 是一个 占位符 和vue 的 <router-view /> 一样的
import type { MenuProps } from 'antd';
import { Layout, Menu, Button, theme } from 'antd';
import { logoutUser } from '../../api/logout'
import { logout } from "../../features/user/userSlice";
import { menuItem } from "../../api/menu";


const { Header, Sider, Content } = Layout;
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('我的首页', '1', <PieChartOutlined />),
    getItem('返回主页', '2', <DesktopOutlined />),
    getItem('图表页', '3', <ContainerOutlined />),
    getItem('scss样式页', '4', <VideoCameraOutlined />, [
        getItem('background基础', '13'),
        getItem('background进阶', '14'),
        getItem('mask巧用遮罩', '15'),
        getItem('toDoList', '16'),
    ]),

    getItem('CKeditor', 'sub1', <MailOutlined />, [
        getItem('Ckeditor easy', '5'),
        getItem('气球式ckeditor 编辑器', '6'),
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
    ]),

    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    ]),
];
// 点击跳转的映射 (没有 / 的 就是相对路径 是此页面的子路由)
const hashList: { [key: string]: string } = {
    "1": '/homePage',
    "2": '/homePage',
    "3": 'dashboard', //echarts 图表页 是main的子路由 所以使用相对路径
    // "4":'/demoScss',
    "5": 'ckeditorEasy',
    "6": 'ckeditorBalloon',
    "7": '/',
    "8": '/',
    "9": '/',
    "10": '/',
    "11": '/',
    "12": '/',
    "13": 'demoScss',
    "14": 'advancedScss',
    "15": '/',
    "16": 'ToComponents'
};

// 获取 侧边栏数据
const useMenu = () => {
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const res = await menuItem()
                setMenuItems(res.items)
                console.log(res, 'react 请求')
            } catch (error) {
                console.error('Error fetching menu items:', error);
            }
        };
        fetchMenuItems();
    }, []);
    return menuItems
}
const MainPages: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // 退出登录
    const handleOnclick = async () => {
        try {
            const res = await logoutUser();
            console.log('退出登录的', res)
            // 清除 local storage 或 session storage
            if (res.successed) {
                localStorage.clear();
                sessionStorage.clear();
                // redux 重置
                dispatch(logout());
                navigate('/login');
            } else {

            }
        } catch (error) {
            console.log(error, '退出登录错误')
            throw error;
        }
    }
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const itemsMenu = useMenu()
    console.log(itemsMenu, '侧边栏的数据结构')
    // 
    const menuClick: MenuProps['onClick'] = (e) => {
        console.log(e, '菜单的点击事件')

    }
    const menuonSelect = (e: any) => {
        // console.log(e, 'menuonSelect')
        let targetPage = '/';
        targetPage = hashList[e.key as string]
        navigate(targetPage);
        console.log(targetPage, 'sssssssssss')
    }
    return (
        <Layout style={{ minHeight: '100vh' }}>
            {/* 这是左边的菜单栏 */}
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="mt-12" />
                {/* <svg className='stroke-white'></svg> */}
                {/* </div> */}
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={collapsed}
                    items={items}
                    onClick={menuClick}
                    onSelect={menuonSelect}
                />
            </Sider>
            {/* 这是右边的头部的两个按钮 */}
            <Layout>
                <Header className='flex justify-between items-center p-0 bg-white'>
                    <Button
                        type="text"
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        onClick={() => setCollapsed(!collapsed)}
                        className='text-base w-16 h-16'
                    />
                    <Button
                        type="text"
                        icon={<LogoutOutlined />}
                        className='text-base w-16 h-16'
                        onClick={handleOnclick}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet /> {/* 这里会渲染匹配的子路由组件 */}
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainPages;

