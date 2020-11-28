import React from 'react';
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

function TransferAccountSelector({ onChange }) {
    return (
        <div>
            <AccountSelect mode='tags' showArrow onChange={onChange} className={selectClassName} />
            <ArrowWithSpace />
            <AccountSelect mode='tags' showArrow onChange={onChange} className={selectClassName} />
        </div>
    );
}

export default TransferAccountSelector;
