import React, { useEffect, useState } from 'react';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    // UploadOutlined,
    // UserOutlined,
    // VideoCameraOutlined,
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    PieChartOutlined,
    LogoutOutlined
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import type { MenuProps } from 'antd';
import { Layout, Menu, Button, theme } from 'antd';
import { logoutUser } from '../../api/logout'
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
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('Option 3', '3', <ContainerOutlined />),

    getItem('Navigation One', 'sub1', <MailOutlined />, [
        getItem('Option 5', '5'),
        getItem('Option 6', '6'),
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
    ]),

    getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
        getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    ]),
];

// 获取 侧边栏数据
const useMenu = () => {
    const [menuItems, setMenuItems] = useState([]);
    useEffect(() => {
        const fetchMenuItems = async () => {
            try {
                const res = await menuItem()
                setMenuItems(res.items)
                console.log(res,'react 请求')
            } catch (error) {
                console.error('Error fetching menu items:', error);
            }
        };
        fetchMenuItems();
    },[]);
    return menuItems
}
const App: React.FC = () => {
    const navigate = useNavigate()
    const handleOnclick = async () => {
        try {
            const res = await logoutUser();
            console.log('退出登录的', res)
            navigate('/login')
        } catch (error) {

        }
    }
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const itemsMenu = useMenu()
    console.log(itemsMenu, '侧边栏的数据结构')
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
                    Content
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;

