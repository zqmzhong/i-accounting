import React, { useState } from 'react';
import { useRequest } from 'ahooks';
import { Button, List, Skeleton } from 'antd';
import BASE_URL from '../common/BaseUrl';

function BillList(props) {
    const [ billList, setBillList ] = useState([]);

    const { loading, run: refreshList } = useRequest(() => ({
        url: BASE_URL + '/bills',
        method: 'get',
    }), {
        onSuccess: (result) => setBillList(result),
    });

    const { run: deleteItem } = useRequest((data) => ({
        url: BASE_URL + '/bill',
        method: 'delete',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    }), { manual: true });

    const deleteBill = async (item) => {
        console.log(item);
        await deleteItem([item.id]);
        refreshList();
    };


    return (
        <List
            className="bill-list"
            loading={loading}
            itemLayout="horizontal"
            dataSource={billList}
            renderItem={item => (
                <List.Item
                    actions={[
                        <Button type="link">编辑</Button>,
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