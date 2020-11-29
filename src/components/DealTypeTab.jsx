import { Radio } from 'antd';
import styled from 'styled-components';

const TabWrapper = styled('div')`
    text-align: center;
`;

function DealTypeTab({ value, onChange }) {
    return (
        <TabWrapper>
            <Radio.Group
                buttonStyle="solid"
                value={value || 'expend'}
                onChange={onChange}
            >
                <Radio.Button value="expend"> 支出 </Radio.Button>
                <Radio.Button value="income"> 收入 </Radio.Button>
                <Radio.Button value="transfer"> 转账 </Radio.Button>
            </Radio.Group>
        </TabWrapper>
    );
}

export default DealTypeTab;
