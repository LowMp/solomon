import Link from 'next/link';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        {/* Logo */}
        <Link href="/" className="logo">
          <span className="logo-icon">🕊️</span> 솔로몬 복지재단
        </Link>

        {/* Navigation */}
        <nav className="nav">
          <ul className="nav-list">
            <li><Link href="#about" className="nav-link">재단소개</Link></li>
            <li><Link href="#business" className="nav-link">사업소개</Link></li>
            <li><Link href="#notice" className="nav-link">알림마당</Link></li>
            <li><Link href="#support" className="nav-link">후원참여</Link></li>
          </ul>
        </nav>

        {/* Auth Buttons */}
        <div className="auth-buttons">
          <Link href="/login" className="btn btn-outline btn-sm">로그인</Link>
          <Link href="/signup" className="btn btn-primary btn-sm">회원가입</Link>
        </div>
      </div>
    </header>
  );
}
