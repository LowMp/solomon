import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-info">
          <h2 className="footer-logo">🕊️ 솔로몬 복지재단</h2>
          <p className="footer-address">
            서울특별시 희망구 사랑동 123-45 솔로몬 빌딩 2층<br />
            대표전화: 02-1234-5678 | 이메일: info@solomonwelfare.org
          </p>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Solomon Welfare Foundation. All rights reserved.
          </p>
        </div>
        <div className="footer-links">
          <div className="link-group">
            <h3>재단안내</h3>
            <ul>
              <li><a href="#about">인사말</a></li>
              <li><a href="#about">미션 및 비전</a></li>
              <li><a href="#about">조직도</a></li>
              <li><a href="#about">오시는 길</a></li>
            </ul>
          </div>
          <div className="link-group">
            <h3>사업안내</h3>
            <ul>
              <li><a href="#business">아동복지</a></li>
              <li><a href="#business">노인복지</a></li>
              <li><a href="#business">장애인복지</a></li>
              <li><a href="#business">지역사회복지</a></li>
            </ul>
          </div>
          <div className="link-group">
            <h3>고객센터</h3>
            <ul>
              <li><a href="#notice">공지사항</a></li>
              <li><a href="#notice">자주묻는질문</a></li>
              <li><a href="#notice">1:1 문의</a></li>
              <li><a href="#support">후원안내</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
