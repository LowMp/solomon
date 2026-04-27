import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.main}>
      {/* Hero Banner Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroBadge}>솔로몬 복지재단</span>
            <h1 className={styles.heroTitle}>
              함께 나누는 희망,<br />
              <span className={styles.textHighlight}>더 밝은 내일</span>을 만듭니다
            </h1>
            <p className={styles.heroDesc}>
              우리의 작은 나눔이 모여 소외된 이웃에게 큰 희망이 됩니다.<br />
              따뜻한 세상, 솔로몬 복지재단이 앞장섭니다.
            </p>
            <div className={styles.heroButtons}>
              <Link href="#support" className="btn btn-primary btn-large">후원 동참하기</Link>
              <Link href="#about" className="btn btn-outline btn-large">재단 알아보기</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Business Icons Section */}
      <section id="business" className="section">
        <div className="container">
          <h2 className="section-title">주요 사업 안내</h2>
          <div className={styles.businessGrid}>
            <div className={styles.businessCard}>
              <div className={styles.iconWrapper}>🧒</div>
              <h3>아동/청소년 복지</h3>
              <p>아이들이 밝고 건강하게 자랄 수 있도록 교육 및 생활 지원을 아끼지 않습니다.</p>
            </div>
            <div className={styles.businessCard}>
              <div className={styles.iconWrapper}>👵</div>
              <h3>노인 복지</h3>
              <p>어르신들의 편안하고 활기찬 노후를 위해 맞춤형 돌봄 서비스를 제공합니다.</p>
            </div>
            <div className={styles.businessCard}>
              <div className={styles.iconWrapper}>🤝</div>
              <h3>장애인 복지</h3>
              <p>장애인의 자립과 사회 참여를 돕기 위한 다양한 지원 프로그램을 운영합니다.</p>
            </div>
            <div className={styles.businessCard}>
              <div className={styles.iconWrapper}>🏘️</div>
              <h3>지역사회 복지</h3>
              <p>지역 주민들의 삶의 질 향상을 위해 지역 맞춤형 복지 사업을 전개합니다.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Notice & Activity Section */}
      <section id="notice" className={`section ${styles.noticeSection}`}>
        <div className="container">
          <div className={styles.noticeContainer}>
            <div className={styles.noticeBox}>
              <div className={styles.noticeHeader}>
                <h3>최신 공지사항</h3>
                <Link href="#more" className={styles.moreLink}>더보기 +</Link>
              </div>
              <ul className={styles.noticeList}>
                <li>
                  <Link href="#">
                    <span className={styles.noticeTitle}>2026년 상반기 장학생 선발 안내</span>
                    <span className={styles.noticeDate}>2026.04.25</span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className={styles.noticeTitle}>사랑의 김장 나눔 봉사활동 참여자 모집</span>
                    <span className={styles.noticeDate}>2026.04.20</span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className={styles.noticeTitle}>솔로몬 복지재단 신규 후원계좌 안내</span>
                    <span className={styles.noticeDate}>2026.04.15</span>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <span className={styles.noticeTitle}>제 10회 이웃사랑 바자회 개최 결과</span>
                    <span className={styles.noticeDate}>2026.04.05</span>
                  </Link>
                </li>
              </ul>
            </div>
            
            <div className={styles.noticeBox}>
              <div className={styles.noticeHeader}>
                <h3>활동 갤러리</h3>
                <Link href="#more" className={styles.moreLink}>더보기 +</Link>
              </div>
              <div className={styles.galleryGrid}>
                <div className={styles.galleryItem}>
                  <div className={styles.galleryPlaceholder}>📸</div>
                  <p>어르신 봄나들이</p>
                </div>
                <div className={styles.galleryItem}>
                  <div className={styles.galleryPlaceholder}>📸</div>
                  <p>지역아동센터 봉사</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className={`section ${styles.supportSection}`}>
        <div className="container">
          <div className={styles.supportContent}>
            <h2>당신의 나눔이 기적을 만듭니다</h2>
            <p>
              커피 한 잔의 여유를 나누어 주시면, 누군가에게는 내일을 살아갈 힘이 됩니다.<br />
              정기후원, 일시후원 모두 큰 힘이 됩니다.
            </p>
            <div className={styles.supportActions}>
              <button className="btn btn-primary btn-large">정기 후원하기</button>
              <button className="btn btn-outline btn-large" style={{borderColor: 'white', color: 'white'}}>일시 후원하기</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
