import { useState } from "react"
import { getUserId } from "../lib/apiQuery";
import { Button, Form, Input } from 'antd';
import Alert from "./Alert";

function Login({ setUserName, setUserId }) {
    const [showLoginAlert, setShowLoginAlert] = useState(false)

    async function postLogin(username, password) {
        console.log(username + password);
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
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}>
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
                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form >
                    <div>
                        <Alert show={showLoginAlert} message='Incorrect password or username' />
                    </div>
                </center>
            </>
        )
    }

    return renderLogin();
}

export default Login;