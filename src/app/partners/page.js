'use client';

import React, { useState } from 'react';
import styles from './page.module.css';
import KoreaMapMockup from '@/components/KoreaMapMockup';

// 목업 데이터
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

const mockPartners = {
  seoul: [
    { id: 1, name: '서울 제일 복지센터', desc: '어르신 돌봄 및 식사 지원', tag: '돌봄' },
    { id: 2, name: '강남 사랑 나눔 의원', desc: '의료 취약계층 무료 진료', tag: '의료' },
  ],
  gyeonggi: [
    { id: 3, name: '경기 희망 푸드뱅크', desc: '결식아동 도시락 지원', tag: '식품' },
  ],
  busan: [
    { id: 4, name: '해운대 청소년 쉼터', desc: '위기 청소년 보호 및 상담', tag: '교육' },
    { id: 5, name: '부산 시민 병원', desc: '저소득층 수술비 지원', tag: '의료' },
  ]
};

export default function PartnersPage() {
  const [selectedRegion, setSelectedRegion] = useState('seoul');

  const handleRegionSelect = (id, name) => {
    setSelectedRegion(id);
  };

  const currentPartners = mockPartners[selectedRegion] || [];
  const selectedRegionName = regions.find(r => r.id === selectedRegion)?.name || '';

  return (
    <div className={styles.container}>
      {/* 왼쪽 사이드바 (목차) */}
      <aside className={styles.sidebar}>
        <div className={styles.sidebarTitle}>지역별 제휴업체</div>
        <ul className={styles.menuList}>
          {regions.map((region) => (
            <li 
              key={region.id}
              className={`${styles.menuItem} ${selectedRegion === region.id ? styles.active : ''}`}
              onClick={() => handleRegionSelect(region.id, region.name)}
            >
              {selectedRegion === region.id ? '📍 ' : ''}{region.name}
            </li>
          ))}
        </ul>
      </aside>

      {/* 메인 콘텐츠 영역 */}
      <main className={styles.mainContent}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>제휴업체 안내</h1>
          <p className={styles.pageDescription}>
            솔로몬 복지재단과 함께 따뜻한 나눔을 실천하는 전국의 제휴업체들을 소개합니다.
          </p>
        </div>

        <div className={styles.contentSplit}>
          {/* 지도 영역 */}
          <div className={styles.mapSection}>
            <KoreaMapMockup 
              selectedRegion={selectedRegion} 
              onRegionSelect={handleRegionSelect} 
            />
          </div>

          {/* 리스트업 영역 */}
          <div className={styles.listSection}>
            <div className={styles.listHeader}>
              <h2 className={styles.listTitle}>
                <span style={{ fontSize: '1.5rem' }}>📍</span> 
                {selectedRegionName} 지역 제휴업체 ({currentPartners.length})
              </h2>
            </div>
            
            <div className={styles.partnerList}>
              {currentPartners.length > 0 ? (
                currentPartners.map(partner => (
                  <div key={partner.id} className={styles.partnerCard}>
                    <div className={styles.partnerName}>{partner.name}</div>
                    <div className={styles.partnerDesc}>{partner.desc}</div>
                    <span className={styles.partnerTag}>{partner.tag}</span>
                  </div>
                ))
              ) : (
                <div className={styles.emptyState}>
                  <div className={styles.emptyStateIcon}>🏢</div>
                  <div>현재 등록된 제휴업체가 없습니다.</div>
                  <div style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
                    곧 더 많은 제휴업체와 함께할 예정입니다.
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
