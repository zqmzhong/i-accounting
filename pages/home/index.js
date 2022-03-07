import { useState } from 'react';
import { Icon, TabBar, Cell, Button } from 'zarm';

const TabIcon = Icon.createFromIconfont('//at.alicdn.com/t/font_3228386_5zva9rxco6f.js');

export default function Demo () {
  const [activeKey, setActiveKey] = useState('home');
  const [visible, setVisible] = useState(true);

  return (
    <>
    <Cell
        description={
          <Button
            size="xs"
            onClick={() => {
              setVisible(!visible);
            }}
          >
            {visible ? '隐藏' : '展示'}
          </Button>
        }
      >
        隐藏 | 展示
      </Cell>
      <TabBar visible={visible} activeKey={activeKey} onChange={setActiveKey}>
        <TabBar.Item itemKey="home" title="主页" icon={<TabIcon type="shouye" />} />
        <TabBar.Item
          itemKey="found"
          title="账本"
          icon={<TabIcon type="qianbao" />}
          badge={{ shape: 'circle', text: '3' }}
        />
        <TabBar.Item
          itemKey="me"
          title="我的"
          icon={<TabIcon type="wode" />}
          badge={{ shape: 'dot' }}
        />
      </TabBar>
    </>
  );
};
