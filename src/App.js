import React from 'react';
import { Route, Switch } from "react-router-dom";
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import "./App.css";
import Login from './pages/Login.jsx';
import Home from './pages/Home.jsx';

function App() {
  return (
    <div className="App">
      <ConfigProvider locale={zhCN}>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
        </Switch>
      </ConfigProvider>
    </div>
  );
}

export default App;
