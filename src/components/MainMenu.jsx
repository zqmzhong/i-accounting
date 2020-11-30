import { Button, Dropdown, Menu, Typography } from 'antd';
import { PlusOutlined, UserOutlined } from '@ant-design/icons';
import styled from 'styled-components/macro';

const Wrapper = styled('div')`
    text-align: center;

    .title-dropdown {
        height: 100px;

        h2 {
            color: white;
            padding: 35px 0 10px;
        }
    }
`;

const { SubMenu } = Menu;
const { Title } = Typography;

const DropdownMenu = (
    <Menu selectable>
        <SubMenu title="切换账本">
            <Menu.Item> 我的账本 </Menu.Item>
            <Menu.Item> 创建新账本 </Menu.Item>
        </SubMenu>
        <Menu.Item> 成员管理 </Menu.Item>
        <Menu.Item> 账本设置 </Menu.Item>
    </Menu>
);

function MainMenu({ onModalShow }) {
    return (
        <Wrapper>
            <div className='title-dropdown'>
                <Dropdown overlay={DropdownMenu} trigger={['click']}>
                    <Title level={2} > 我的账本 </Title>
                </Dropdown>
            </div>

            <Button
                type="primary"
                shape="round"
                icon={(<PlusOutlined />)}
                size="large"
                onClick={onModalShow}
            >
                添加交易
            </Button>

            <Menu theme="dark" mode="inline">
                <Menu.Item key="1">
                    <UserOutlined />
                    <span> 账本管理 </span>
                </Menu.Item>
                <Menu.Item key="2">
                    <UserOutlined />
                    <span> 统计图表 </span>
                </Menu.Item>
                <Menu.Item key="3">
                    <UserOutlined />
                    <span> 设置 </span>
                </Menu.Item>
            </Menu>
        </Wrapper>
    );
}

export default MainMenu;
