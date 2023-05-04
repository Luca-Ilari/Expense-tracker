import { useState } from "react"
import { getUserId } from "../lib/apiQuery";
import { Button, Form, Input, Space } from 'antd';
import Warning from "./Alert";
import Title from "./Title";

function Login({ setUserName, setUserId }) {
    const [showLoginAlert, setShowLoginAlert] = useState(false)

    async function postLogin(username, password) {
        const response = await getUserId(username, password)
        if (response) {
            setUserId(response)
            setUserName(username)
            setShowLoginAlert(false)
        } else {
            setShowLoginAlert(true)
        }
    }

    const onFinish = (values) => {
        postLogin(values.username, values.password)
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    function renderLogin() {
        return (
            <>
                <center>
                    <Title content="Login" />
                    <br />
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        style={{
                            maxWidth: 400,
                        }}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    <div>
                        <Warning show={showLoginAlert} message='Incorrect password or username' />
                    </div>
                    </Form>
                </center>
            </>
        )
    }

    return renderLogin();
}

export default Login;