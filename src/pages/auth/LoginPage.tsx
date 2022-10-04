import { Breadcrumb, Button, Checkbox, Col, Form, Input, Row } from 'antd';
import React from 'react';

import { AuthContainer, UserInfoProps } from '../../containers/AuthContainer';
import { PATH } from '../../routes/constant';

function LoginPage() {
  const { onSubmitLogin, isLogin } = AuthContainer.useContainer();

  const onFinish = (formData: UserInfoProps) => {
    // const onFinish = (formData: UserInfoProps) => {
    console.log('values:', formData);
    onSubmitLogin(formData);
    // onSubmitLogin();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item href={PATH.HOME}>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Login</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-layout-content">
        <Row justify="center" align="middle">
          <Col>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item label="id" name="id" rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input />
              </Form.Item>

              <Form.Item label="pwd" name="pwd" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input.Password />
              </Form.Item>

              <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default LoginPage;
