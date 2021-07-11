import React, { useState, useEffect } from 'react';
import { ConfigProvider } from 'antd';
import { Auth } from "aws-amplify";
import { AppContext } from "./libs/contextLib";
import zhCN from 'antd/es/locale/zh_CN';
import Routes from "./Routes";
import "./App.css";

function App() {
    const [isAuthenticating, setIsAuthenticating] = useState(true);
    const [isAuthenticated, userHasAuthenticated] = useState(false);

    useEffect(() => {
        onLoad();
    }, []);
    
    async function onLoad() {
        try {
            await Auth.currentSession();
            userHasAuthenticated(true);
        } catch(e) {
            if (e !== 'No current user') {
                alert(e);
            }
       }
    
        setIsAuthenticating(false);
    }

    return (
        <div className="App">
            <ConfigProvider locale={zhCN}>
                <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
                    <Routes  />
                </AppContext.Provider>
            </ConfigProvider>
        </div>
    );
}

export default App;
