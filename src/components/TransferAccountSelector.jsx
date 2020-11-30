import React, { useState } from 'react';
import { Select } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import styled from 'styled-components/macro';

const Wrapper = styled('div')`
    .account-select {
        width: calc((100% - 30px) / 2);
    }
    .arrow {
        margin: 0 8px;
    }
`;

function TransferAccountSelector({ value = {}, onChange }) {
    // TODO: for transfer, payment and receipt account should be single select(remove mode='tags')
    const [ payment, setPayment ] = useState([]);
    const [ receipt, setReceipt ] = useState([]);

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
            <Select
                mode='tags'
                showArrow
                className='account-select'
                value={value.payment || payment}
                onChange={onPaymentChange}
            />
            <ArrowRightOutlined className='arrow' />
            <Select
                mode='tags'
                showArrow
                className='account-select'
                value={value.receipt || receipt}
                onChange={onReceiptChange}
            />
        </Wrapper>
    );
}

export default TransferAccountSelector;
