import React from 'react';
import { Button, Layout, Menu } from 'antd';
import { Icon } from '@ant-design/compatible';
import Title from '../menu-title/Title'
import styles from './Home.module.scss';

const { Header, Content, Footer, Sider } = Layout;

function Home() {
    const icon = (<Icon type="plus" />);

    return (
        <Layout className={styles['home-page']}>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <Title></Title>
                <Button type="primary" shape="round" icon={icon} size="large">
                    添加交易
                </Button>
                <Menu theme="dark" mode="inline">
                    <Menu.Item key="1">
                        <Icon type="user" />
                        <span className="nav-text">nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="video-camera" />
                        <span className="nav-text">nav 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="upload" />
                        <span className="nav-text">nav 3</span>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Icon type="user" />
                        <span className="nav-text">nav 4</span>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header className={styles['header']} />
                <Content className={styles['content']}>
                    <div className={styles['content-text']}>
                        Hello, i-accounting !
                    </div>
                </Content>
                <Footer className={styles['footer']}>
                    i-accounting ©2020
                </Footer>
            </Layout>
        </Layout>
    );
}

export default Home;
