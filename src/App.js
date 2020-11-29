import React from 'react';
import Home from './home-page/Home.jsx';
import "./App.css";
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

function App() {
  return (
    <div className="App">
      <ConfigProvider locale={zhCN}>
        <Home />
      </ConfigProvider>
    </div>
  );
}

export default App;
