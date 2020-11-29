import React, { useState } from 'react';
import { useToggle, useRequest } from 'ahooks';
import { Layout } from 'antd';
import styled from 'styled-components';
import MainMenu from '../components/MainMenu';
import BillModal from '../bill-modal/BillModal';
import BillList from '../bill-list/BillList';
import BASE_URL from '../common/BaseUrl';

const { Header, Content, Footer, Sider } = Layout;

const Wrapper = styled(Layout)`
    height: 100%;

    .header {
        background: #fff;
        padding: 0;
    }

    .content {
        margin: 24px 48px 0;
        .bill-list {
            padding: 24px;
            background-color: #fff;
            border: 1px solid #f0f0f0;
        }
    }

    .footer {
        text-align: center;
    }
`;

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
        setBillInfo(item);
        showBillModal(true);
    };

    return (
        <Wrapper>
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
                <MainMenu onModalShow={() => showBillModal(true)} />
            </Sider>

            <Layout>
                <Header className='header' />
                <Content className='content'>
                    <section className='bill-list'>
                        <BillList isListLoading={loading} billList={billList} refreshList={refreshList} onEdit={onEdit} />
                        
                        <BillModal
                            visible={isShowBillModal}
                            billInfo={billInfo}
                            refreshList={refreshList}
                            onClose={() => showBillModal(false)}
                        />
                    </section>
                </Content>
                <Footer className='footer'>
                    i-accounting ©2020
                </Footer>
            </Layout>
        </Wrapper>
    );
}

export default Home;
