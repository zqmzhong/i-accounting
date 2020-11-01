import React, { useState } from 'react';
import { useRequest } from 'ahooks';
import { List, Skeleton } from 'antd';

function BillList(props) {
    const [ billList, setBillList ] = useState([]);

    const { loading } = useRequest((data) => ({
        url: '/api/bills',
        method: 'get',
    }), {
        onSuccess: (result) => setBillList(result),
    });


    return (
        <List
            className="bill-list"
            loading={loading}
            itemLayout="horizontal"
            dataSource={billList}
            renderItem={item => (
                <List.Item
                    // eslint-disable-next-line jsx-a11y/anchor-is-valid
                    actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
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