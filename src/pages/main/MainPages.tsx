import React, { useState } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    
    const onCollapse = (collapsed: boolean) => {
        setCollapsed(collapsed);
    };

    return (
        <Layout style={{ height: '100vh' }}>
            <Sider
                breakpoint="lg"
                collapsedWidth="80"
                collapsible
                collapsed={collapsed}
                onCollapse={onCollapse}
            >
                <div className="logo" />
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['4']}
                    items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
                        (Icon, index) => ({
                            key: String(index + 1),
                            icon: <Icon />,
                            label: `nav ${index + 1}`,
                        }),
                    )}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 24 }}>Header</Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div style={{ padding: 24, minHeight: 360 }}>Content</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );
};

export default App;
