import styles from './page.module.css';
import Link from 'next/link';

export const metadata = {
  title: "복지지원신청 - 솔로몬 복지재단",
  description: "솔로몬 복지재단이 제공하는 다양한 복지지원 및 무료 보청기 혜택을 간편하게 신청해 보세요.",
};

const grantTypes = [
  {
    title: "무료보청기 신청",
    desc: "난청으로 고통받으시거나 청각 장애 진단을 받지 못해 정부 지원금 사각지대에 계신 어르신 및 취약계층 분들께 무료 보청기를 지원합니다.",
    link: "/grant/free-hearing-aid",
    buttonText: "무료보청기 신청서 작성",
    icon: "🦻"
  },
  {
    title: "지원금 신청",
    desc: "의료비, 긴급 생계비, 요양비, 산소발생기 사용료 등 솔로몬 복지재단이 제공하는 각 분야의 현금성/현물성 지원금을 신청하는 일반 폼입니다.",
    link: "/grant/apply",
    buttonText: "지원금 신청서 작성",
    icon: "💰"
  }
];

export default function GrantLandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.badge}>솔로몬 긴급 구호</span>
        <h1 className={styles.pageTitle}>복지지원 신청</h1>
        <p className={styles.pageDesc}>
          도움의 손길이 필요하신 어르신, 장애인, 취약계층 분들을 위해 정직하고 신속하게 심사하여 직접적인 혜택을 전해드립니다.
        </p>
      </div>

      <div className={styles.grid}>
        {grantTypes.map((type, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.cardIcon}>{type.icon}</div>
            <h2 className={styles.cardTitle}>{type.title}</h2>
            <p className={styles.cardDesc}>{type.desc}</p>
            <Link href={type.link} className={styles.cardBtn}>
              {type.buttonText}
            </Link>
          </div>
        ))}
      </div>

      <div className={styles.infoBox}>
        <h3>💡 지원 대상 및 심사 과정 안내</h3>
        <ul>
          <li>**신청 서류 심사**: 신청서가 접수되면 재단 내 심사 위원회에서 가계 소득 수준, 시급성 등을 다각도로 평가합니다.</li>
          <li>**현장 실사 및 상담**: 필요에 따라 재단 복지사가 직접 방문하여 생활 실태를 파악하는 방문 심사가 병행될 수 있습니다.</li>
          <li>**지원 결정 및 집행**: 지원이 결정된 회원님께는 개별 연락을 드리며, 지원금 지급 또는 무료 기기 보급을 시행합니다.</li>
          <li>서류 미비 시 심사가 지연될 수 있으므로, 해당 항목별 필수 증빙서류(소득 확인서, 진단서 등)를 반드시 첨부해 주세요.</li>
        </ul>
      </div>
    </div>
  );
}
