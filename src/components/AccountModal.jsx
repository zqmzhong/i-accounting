import { Modal, Form, Input } from 'antd';

function AccountModal({ visible, onClose }) {
    const [form] = Form.useForm();

    return (
        <Modal
            centered
            width={400}
            destroyOnClose={true}
            title="添加账户"
            visible={visible}
            // confirmLoading={loading}
            onCancel={() => onClose()}
            onOk={() => form.submit()}
        >
            <Form form={form} layout="horizontal">
                <Form.Item name="name" label="名称" >
                    <Input />
                </Form.Item>
                <Form.Item name="parent" label="分类" >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default AccountModal;
