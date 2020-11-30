import { Radio } from 'antd';
import styled from 'styled-components/macro';

const Wrapper = styled('div')`
    text-align: center;
`;

function DealTypeTab({ value, onChange }) {
    return (
        <Wrapper>
            <Radio.Group
                buttonStyle="solid"
                value={value || 'expend'}
                onChange={onChange}
            >
                <Radio.Button value="expend"> 支出 </Radio.Button>
                <Radio.Button value="income"> 收入 </Radio.Button>
                <Radio.Button value="transfer"> 转账 </Radio.Button>
            </Radio.Group>
        </Wrapper>
    );
}

export default DealTypeTab;
