import { Breadcrumb, Button, Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

import { AuthContainer } from '../../containers/AuthContainer';
import { PATH } from '../../routes/constant';

function HomePage() {
  const { navigate, isLogin } = AuthContainer.useContainer();
  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>

      <div className="site-layout-content">
        <Row justify="center" align="middle">
          <Col>
            <h1>Welcome Here 🌈</h1>
            <Row align="middle" dir="col">
              <Col>
                {isLogin || (
                  <Button type="primary" onClick={() => navigate(PATH.LOGIN)}>
                    Login
                  </Button>
                )}
              </Col>
              <Col>
                <Button type="default" onClick={() => navigate(PATH.MOVIELIST)}>
                  Show Movie List
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default HomePage;
