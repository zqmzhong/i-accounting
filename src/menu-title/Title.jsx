import React from 'react';
import { Dropdown, Menu, Typography } from 'antd';
import styles from './Title.module.scss';

const { SubMenu } = Menu;
const { Title } = Typography;

function MenuTitle() {
    const menu = (
        <Menu selectable>
            <SubMenu title="切换账本">
                <Menu.Item> 我的账本 </Menu.Item>
                <Menu.Item> 创建新账本 </Menu.Item>
            </SubMenu>
            <Menu.Item> 成员管理 </Menu.Item>
            <Menu.Item> 账本设置 </Menu.Item>
        </Menu>
    );

    return (
        <div className={styles['menu-title']}>
            <Dropdown overlay={menu} trigger={['click']}>
                <Title level={2} className={styles['title-font']}> 我的账本 </Title>
            </Dropdown>
        </div>
    );
}

export default MenuTitle;
