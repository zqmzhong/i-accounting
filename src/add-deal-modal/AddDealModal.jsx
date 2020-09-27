import React, { useState } from 'react';
import { Modal, Form, Radio, Space } from 'antd';
import IncomeExpendForm from '../income-expend-form/income-expend-form';
import styles from './AddDealModal.module.scss';

function AddDealModal(props) {
    const { visible, onClose } = props;

    const [ tabId, setTabId ] = useState('expend');
    const [ confirmLoading, setConfirmLoading ] = useState(false);

    const handleCancel = () => {
        onClose();
    };
    const handleOk = () => {
        onClose();
    };

    return (
        <Modal
            title="添加交易"
            visible={visible}
            onOk={handleOk}
            confirmLoading={confirmLoading}
            onCancel={handleCancel}
        >
            <Space direction="vertical" size="middle" className={styles["modal-content"]}>
                <div className={styles["type-tabs"]}>
                    <Radio.Group 
                        defaultValue="expend"
                        buttonStyle="solid"
                        onChange={(e) => {
                            console.log(e);
                            setTabId(e.target.value);
                        }}
                    >
                        <Radio.Button value="expend"> 支出 </Radio.Button>
                        <Radio.Button value="income"> 收入 </Radio.Button>
                        <Radio.Button value="transfer"> 转账 </Radio.Button>
                    </Radio.Group>
                </div>

                <Form layout={"horizontal"}>
                    <IncomeExpendForm tabId={tabId} />
                </Form>
            </Space>
        </Modal>
    );
}

export default AddDealModal;