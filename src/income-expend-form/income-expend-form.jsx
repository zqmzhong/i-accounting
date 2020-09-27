import React from 'react';
import day from 'dayjs';
import { Form, Input, DatePicker, TimePicker, Space, Select } from 'antd';

const { TextArea } = Input;

function IncomeExpendForm(props) {
    const { tabId } = props;

    const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 24 },
    };
    const dateFormat = 'YYYY-MM-DD';
    const timeFormat = 'HH:mm';

    if (tabId === 'expend') {
        return (
            <div>
                <Form.Item label="金额" {...formItemLayout}>
                    <Input prefix="￥" suffix="RMB" />
                </Form.Item>
                <Form.Item label="分类" {...formItemLayout}>
                    <Select />
                </Form.Item>
                <Form.Item label="账户" {...formItemLayout}>
                    <Select />
                </Form.Item>
                <Form.Item label="时间" {...formItemLayout}>
                    <Space>
                        <DatePicker defaultValue={day()} format={dateFormat} />
                        <TimePicker defaultValue={day()} format={timeFormat} />
                    </Space>
                </Form.Item>
                <Form.Item label="备注" {...formItemLayout}>
                    <TextArea allowClear />
                </Form.Item>
            </div>
        );
    }

    return (<div />);
}

export default IncomeExpendForm;
