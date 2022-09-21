import { Breadcrumb, Button, Checkbox, Col, Form, Input, Row } from 'antd';
import React from 'react';

import Container from '../component/container';
import { ContainerImage } from '../component/container/styles';
import { PATH } from '../routes/constant';

function Login() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
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
            <Container>
              <ContainerImage src="https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/cjBn/image/cc7TqA9PyQp4kFKo7YT6mjNijcM.jpg" />
              반가워요!
            </Container>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
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

export default Login;
