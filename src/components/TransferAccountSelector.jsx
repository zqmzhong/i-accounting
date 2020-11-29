import React, { useState } from 'react';
import { Select } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const selectClassName = 'account-select-form-item';
const AccountSelect = styled(Select)`
    &.${selectClassName} {
        width: calc((100% - 30px) / 2);
    }
`;
const ArrowWithSpace = styled(ArrowRightOutlined)`
    margin: 0 8px;
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
        <div>
            <AccountSelect
                mode='tags'
                showArrow
                value={value.payment || payment}
                onChange={onPaymentChange}
                className={selectClassName}
            />
            <ArrowWithSpace />
            <AccountSelect
                mode='tags'
                showArrow
                value={value.receipt || receipt}
                onChange={onReceiptChange}
                className={selectClassName}
            />
        </div>
    );
}

export default TransferAccountSelector;
