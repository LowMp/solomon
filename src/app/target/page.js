import styles from './page.module.css';
import Link from 'next/link';

export const metadata = {
  title: "지원대상 - 솔로몬 복지재단",
  description: "솔로몬 복지재단의 따뜻한 도움을 받는 지원대상들을 소개합니다.",
};

const targets = [
  {
    icon: "🧒",
    title: "아동·청소년 복지 대상",
    desc: "미래를 짊어질 아이들이 환경에 구애받지 않고 건강하게 성장할 수 있도록 돕습니다.",
    items: [
      "청소년 장학금 지원 대상자",
      "한부모 가정 아동 및 청소년",
      "소년·소녀 가장",
      "소상공인 연계 학원비 및 교육 생계지원 대상자"
    ]
  },
  {
    icon: "👵",
    title: "노인 복지 대상",
    desc: "고령화 사회 속에서 소외받는 어르신들의 활기차고 편안한 노후 생활을 지원합니다.",
    items: [
      "만 60세 이상 무직자 어르신",
      "독거노인 및 기초생활보장 수급 대상자",
      "치과, 안과, 이비인후과 등 의료 지원이 필요한 어르신",
      "요양 및 돌봄 서비스 지원이 시급한 어르신"
    ]
  },
  {
    icon: "🤝",
    title: "장애인 복지 대상",
    desc: "신체적·정신적 불편함으로 인해 겪는 사회적 장벽을 낮추고 자립을 지원합니다.",
    items: [
      "산소 발생기 및 양압기 복지지원 대상자",
      "보청기 및 인공와우 구입비 지원 대상 장애인",
      "정기적인 신장 투석 및 병원 진료비 지원 대상자",
      "일상생활 보조기기 및 자립 지원 프로그램 필요 장애인"
    ]
  },
  {
    icon: "🏪",
    title: "소상공인 연계 복지 대상",
    desc: "지역 소상공인과 연계하여 주민들의 실생활에 직접적인 도움이 되는 혜택을 제공합니다.",
    items: [
      "재단 연계 안경원, 약국 이용 회원",
      "반려동물을 위한 동물병원 및 애완용품점 이용 회원",
      "복지 할인 참여 식당, 식료품점 및 카페 이용자",
      "지역 골목상권 활성화 및 상생 참여 소상공인"
    ]
  }
];

export default function TargetPage() {
  return (
    <div className={styles.container}>
      <div className={styles.headerSection}>
        <h1 className={styles.pageTitle}>지원대상 안내</h1>
        <p className={styles.pageDesc}>
          솔로몬 복지재단은 사회적 관심과 보살핌이 필요한 다양한 이웃들에게 희망의 손길을 내밀고 있습니다.
        </p>
      </div>

      <div className={styles.grid}>
        {targets.map((target, idx) => (
          <div key={idx} className={styles.card}>
            <div className={styles.icon}>{target.icon}</div>
            <h2 className={styles.cardTitle}>{target.title}</h2>
            <p className={styles.cardDesc}>{target.desc}</p>
            <div className={styles.divider}></div>
            <ul className={styles.itemList}>
              {target.items.map((item, itemIdx) => (
                <li key={itemIdx} className={styles.item}>
                  <span className={styles.bullet}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.ctaSection}>
        <h2>지원이 필요하신가요?</h2>
        <p>복지지원신청 메뉴를 통해 다양한 지원 혜택을 신속하게 신청해 보실 수 있습니다.</p>
        <div className={styles.ctaButtons}>
          <Link href="/grant" className="btn btn-primary btn-large">복지지원 신청하기</Link>
          <Link href="/membership" className="btn btn-outline btn-large">회원카드 신청하기</Link>
        </div>
      </div>
    </div>
  );
}
