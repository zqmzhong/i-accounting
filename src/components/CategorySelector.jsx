import { Button, TreeSelect } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Settings from '../common/Settings.json';

function CategorySelector({ value, type, newItemText, onAddNew, onChange }) {

    return (
        <TreeSelect
            showSearch
            allowClear
            treeDefaultExpandAll
            treeDataSimpleMode
            treeNodeFilterProp="title"
            value={value}
            treeData={Settings[type]}
            onChange={onChange}
            dropdownRender={menu => (
                <div>
                    <Button
                        type="link"
                        icon={<PlusOutlined />}
                        onClick={onAddNew}
                    >
                        {newItemText}
                    </Button>
                    {menu}
                </div>
            )}
        />
    );
}

export default CategorySelector;
