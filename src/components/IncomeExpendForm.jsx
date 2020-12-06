import { Form, Input, DatePicker } from 'antd';
import { useToggle } from 'ahooks';
import day from 'dayjs';
import CategorySelector from './CategorySelector';
import TransferAccountSelector from './TransferAccountSelector';
import AccountModal from './AccountModal';

const { TextArea } = Input;

// TODO: user can input and add new account or category
function IncomeExpendForm(props) {
    const { tabId } = props;
    const [isShowAccountModal, { toggle: showAccountModal }] = useToggle(false);

    const formItemLayout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 24 },
    };
    const dateFormat = 'YYYY-MM-DD HH:mm';
    const timeFormat = 'HH:mm';

    const handleAddCategory = (value) => {
        // TODO: support add new category item
        showAccountModal(true);
    };

    const handleAddAccount = (value) => {
        // TODO: support add new category account
    };

    let accountSelector = <CategorySelector type="accounts" newItemText="创建新账户" onAddNew={handleAddAccount} />;
    if (tabId === 'transfer') {
        accountSelector = <TransferAccountSelector onAddNew={handleAddAccount} />;
    }

    return (
        <div>
            <Form.Item name="amount" label="金额" {...formItemLayout}>
                <Input prefix="￥" suffix="RMB" />
            </Form.Item>
            <Form.Item name="account" label="账户" {...formItemLayout} >
                {accountSelector}
            </Form.Item>
            <Form.Item name="category" label="分类" {...formItemLayout}>
                <CategorySelector type="category" newItemText="创建新分类" onAddNew={handleAddCategory} />
            </Form.Item>
            <Form.Item name="time" label="时间" {...formItemLayout} initialValue={day()}>
                <DatePicker showTime={{ format: timeFormat }} format={dateFormat} />
            </Form.Item>
            <Form.Item name="note" label="备注" {...formItemLayout}>
                <TextArea allowClear />
            </Form.Item>

            <AccountModal visible={isShowAccountModal} onClose={() => showAccountModal(false)} />
        </div>
    );
}

export default IncomeExpendForm;
