import { Button, Card, Form, Input, Typography } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const { Title, Paragraph } = Typography
const Login = () => {
    const [isLoading, setIsLoading] = useState(false);

    const [from] = Form.useForm()
    const handleLogin = (values: { email: string; password: string }) => {
        console.log(values);
    };
    return (
        <div>
            <Card>
                <div className="text-center">
                    <Title>Login</Title>
                    <Paragraph>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </Paragraph>
                </div>
                <Form layout='vertical' form={from} onFinish={handleLogin} disabled={isLoading} size='large'>
                    <Form.Item name={'email'} label='Email'
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your Email!!'
                            }
                        ]}>
                        <Input allowClear maxLength={100} type='email' />
                    </Form.Item>
                    <Form.Item name={'password'} label='Password'
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your Password!!'
                            }
                        ]}>
                        <Input allowClear maxLength={100} type='password' />
                    </Form.Item>
                </Form>

                <div className="mt-4">
                    <Button onClick={() => from.submit()}
                        type='primary'
                        style={{
                            width: '100%',
                        }}
                        size='large'>
                        Login
                    </Button>
                </div>
            </Card>
        </div >
    )
}

export default Login
