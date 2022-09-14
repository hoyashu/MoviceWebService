import { Link } from 'react-router-dom';
import Button from '../button/button';

function Header() {
  const onClick = () => {
  };

  return (
    <header>
      <h1>header입니다</h1>
      <Link to="/login">
        <Button onClick={() => onClick()} width={100}>
          <div>로그인</div>
        </Button>
      </Link>
    </header>
  );
}

export default Header;
