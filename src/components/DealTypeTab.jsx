import { Radio } from 'antd';
import styled from 'styled-components';

const TabWrapper = styled('div')`
    text-align: center;
`;

function DealTypeTab({ onChange }) {
    return (
        <TabWrapper>
            <Radio.Group
                defaultValue="expend"
                buttonStyle="solid"
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