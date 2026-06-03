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
            <li><Link href="/#about" className="nav-link">재단소개</Link></li>
            <li><Link href="/target" className="nav-link">지원대상</Link></li>
            <li className="nav-item-dropdown">
              <Link href="/#business" className="nav-link">사업소개</Link>
              <ul className="dropdown-menu dropdown-menu-wide">
                <li><Link href="/business/homecare" className="dropdown-link">방문요양지원</Link></li>
                <li><Link href="/business/medical" className="dropdown-link">의료비지원</Link></li>
                <li><Link href="/business/emergency60" className="dropdown-link">60세 비상지원</Link></li>
                <li><Link href="/business/cataract" className="dropdown-link">백내장 수술비지원</Link></li>
                <li><Link href="/business/dental" className="dropdown-link">치과 진료비 지원</Link></li>
                <li><Link href="/business/hearing-aid" className="dropdown-link">보청기 구입비 지원</Link></li>
                <li><Link href="/business/insurance-arrears" className="dropdown-link">체납 건강보험료지원</Link></li>
                <li><Link href="/business/oxygen" className="dropdown-link">산소발생기 복지지원</Link></li>
                <li><Link href="/business/longterm-care" className="dropdown-link">장기 요양비 지원</Link></li>
                <li><Link href="/business/overseas" className="dropdown-link">해외지원사업</Link></li>
              </ul>
            </li>
            <li><Link href="/#notice" className="nav-link">알림마당</Link></li>
            <li className="nav-item-dropdown">
              <Link href="/#support" className="nav-link">후원참여</Link>
              <ul className="dropdown-menu">
                <li><Link href="/support/apply" className="dropdown-link">후원신청서작성</Link></li>
              </ul>
            </li>
            <li className="nav-item-dropdown">
              <Link href="/partners" className="nav-link">제휴기관</Link>
              <ul className="dropdown-menu dropdown-menu-wide">
                <li><Link href="/partners/medical" className="dropdown-link">복지협력의료기관</Link></li>
                <li><Link href="/partners/welfare" className="dropdown-link">복지참여기관</Link></li>
                <li><Link href="/partners/discount" className="dropdown-link">회원할인기관</Link></li>
                <li><Link href="/partners/contribution" className="dropdown-link">사회공헌참여기관</Link></li>
                <li><Link href="/partners/apply" className="dropdown-link">제휴기관신청</Link></li>
              </ul>
            </li>
            <li className="nav-item-dropdown">
              <Link href="/membership" className="nav-link">회원카드신청</Link>
              <ul className="dropdown-menu">
                <li><Link href="/membership/individual" className="dropdown-link">개인신청</Link></li>
                <li><Link href="/membership/group" className="dropdown-link">단체신청</Link></li>
                <li><Link href="/membership/corporate" className="dropdown-link">기업회원신청</Link></li>
              </ul>
            </li>
            <li className="nav-item-dropdown">
              <Link href="/grant" className="nav-link">복지지원신청</Link>
              <ul className="dropdown-menu">
                <li><Link href="/grant/free-hearing-aid" className="dropdown-link">무료보청기신청</Link></li>
                <li><Link href="/grant/apply" className="dropdown-link">지원금신청</Link></li>
              </ul>
            </li>
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
