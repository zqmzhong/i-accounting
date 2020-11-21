import React, { useState } from 'react';
import { useRequest } from 'ahooks';
import { Modal, Form, Radio, Space } from 'antd';
import IncomeExpendForm from '../income-expend-form/IncomeExpendForm';
import styles from './BillModal.module.scss';
import BASE_URL from '../common/BaseUrl';

function AddDealModal(props) {
    const [ form ] = Form.useForm();
    const { visible, billInfo, refreshList, onClose } = props;
    form.setFieldsValue(billInfo);

    const [ tabId, setTabId ] = useState('expend');

    const { loading, run } = useRequest((param) => ({
        url: BASE_URL + '/bill',
        method: 'post',
        body: JSON.stringify(param),
        headers: { 'Content-Type': 'application/json' },
    }), { manual: true });

    const onSubmit = async (fieldsValue) => {
        const values = {
            type: tabId,
            ...fieldsValue,
            time: fieldsValue.time.format('YYYY-MM-DD HH:mm'),
        };
        await run(values);
        refreshList();
        onClose();
    };

    return (
        <Modal
            title="添加交易"
            visible={visible}
            confirmLoading={loading}
            onCancel={() => onClose()}
            onOk={() => form.submit()}
        >
            <Space direction="vertical" size="middle" className={styles["modal-content"]}>
                <div className={styles["type-tabs"]}>
                    <Radio.Group 
                        defaultValue="expend"
                        buttonStyle="solid"
                        onChange={(e) => setTabId(e.target.value)}
                    >
                        <Radio.Button value="expend"> 支出 </Radio.Button>
                        <Radio.Button value="income"> 收入 </Radio.Button>
                        <Radio.Button value="transfer"> 转账 </Radio.Button>
                    </Radio.Group>
                </div>

                <Form form={form} layout={"horizontal"} onFinish={onSubmit}>
                    <IncomeExpendForm tabId={tabId} billInfo={billInfo} />
                </Form>
            </Space>
        </Modal>
    );
}

export default AddDealModal;