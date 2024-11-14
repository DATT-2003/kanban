import { Button, Card, Checkbox, Form, Input, Space, Typography } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import SocialLogin from './components/SocialLogin'

const { Title, Paragraph, Text } = Typography
const SignUp = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isRemember, setIsRemember] = useState(false);

    const [from] = Form.useForm()
    const handleSignUp = (values: { email: string; password: string }) => {
        console.log(values);
    };
    return (
        <>
            <Card style={{ width: '50%' }}>
                <div className="text-center">
                    <Title level={2}>Create an account</Title>
                    <Paragraph type='secondary'>
                        Start your 30-day free trial.
                    </Paragraph>
                </div>
                <Form layout='vertical' form={from} onFinish={handleSignUp} disabled={isLoading} size='large'>
                    <Form.Item name={'name'} label='Name'
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your Name!!'
                            }
                        ]}>
                        <Input placeholder='Enter your Name!' allowClear />
                    </Form.Item>
                    <Form.Item name={'email'} label='Email'
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your Email!!'
                            }
                        ]}>
                        <Input placeholder='Enter your Email!' allowClear maxLength={100} type='email' />
                    </Form.Item>
                    <Form.Item name={'password'} label='Password'
                        rules={[
                            {
                                required: true,
                                message: 'Please enter your Password!!'
                            }
                        ]}>
                        <Input.Password placeholder='Create a password' maxLength={100} type='password' />
                    </Form.Item>
                </Form>
                <div className="mt-4 mb-3">
                    <Button onClick={() => from.submit()}
                        type='primary'
                        style={{
                            width: '100%',
                        }}
                        size='large'>
                        Get started
                    </Button>
                </div>
                <SocialLogin />
                <div className="mt-3 text-center">
                    <Space>
                        <Text type='secondary'>Already have an account? </Text>
                        <Link to={'/login'}>Login</Link>
                    </Space>
                </div>
            </Card >
        </ >
    )
}

export default SignUp
