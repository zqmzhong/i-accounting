import React, { useState } from 'react';
import { useToggle, useRequest } from 'ahooks';
import { Button, Layout, Menu } from 'antd';
import { PlusOutlined, UserOutlined } from '@ant-design/icons';
import Title from '../menu-title/Title';
import BillModal from '../bill-modal/BillModal';
import BillList from '../bill-list/BillList';
import styles from './Home.module.scss';
import BASE_URL from '../common/BaseUrl';

const { Header, Content, Footer, Sider } = Layout;

function Home() {
    const [ isShowBillModal, { toggle: showBillModal }] = useToggle(false);
    const [ billInfo, setBillInfo ] = useState({});

    const [ billList, setBillList ] = useState([]);

    const { loading, run: refreshList } = useRequest(() => ({
        url: BASE_URL + '/bills',
        method: 'get',
    }), {
        onSuccess: (result) => setBillList(result),
    });

    const onEdit = (item) => {
        console.log('item: ', item);
        setBillInfo(item);
        showBillModal(true);
    };

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
                    onClick={() => showBillModal(true)}
                >
                    添加交易
                </Button>

                <BillModal
                    visible={isShowBillModal}
                    billInfo={billInfo}
                    refreshList={refreshList}
                    onClose={() => showBillModal(false)}
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
                    <section className={styles['bill-list']}>
                        <BillList isListLoading={loading} billList={billList} refreshList={refreshList} onEdit={onEdit} />
                    </section>
                </Content>
                <Footer className={styles['footer']}>
                    i-accounting ©2020
                </Footer>
            </Layout>
        </Layout>
    );
}

export default Home;
