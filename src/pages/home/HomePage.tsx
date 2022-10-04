import { Breadcrumb, Button, Col, Row } from 'antd';
import { useNavigate } from 'react-router-dom';

import { HomePageButton } from '../../component/auth/HomePageButton';
import { AuthContainer } from '../../containers/AuthContainer';
import { PATH } from '../../routes/constant';

function HomePage() {
  return (
    <>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
      </Breadcrumb>

      <div className="site-layout-content">
        <Row justify="center" align="middle">
          <Col>
            <h1>Welcome Here 🌈</h1>
            <HomePageButton />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default HomePage;
