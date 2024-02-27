import React, { useState } from 'react';
import { Layout, Menu, Card, Row, Col } from 'antd';
import { HomeOutlined, UserOutlined, PictureOutlined, BookOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { useNavigate } from "react-router-dom";
// import '../styles/HomePage.css'; // 保留你自己的样式l;

const { Header, Content, Footer } = Layout;

const layoutStyle = {
  // borderRadius: 8,
  overflow: 'hidden',
  width: '100%',
  maxWidth: '100%',
  minHeight: '100vh'  //保证我的页面 在 大小不同的可视窗口都全屏。
};
// 为了确保 Content 部分的内容居中，我们使用 Flexbox
const contentStyle: React.CSSProperties = {
  display: 'flex',        // 启用 flex 布局
  justifyContent: 'center', // 水平居中
  alignItems: 'center',    // 垂直居中
  height: '100vh',         // Content 高度占满视窗的高度
};
const innerContentStyle: React.CSSProperties = {
  width: '100%',          // 内容宽度
  maxWidth: '1200px',     // 内容的最大宽度
  // 添加额外的样式来调整内部内容的布局
};
// 菜单list
const items: MenuProps['items'] = [
  { label: '主页', key: '1', icon: <HomeOutlined /> },
  { label: '关于我', key: '2', icon: <UserOutlined /> },
  { label: '作品集', key: '3', icon: <PictureOutlined /> },
  { label: '博客', key: '4', icon: <BookOutlined /> },
]

// 做是否登录的校验
const isUserLoggedIn = (): boolean => {
  const token = localStorage.getItem("UserToken");

  return Boolean(token);
}
const HomePage: React.FC = () => {
  // 这类 hooks 写里边 
  const [curren] = useState('1');
  const navigate = useNavigate();

  // 点击不同的卡片 进入不同的页面
  const handleCardClick = (title: string) => {
    console.log(title, '点击触发')
    console.log(isUserLoggedIn(), 'isUserLoggedIn()')
    if (!isUserLoggedIn()) {

      navigate('/login');
      return;
    }
    switch (title) {
      case '个人介绍':

        break;
      case '我的技能':

        break;
      case '作品集预览':

        break;
      case '最新博客':

        break;

      default:
        break;
    }
  };
  // 切换头部的tab
  const onClick: MenuProps['onClick'] = (e) => {
    console.log(e, 'click')
    switch (e.key) {
      case '3':
        // 作品集
        navigate('/main');
        break;
    
      default:
        break;
    }
  };

  return (
    <Layout className="layout" style={layoutStyle}>
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[curren]} items={items} onClick={onClick}>
          {/* <Menu.Item key="1" icon={<HomeOutlined />}>主页</Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>关于我</Menu.Item>
          <Menu.Item key="3" icon={<PictureOutlined />}>作品集</Menu.Item>
          <Menu.Item key="4" icon={<BookOutlined />}>博客</Menu.Item> */}
        </Menu>
      </Header>

      <Content style={contentStyle}>
        <div style={innerContentStyle}>
          <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]}>
            <Col className="gutter-row cursor-pointer" span={12} onClick={() => handleCardClick('个人介绍')}>
              <Card title="个人介绍" bordered={false}>
                <p>这里是对我的个人介绍、我的职业和兴趣爱好的简略描述。</p>
              </Card>
            </Col>
            <Col className="gutter-row cursor-pointer" span={12} onClick={() => handleCardClick('我的技能')}>
              <Card title="我的技能" bordered={false}>
                <p>简短介绍我所拥有的专业技能和个人特点。</p>
              </Card>
            </Col>
          </Row>
          <Row gutter={[16, { xs: 8, sm: 16, md: 24, lg: 32 }]} className='mt-6 mb-6'>
            <Col className="gutter-row cursor-pointer" span={12}>
              <Card title="作品集预览" bordered={false} onClick={() => handleCardClick('作品集预览')}>
                <p>展示一些精选作品的图片和简短描述。</p>
              </Card>
            </Col>
            <Col className="gutter-row cursor-pointer" span={12} onClick={() => handleCardClick('最新博客')}>
              <Card title="最新博客" bordered={false}>
                <p>展示最新博客文章的标题和简短摘要。</p>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default HomePage;
