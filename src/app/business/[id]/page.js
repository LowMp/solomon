import styles from './page.module.css';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const businessData = {
  'homecare': {
    title: "방문요양지원 사업",
    summary: "거동이 불편하신 어르신들의 댁으로 전문 요양보호사가 직접 방문하여 신체 활동 및 가사 활동을 지원합니다.",
    icon: "🏠",
    target: "장기요양등급(1~5등급)을 판정받으신 만 65세 이상 어르신 또는 노인성 질환자",
    benefit: "식사 지원, 개인위생 관리, 동행 서비스, 정서적 지원 및 일상 생활 밀착 관리",
    process: ["상담 및 신청 접수", "가정 방문 조사 및 상태 파악", "요양 등급 확인 및 연계", "전문 요양보호사 매칭 및 서비스 개시"]
  },
  'medical': {
    title: "의료비지원 사업",
    summary: "갑작스러운 질병이나 수술로 인해 경제적 어려움에 처한 취약계층의 의료 부담을 덜어드립니다.",
    icon: "🏥",
    target: "중위소득 80% 이하 가구 중 입원 치료나 정밀 검사가 필요한 저소득 취약계층",
    benefit: "본인부담금 내 의료 실비 지원 (검사비, 입원비, 수술비 등 최대 200만원 지원)",
    process: ["의료 기관 진단서 및 증빙 제출", "재단 심사 및 지원 여부 결정", "의료비 지원금 집행", "사후 모니터링"]
  },
  'emergency60': {
    title: "60세 비상지원 사업",
    summary: "만 60세 이상 무직 어르신 중 긴급한 위기 상황에 대처할 능력이 부족한 분들을 신속히 구조하고 안정적 삶을 지원합니다.",
    icon: "🚨",
    target: "만 60세 이상 미취업 상태의 독거어르신 또는 긴급 위기 상황에 처한 어르신",
    benefit: "긴급 생계비 즉시 지급 (최대 50만원), 임시 주거 비용 지원, 법률/복지 상담 연계",
    process: ["위기 현장 접수 (핫라인)", "긴급 현장 출동 및 긴급 구호 물품 지급", "생계 지원금 심사 및 지급", "장기 복지 체계 연계"]
  },
  'cataract': {
    title: "백내장 수술비지원 사업",
    summary: "노년기 시력 저하로 고통받고 있으나 경제적 문제로 수술을 망설이는 어르신들의 밝은 눈을 되찾아 드립니다.",
    icon: "👁️",
    target: "만 60세 이상 실명 예방 및 시력 회복을 위한 백내장 수술이 시급한 저소득층 어르신",
    benefit: "안 검진 비용 전체 및 백내장 단안/양안 수술비 본인부담금 100% 지원",
    process: ["안과 진료 및 수술 의뢰서 수령", "수술비 지원 신청서 작성 및 증빙 제출", "지원 승인 후 지정 병원 수술 진행", "사후 검진"]
  },
  'dental': {
    title: "치과 진료비 지원 사업",
    summary: "치아 결손으로 임플란트나 틀니가 필요하지만 고액의 치료비로 인해 영양 불균형을 겪는 어르신을 돕습니다.",
    icon: "🦷",
    target: "만 60세 이상 취약계층 중 틀니, 임플란트, 보철 치료 등이 긴급한 분",
    benefit: "치과 진료비 실비 지원 (틀니 최대 100만원, 임플란트 개당 최대 80만원 지원)",
    process: ["치과 진단 및 견적서 발급", "재단 승인 신청", "치료 진행 및 비용 정산", "사후 만족도 조사"]
  },
  'hearing-aid': {
    title: "보청기 구입비 지원 사업",
    summary: "난청으로 사회적 소통에 단절을 겪는 분들에게 청력 검사를 제공하고 보청기 구입비를 보조해 드립니다.",
    icon: "🦻",
    target: "청각 장애 등급이 없거나 기준 미달로 정부 지원을 받지 못하는 난청 질환 어르신 및 장애인",
    benefit: "개인 맞춤형 보청기 구입 비용 실비 보조 (가구당 20만원 ~ 최대 50만원 지원)",
    process: ["이비인후과 청력 검사 결과 제출", "보청기 상담 및 신청", "구매 보조금 지급", "피팅 지원"]
  },
  'insurance-arrears': {
    title: "체납 건강보험료지원 사업",
    summary: "생계 곤란으로 국민건강보험료를 장기 체납하여 의료 혜택이 중단될 위기에 처한 저소득층을 구제합니다.",
    icon: "💵",
    target: "건강보험료 체납으로 급여 제한 상태에 놓인 중위소득 60% 이하 저소득 가구",
    benefit: "체납된 건강보험료의 일부 혹은 전액 대납 (최대 100만원 한도) 및 의료 혜택 정상화",
    process: ["국민건강보험공단 체납 사실 확인서 발급", "재단 신청 접수 및 긴급성 심사", "보험료 직접 대납", "의료 수급권 복원 확인"]
  },
  'oxygen': {
    title: "산소발생기 복지지원 사업",
    summary: "만성 폐쇄성 폐질환 등 호흡기 장애로 가정에서 산소 치료가 필수적이지만 기기 임대료가 부담되는 이웃을 돕습니다.",
    icon: "💨",
    target: "호흡기 관련 장애로 재택 산소 치료 처방전을 받은 저소득층 환자",
    benefit: "가정용 산소 발생기 임대료 및 전기세 일부 지원 (월 5만원 ~ 15만원 이내)",
    process: ["전문의 산소치료 처방전 수령", "산소발생기 렌탈 업체 견적서 발급", "재단 비용 승인", "기기 설치 및 비용 지급"]
  },
  'longterm-care': {
    title: "장기 요양비 지원 사업",
    summary: "장기 요양 등급을 받고 요양원이나 요양병원 등의 시설을 이용할 때 발생하는 간병비 및 본인부담금을 보조합니다.",
    icon: "👵",
    target: "노인장기요양기관 이용자 중 가계 형편상 요양 비용 지출에 큰 부담을 느끼는 기초/차상위 등 가구",
    benefit: "매월 발생하는 장기요양 본인부담금의 20%~50% 지원 (월 최대 30만원, 최장 1년)",
    process: ["장기요양인정서 및 이용 명세서 발급", "지원 신청 및 소득 증빙", "매달 비용 확인 후 지원금 입금", "분기별 모니터링"]
  },
  'overseas': {
    title: "해외지원사업",
    summary: "국경을 넘어 식수 부족, 빈곤, 재난 등으로 고통받는 개발도상국 아동과 주민들에게 지속 가능한 도움을 줍니다.",
    icon: "🌐",
    target: "식수/위생 환경이 열악하거나 교육 기회를 잃은 개발도상국 취약 지역 주민 및 아동",
    benefit: "식수 정화 시설(우물) 건립, 기초 의약품 지원, 학교 리모델링 및 아동 결연 후원 연계",
    process: ["해외 현지 NGO 파트너십 구축 및 소요 파악", "식수 및 위생 프로젝트 예산 집행", "현지 공사 및 보건 교육 전개", "활동 보고서 작성"]
  }
};

export default async function BusinessDetailPage({ params }) {
  const { id } = await params;
  const data = businessData[id];

  if (!data) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <div className={styles.backLink}>
        <Link href="/#business">← 주요 사업 안내로 돌아가기</Link>
      </div>

      <div className={styles.header}>
        <span className={styles.badge}>솔로몬 사업소개</span>
        <h1 className={styles.title}>
          <span className={styles.titleIcon}>{data.icon}</span> {data.title}
        </h1>
        <p className={styles.summary}>{data.summary}</p>
      </div>

      <div className={styles.grid}>
        <div className={styles.mainInfo}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>지원 대상</h2>
            <div className={styles.box}>
              <p>{data.target}</p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>주요 지원 내용</h2>
            <div className={styles.box + ' ' + styles.highlightBox}>
              <p>{data.benefit}</p>
            </div>
          </section>
        </div>

        <div className={styles.sidebar}>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>신청 및 진행 절차</h2>
            <div className={styles.timeline}>
              {data.process.map((step, idx) => (
                <div key={idx} className={styles.timelineItem}>
                  <div className={styles.timelineNumber}>{idx + 1}</div>
                  <div className={styles.timelineContent}>
                    <p className={styles.timelineStepTitle}>Step {idx + 1}</p>
                    <p className={styles.timelineStepDesc}>{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className={styles.actionArea}>
        <h3>해당 복지 사업의 도움이 필요하신가요?</h3>
        <p>망설이지 마시고 언제든지 복지지원 신청서나 회원카드를 작성해 주세요.</p>
        <div className={styles.actionButtons}>
          <Link href="/grant" className="btn btn-primary btn-large">복지지원 신청하기</Link>
          <Link href="/membership" className="btn btn-outline btn-large">회원카드 신청하기</Link>
        </div>
      </div>
    </div>
  );
}
