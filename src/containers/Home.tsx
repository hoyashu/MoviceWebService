import { Col, Row, Breadcrumb, Button } from 'antd';
import { PATH } from '../routes/constant';

function Home() {
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
                <Button type="primary" href={PATH.LOGIN}>
                  Login
                </Button>
              </Col>
              <Col>
                <Button type="default" href={PATH.MOVIELIST}>
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

export default Home;
