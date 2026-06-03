import styles from './page.module.css';
import Link from 'next/link';

export const metadata = {
  title: "회원카드신청 - 솔로몬 복지재단",
  description: "솔로몬 복지재단의 회원이 되셔서 다양한 복지 혜택과 제휴기관 할인을 누려보세요.",
};

const cards = [
  {
    title: "개인 회원카드",
    desc: "개인 수혜자 본인 또는 보호자가 직접 신청하여 일상 속 의료, 복지, 소상공인 연계 혜택을 누릴 수 있습니다.",
    link: "/membership/individual",
    buttonText: "개인 신청하기",
    icon: "👤"
  },
  {
    title: "단체 회원카드",
    desc: "경로당, 사회복지시설, 시민단체 등 공동체 회원분들이 일괄적으로 혜택을 받으실 수 있도록 지원하는 단체 카드입니다.",
    link: "/membership/group",
    buttonText: "단체 신청하기",
    icon: "👥"
  },
  {
    title: "기업 회원카드",
    desc: "사회적 상생과 공헌에 참여하는 기업의 임직원분들이나 기업 연계 수혜 대상을 위한 복지 제휴 카드입니다.",
    link: "/membership/corporate",
    buttonText: "기업 신청하기",
    icon: "🏢"
  }
];

export default function MembershipLandingPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.badge}>솔로몬 회원 혜택</span>
        <h1 className={styles.pageTitle}>회원카드 신청 안내</h1>
        <p className={styles.pageDesc}>
          솔로몬 복지재단 회원카드를 발급받으시면 전국의 협력 의료기관 무료 검진 지원, 소상공인 연계 혜택, 다양한 생활밀착형 복지 지원 혜택을 한 번에 받으실 수 있습니다.
        </p>
      </div>

      <div className={styles.grid}>
        {cards.map((card, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.cardIcon}>{card.icon}</div>
            <h2 className={styles.cardTitle}>{card.title}</h2>
            <p className={styles.cardDesc}>{card.desc}</p>
            <Link href={card.link} className={styles.cardBtn}>
              {card.buttonText}
            </Link>
          </div>
        ))}
      </div>

      <div className={styles.infoBox}>
        <h3>💡 회원카드 발급 안내 및 구비서류</h3>
        <ul>
          <li>**개인 신청**: 신분증 사본, 복지 지원대상 증빙서류 (필요시)</li>
          <li>**단체 신청**: 단체 고유번호증 또는 사업자등록증 사본, 신청자 명단</li>
          <li>**기업 신청**: 기업 사업자등록증 사본, 재직 증명서 및 신청 명단</li>
          <li>카드 발급 및 배송은 신청 접수 후 심사를 거쳐 영업일 기준 5~7일 소요됩니다.</li>
        </ul>
      </div>
    </div>
  );
}
