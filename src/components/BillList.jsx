import React from 'react';
import { useRequest } from 'ahooks';
import { Button, List, Skeleton } from 'antd';
import BASE_URL from '../common/BaseUrl';

function BillList(props) {
    const { isListLoading, billList, refreshList, onEdit } = props;

    const { loading: isDeleting, run: deleteItem } = useRequest((param) => ({
        url: BASE_URL + '/bill',
        method: 'delete',
        body: JSON.stringify(param),
        headers: { 'Content-Type': 'application/json' },
    }), { manual: true });

    const deleteBill = async (item) => {
        await deleteItem([item.id]);
        refreshList();
    };

    return (
        <List
            className="bill-list"
            loading={isListLoading || isDeleting}
            itemLayout="horizontal"
            dataSource={billList}
            renderItem={item => (
                <List.Item
                    actions={[
                        <Button type="link" onClick={() => onEdit(item)}>编辑</Button>,
                        <Button type="link" onClick={() => deleteBill(item)}>删除</Button>
                    ]}
                >
                    <Skeleton avatar title={false} loading={item.loading} active>
                        <List.Item.Meta
                            title={<a href="https://ant.design">{item.category}</a>}
                            description={item.time}
                        />
                        <div>{item.amount}</div>
                    </Skeleton>
                </List.Item>
            )}
        />
    );
}

export default BillList;