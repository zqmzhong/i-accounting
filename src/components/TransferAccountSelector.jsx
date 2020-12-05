import React, { useState } from 'react';
import { ArrowRightOutlined } from '@ant-design/icons';
import CategorySelector from './CategorySelector';
import styled from 'styled-components/macro';

const Wrapper = styled('div')`
    .ant-select.ant-tree-select {
        width: calc((100% - 30px) / 2);
    }
    .arrow {
        margin: 0 8px;
    }
`;

function TransferAccountSelector({ value = {}, onChange, onAddNew }) {
    const [payment, setPayment] = useState([]);
    const [receipt, setReceipt] = useState([]);

    const triggerChange = (changedValue) => {
        if (onChange) {
            onChange({
                payment,
                receipt,
                ...value,
                ...changedValue,
            });
        }
    };

    const onPaymentChange = (newValue) => {
        setPayment(newValue);
        triggerChange({
            payment: newValue,
        });
    };
    const onReceiptChange = (newValue) => {
        setReceipt(newValue);
        triggerChange({
            receipt: newValue,
        });
    }

    return (
        <Wrapper>
            <CategorySelector
                value={value.payment || payment}
                type="accounts"
                newItemText="创建新账户"
                onChange={onPaymentChange}
                onAddNew={onAddNew}
            />
            <ArrowRightOutlined className='arrow' />
            <CategorySelector
                value={value.receipt || receipt}
                type="accounts"
                newItemText="创建新账户"
                onChange={onReceiptChange}
                onAddNew={onAddNew}
            />
        </Wrapper>
    );
}

export default TransferAccountSelector;
