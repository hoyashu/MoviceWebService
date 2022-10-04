import { Button, Col, Row } from 'antd';

import { AuthContainer } from '../../containers/AuthContainer';
import { PATH } from '../../routes/constant';

export function HomePageButton() {
  const { navigate, isLogin } = AuthContainer.useContainer();
  return (
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
  );
}
