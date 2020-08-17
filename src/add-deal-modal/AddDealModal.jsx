import React from 'react';
import { Modal, Form, Radio, Input } from 'antd';
import styles from './AddDealModal.module.scss';

function AddDealModal(props) {
    const { visible, onClose } = props;

    const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 24 },
    };

    const state = {
        ModalText: 'Content of the modal',
        confirmLoading: false,
    };

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
            confirmLoading={state.confirmLoading}
            onCancel={handleCancel}
        >
            <Form layout={"horizontal"}>
                <Form.Item {...formItemLayout} className={styles["type-tabs"]}>
                    <Radio.Group 
                        defaultValue="expend"
                        buttonStyle="solid"
                        onChange={() => console.log("change")}
                    >
                        <Radio.Button value="expend"> 支出 </Radio.Button>
                        <Radio.Button value="income"> 收入 </Radio.Button>
                        <Radio.Button value="transfer"> 转账 </Radio.Button>
                    </Radio.Group>
                </Form.Item>

                <Form.Item label="金额" {...formItemLayout}>
                    <Input prefix="￥" suffix="RMB" />
                </Form.Item>
                <Form.Item label="分类" {...formItemLayout}>
                    <Input />
                </Form.Item>
                <Form.Item label="账户" {...formItemLayout}>
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default AddDealModal;