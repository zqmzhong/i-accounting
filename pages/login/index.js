import { useState } from 'react';
import { Input, Cell, Button } from 'zarm';
// import cb from '../../cloudbase';
import cloudbase from "@cloudbase/js-sdk";


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function login() {
    console.log('password: ', password);
    console.log('email: ', email);
    const app = cloudbase.init({
      env: "i-accounting-2gzt89paac831203"
    });
    app.auth({ persistence: 'local' })
      .signUpWithEmailAndPassword(email, password)
      .then((res) => {
        console.log('res: ', res);

      })
      .catch(console.error)
    // await app.auth().anonymousAuthProvider().signIn();
    // const loginState = await auth.getLoginState();
    // console.log(loginState);
  }

  return (
    <>
      <Cell>
        <Input
          clearable
          type="text"
          placeholder="邮箱或手机号"
          onChange={setEmail}
        />
      </Cell>
      <Cell>
        <Input
          clearable
          type="password"
          placeholder="输入密码"
          onChange={setPassword}
        />
      </Cell>
      <Cell>
        <Button block theme="primary" htmlType="submit" onClick={login}>
          登录/注册
        </Button>
      </Cell>
    </>
  )
}
