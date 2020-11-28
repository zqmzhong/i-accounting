import React from 'react';
import day from 'dayjs';
import { Form, Input, DatePicker, Select } from 'antd';
import TransferAccountSelector from '../components/TransferAccountSelector';

const { TextArea } = Input;

function IncomeExpendForm(props) {
    const { tabId } = props;

    const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 24 },
    };
    const dateFormat = 'YYYY-MM-DD HH:mm';
    const timeFormat = 'HH:mm';

    const handleChangeCategory = (value) => {
        // TODO: support add new category item
    };

    const handleChangeAccount = (value) => {
        // TODO: support add new category account
    };

    let accountSelector = <Select mode="tags" showArrow onChange={handleChangeAccount} />;
    if (tabId === 'transfer') {
        accountSelector = <TransferAccountSelector onChange={handleChangeAccount} />;
    }

    return (
        <div>
            <Form.Item name="amount" label="金额" {...formItemLayout}>
                <Input prefix="￥" suffix="RMB" />
            </Form.Item>
            <Form.Item name="account" label="账户" {...formItemLayout}  >
                {accountSelector}
            </Form.Item>
            <Form.Item name="category" label="分类" {...formItemLayout}>
                <Select mode="tags" showArrow onChange={handleChangeCategory} />
            </Form.Item>
            <Form.Item name="time" label="时间" {...formItemLayout} initialValue={day()}>
                <DatePicker showTime={{ format: timeFormat }} format={dateFormat} />
            </Form.Item>
            <Form.Item name="note" label="备注" {...formItemLayout}>
                <TextArea allowClear />
            </Form.Item>
        </div>
    );
}

export default IncomeExpendForm;
