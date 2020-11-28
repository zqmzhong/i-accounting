import React, { useState, useEffect } from 'react';
import { useRequest } from 'ahooks';
import { Modal, Form, Space } from 'antd';
import { isEmpty } from 'lodash';
import day from 'dayjs';
import styled from 'styled-components';
import DealTypeTab from '../components/DealTypeTab';
import IncomeExpendForm from '../income-expend-form/IncomeExpendForm';
import BASE_URL from '../common/BaseUrl';

const ModalContent = styled(Space)`
    width: 100%;
`;

function BillModal(props) {
    const { visible, billInfo, refreshList, onClose } = props;
    const [ form ] = Form.useForm();

    useEffect(() => {
        const { amount, category, account, time, note } = billInfo;
        form.setFieldsValue({
            amount,
            category,
            account,
            time: day(time),
            note,
        });
    }, [form, billInfo]);

    const [ tabId, setTabId ] = useState('expend');

    const { loading, run } = useRequest((param) => {
        const service = {
            body: JSON.stringify(param),
            headers: { 'Content-Type': 'application/json' },
        };
        
        if (!isEmpty(billInfo)) {
            return {
                url: BASE_URL + '/bill/' + billInfo.id,
                method: 'put',
                ...service,
            };
        }
        return {
            url: BASE_URL + '/bill',
            method: 'post',
            ...service,
        };
    }, { manual: true });

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
            getContainer={false}
            destroyOnClose={false}
            title="添加交易"
            visible={visible}
            confirmLoading={loading}
            onCancel={() => onClose()}
            onOk={() => form.submit()}
        >
            <ModalContent direction="vertical" size="middle">
                <DealTypeTab onChange={(e) => setTabId(e.target.value)} />
                <Form form={form} layout={"horizontal"} onFinish={onSubmit}>
                    <IncomeExpendForm tabId={tabId} />
                </Form>
            </ModalContent>
        </Modal>
    );
}

export default BillModal;
