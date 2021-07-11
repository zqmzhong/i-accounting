import { Auth } from "aws-amplify";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styled from 'styled-components/macro';
import { useAppContext } from "../libs/contextLib";

const Wrapper = styled('div')`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-form {
        width: 30%;
        max-width: 400px;
    }
    .login-form-forgot {
        float: right;
    }
    .login-form-button {
        width: 100%;
    }
`;


function Login() {
    const history = useHistory();
    const { userHasAuthenticated } = useAppContext();

    const onFinish = async (values) => {
        console.log('Received values of form: ', values);
        try {
            await Auth.signIn(values.username, values.password);
            console.log("Logged in");
            userHasAuthenticated(true);
            history.push("/");
        } catch (e) {
            console.error(e.message);
        }
    };

    return (
        <Wrapper>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Username!',
                        },
                    ]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    {/* TODO: 忘记密码 */}
                    <a className="login-form-forgot" href="">Forgot password</a>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
                    </Button>
                    {/* TODO: 注册页面 */}
                    Or <a href="">register now!</a>
                </Form.Item>
            </Form>
        </Wrapper>
    );
}

export default Login;
