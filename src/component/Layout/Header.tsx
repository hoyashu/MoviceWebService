import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>header입니다</h1>
      <Link to="/login">
        <div>로그인</div>
      </Link>
    </header>
  );
}

export default Header;
