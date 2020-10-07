import React from 'react';
import day from 'dayjs';
import { Form, Input, DatePicker, Select } from 'antd';

const { TextArea } = Input;

function IncomeExpendForm(props) {
    const { tabId } = props;

    const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 24 },
    };
    const dateFormat = 'YYYY-MM-DD HH:mm';
    const timeFormat = 'HH:mm';

    if (tabId === 'expend') {
        return (
            <div>
                <Form.Item name="amount" label="金额" {...formItemLayout}>
                    <Input prefix="￥" suffix="RMB" />
                </Form.Item>
                <Form.Item name="category" label="分类" {...formItemLayout}>
                    <Select />
                </Form.Item>
                <Form.Item name="account" label="账户" {...formItemLayout}>
                    <Select />
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

    return (<div />);
}

export default IncomeExpendForm;
