import React, { useState } from 'react';
import { Button, Layout, Menu } from 'antd';
import { PlusOutlined, UserOutlined } from '@ant-design/icons';
import Title from '../menu-title/Title';
import AddDealModal from '../add-deal-modal/AddDealModal';
import styles from './Home.module.scss';

const { Header, Content, Footer, Sider } = Layout;

function Home() {
    const [ showAddDealModal, setShowAddDealModal ] = useState(false);

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

                <Button
                    type="primary"
                    shape="round"
                    icon={(<PlusOutlined />)} 
                    size="large"
                    onClick={() => setShowAddDealModal(true)}
                >
                    添加交易
                </Button>

                <AddDealModal
                    visible={showAddDealModal}
                    onClose={() => setShowAddDealModal(false)}
                />

                <Menu theme="dark" mode="inline">
                    <Menu.Item key="1">
                        <UserOutlined />
                        <span>nav 1</span>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <UserOutlined />
                        <span>nav 2</span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <UserOutlined />
                        <span>nav 3</span>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <UserOutlined />
                        <span>nav 4</span>
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
