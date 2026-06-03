'use client';

import React, { useState } from 'react';
import styles from '../page.module.css'; // Reuses main partners styles
import applyStyles from './apply.module.css'; // Custom styling for application form
import KoreaMapMockup from '@/components/KoreaMapMockup';
import Link from 'next/link';
import { useParams } from 'next/navigation';

// Mock partner data filtered by category
const categoryInfo = {
  'medical': {
    title: '복지협력의료기관',
    desc: '의료 취약계층 어르신 및 장애인분들께 무료 진료 및 의료 서비스를 제공하는 협력 병원/의원입니다.',
    tag: '의료'
  },
  'welfare': {
    title: '복지참여기관',
    desc: '다양한 복지 혜택과 맞춤 서비스를 제공하며 따뜻한 보살핌을 나누는 파트너 기관들입니다.',
    tag: '복지'
  },
  'discount': {
    title: '회원할인기관',
    desc: '솔로몬 복지카드 소지자에게 특별 할인 혜택을 제공하는 착한 소상공인 매장들을 소개합니다.',
    tag: '할인'
  },
  'contribution': {
    title: '사회공헌참여기관',
    desc: '지속 가능한 나눔과 기업의 사회적 책임(CSR)을 함께 실천하는 아름다운 기업 및 단체들입니다.',
    tag: '공헌'
  }
};

const regions = [
  { id: 'seoul', name: '서울' },
  { id: 'gyeonggi', name: '경기' },
  { id: 'gangwon', name: '강원' },
  { id: 'chungnam', name: '충남' },
  { id: 'chungbuk', name: '충북' },
  { id: 'jeonbuk', name: '전북' },
  { id: 'jeonnam', name: '전남' },
  { id: 'gyeongbuk', name: '경북' },
  { id: 'gyeongnam', name: '경남' },
  { id: 'busan', name: '부산' },
  { id: 'jeju', name: '제주' },
];

const mockPartnersByCategory = {
  seoul: [
    { id: 1, name: '서울제일 정형외과의원', desc: '관절 및 척추 무료 정밀 진료 지원', category: 'medical' },
    { id: 2, name: '행복한 요양 주야간보호센터', desc: '독거어르신 데이케어 제공', category: 'welfare' },
    { id: 3, name: '맑은안경원 강남점', desc: '복지카드 회원 안경 20% 특별 할인', category: 'discount' },
    { id: 4, name: '드림푸드 시스템', desc: '매월 결식아동 도시락 500개 기부', category: 'contribution' },
  ],
  gyeonggi: [
    { id: 5, name: '경기 나눔 이비인후과의원', desc: '보청기 구매 연계 청력 검진 지원', category: 'medical' },
    { id: 6, name: '푸른 초원 장애인자립센터', desc: '발달장애인 직업 교육 참여', category: 'welfare' },
    { id: 7, name: '착한 베이커리 수원점', desc: '복지카드 회원 전품목 15% 할인', category: 'discount' },
  ],
  busan: [
    { id: 8, name: '부산 바른 치과의원', desc: '취약계층 임플란트 시술 비용 지원', category: 'medical' },
    { id: 9, name: '행복한 동행 사회적협동조합', desc: '소외계층 가사대행 서비스', category: 'welfare' },
  ]
};

export default function PartnerSubPage() {
  const { category } = useParams();
  const [selectedRegion, setSelectedRegion] = useState('seoul');

  // Application form state
  const [applyForm, setApplyForm] = useState({
    orgName: '',
    orgType: '의료기관',
    representative: '',
    tel: '',
    email: '',
    address: '',
    desc: '',
    agreement: false
  });

  const info = categoryInfo[category];

  const handleRegionSelect = (id) => {
    setSelectedRegion(id);
  };

  const handleApplyChange = (e) => {
    const { name, value, type, checked } = e.target;
    setApplyForm({
      ...applyForm,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();
    if (!applyForm.agreement) {
      alert('개인정보 동의서 및 신용 확인에 동의해 주세요.');
      return;
    }
    alert('제휴기관 신청서가 성공적으로 접수되었습니다. 담당자가 빠른 시일 내에 연락드리겠습니다.');
    setApplyForm({
      orgName: '',
      orgType: '의료기관',
      representative: '',
      tel: '',
      email: '',
      address: '',
      desc: '',
      agreement: false
    });
  };

  // If the category is 'apply', render the registration form
  if (category === 'apply') {
    return (
      <div className={applyStyles.container}>
        <div className={applyStyles.header}>
          <span className={applyStyles.badge}>상생과 나눔</span>
          <h1 className={applyStyles.pageTitle}>제휴기관 신청</h1>
          <p className={applyStyles.pageDesc}>
            솔로몬 복지재단과 손을 잡고 따뜻한 나눔 공동체를 이끌어갈 병원, 약국, 소상공인, 기업을 찾습니다.
          </p>
        </div>

        <form onSubmit={handleApplySubmit} className={applyStyles.form}>
          <section className={applyStyles.formSection}>
            <h2 className={applyStyles.sectionTitle}>기관/업체 정보</h2>
            
            <div className={applyStyles.row}>
              <div className={applyStyles.col}>
                <div className={applyStyles.formGroup}>
                  <label className={applyStyles.label}>기관명 / 업체명 <span className={applyStyles.required}>*</span></label>
                  <input type="text" name="orgName" className={applyStyles.input} placeholder="예: 솔로몬 의원" required value={applyForm.orgName} onChange={handleApplyChange} />
                </div>
              </div>
              <div className={applyStyles.col}>
                <div className={applyStyles.formGroup}>
                  <label className={applyStyles.label}>제휴 구분 <span className={applyStyles.required}>*</span></label>
                  <select name="orgType" className={applyStyles.select} value={applyForm.orgType} onChange={handleApplyChange} required>
                    <option value="의료기관">복지협력의료기관 (병원, 약국 등)</option>
                    <option value="참여기관">복지참여기관 (복지센터 등)</option>
                    <option value="할인매장">회원할인기관 (안경원, 음식점, 학원 등)</option>
                    <option value="사회공헌">사회공헌참여기관 (기업, 재단 등)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className={applyStyles.row}>
              <div className={applyStyles.col}>
                <div className={applyStyles.formGroup}>
                  <label className={applyStyles.label}>대표자명 <span className={applyStyles.required}>*</span></label>
                  <input type="text" name="representative" className={applyStyles.input} placeholder="대표자 이름" required value={applyForm.representative} onChange={handleApplyChange} />
                </div>
              </div>
              <div className={applyStyles.col}>
                <div className={applyStyles.formGroup}>
                  <label className={applyStyles.label}>대표 전화번호 <span className={applyStyles.required}>*</span></label>
                  <input type="tel" name="tel" className={applyStyles.input} placeholder="02-0000-0000" required value={applyForm.tel} onChange={handleApplyChange} />
                </div>
              </div>
            </div>

            <div className={applyStyles.formGroup}>
              <label className={applyStyles.label}>이메일 주소 <span className={applyStyles.required}>*</span></label>
              <input type="email" name="email" className={applyStyles.input} placeholder="contact@company.com" required value={applyForm.email} onChange={handleApplyChange} />
            </div>

            <div className={applyStyles.formGroup}>
              <label className={applyStyles.label}>소재지 주소 <span className={applyStyles.required}>*</span></label>
              <input type="text" name="address" className={applyStyles.input} placeholder="상세 주소 입력" required value={applyForm.address} onChange={handleApplyChange} />
            </div>

            <div className={applyStyles.formGroup}>
              <label className={applyStyles.label}>주요 제휴 참여 내용 기술 <span className={applyStyles.required}>*</span></label>
              <textarea name="desc" className={applyStyles.textarea} rows="4" placeholder="저소득층 무료 진료 지원, 복지카드 지참 회원 15% 할인 등 구체적인 지원 방안을 기술해 주세요." required value={applyForm.desc} onChange={handleApplyChange}></textarea>
            </div>
          </section>

          <section className={applyStyles.formSection}>
            <h2 className={applyStyles.sectionTitle}>개인정보 수집 및 동의</h2>
            <div className={applyStyles.agreementBox}>
              솔로몬 복지재단은 상호 협력 협약 및 원활한 상담 처리를 위해 신청 업체의 최소한의 개인정보를 수집 및 이용하고 있습니다.
              <br/><br/>
              1. 수집 항목: 기관명, 대표자명, 전화번호, 이메일, 주소 등<br/>
              2. 목적: 제휴 신청 접수, 심사 결과 안내, 제휴 협약 조율<br/>
              3. 보유 및 이용 기간: 제휴 철회 또는 신청 반려 시까지 (승인 시 제휴 종료 시까지 보관)
            </div>
            <div className={applyStyles.formGroup}>
              <label className={applyStyles.checkboxLabel}>
                <input type="checkbox" name="agreement" required checked={applyForm.agreement} onChange={handleApplyChange} />
                위 제휴기관 개인정보 수집 및 처리 방침에 동의합니다. <span className={applyStyles.required}>*</span>
              </label>
            </div>
          </section>

          <button type="submit" className={applyStyles.submitBtn}>제휴 신청서 제출</button>
        </form>
      </div>
    );
  }

  // Fallback / standard categories
  if (!info) {
    return (
      <div style={{ padding: '150px 20px', textAlign: 'center' }}>
        <h2>올바르지 않은 접근입니다.</h2>
        <Link href="/" style={{ color: 'var(--primary-dark)', fontWeight: 'bold', marginTop: '20px', display: 'inline-block' }}>메인으로 이동</Link>
      </div>
    );
  }

  // Filter partners in the selected region for this category
  const allPartnersInRegion = mockPartnersByCategory[selectedRegion] || [];
  const filteredPartners = allPartnersInRegion.filter(p => p.category === category);
  const selectedRegionName = regions.find(r => r.id === selectedRegion)?.name || '';

  return (
    <div className={styles.container}>
      {/* Left Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarTitle}>지역별 제휴기관</div>
        <ul className={styles.menuList}>
          {regions.map((region) => (
            <li 
              key={region.id}
              className={`${styles.menuItem} ${selectedRegion === region.id ? styles.active : ''}`}
              onClick={() => handleRegionSelect(region.id)}
            >
              {selectedRegion === region.id ? '📍 ' : ''}{region.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className={styles.mainContent}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>{info.title} 안내</h1>
          <p className={styles.pageDescription}>{info.desc}</p>
        </div>

        <div className={styles.contentSplit}>
          {/* Map Section */}
          <div className={styles.mapSection}>
            <KoreaMapMockup 
              selectedRegion={selectedRegion} 
              onRegionSelect={handleRegionSelect} 
            />
          </div>

          {/* List Section */}
          <div className={styles.listSection}>
            <div className={styles.listHeader}>
              <h2 className={styles.listTitle}>
                <span style={{ fontSize: '1.5rem' }}>📍</span> 
                {selectedRegionName} 지역 {info.title} ({filteredPartners.length})
              </h2>
            </div>
            
            <div className={styles.partnerList}>
              {filteredPartners.length > 0 ? (
                filteredPartners.map(partner => (
                  <div key={partner.id} className={styles.partnerCard}>
                    <div className={styles.partnerName}>{partner.name}</div>
                    <div className={styles.partnerDesc}>{partner.desc}</div>
                    <span className={styles.partnerTag} style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary-dark)' }}>{info.tag}</span>
                  </div>
                ))
              ) : (
                <div className={styles.emptyState}>
                  <div className={styles.emptyStateIcon}>🏢</div>
                  <div>현재 이 지역에 등록된 {info.title}이 없습니다.</div>
                  <div style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                    곧 더 많은 제휴기관과 함께할 예정입니다.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
