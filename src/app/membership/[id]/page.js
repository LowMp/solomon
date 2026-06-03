"use client";

import { useState, use } from 'react';
import styles from './page.module.css';
import { notFound } from 'next/navigation';

export default function GroupOrCorporateApplication({ params }) {
  const { id } = use(params);

  const isGroup = id === 'group';
  const isCorporate = id === 'corporate';

  if (!isGroup && !isCorporate) {
    notFound();
  }

  const pageTitle = isGroup ? "단체 회원카드 신청" : "기업 회원카드 신청";
  const orgTypeLabel = isGroup ? "단체명" : "기업명";
  const bizNumLabel = isGroup ? "고유번호 / 사업자등록번호" : "사업자등록번호";

  const [formData, setFormData] = useState({
    orgName: '',
    bizNum: '',
    representative: '',
    zipcode: '',
    address: '',
    addressDetail: '',
    contactName: '',
    contactMobile: '',
    contactEmail: '',
    memberCount: '',
    agreement: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreement) {
      alert('개인정보 수집 및 이용에 동의해야 합니다.');
      return;
    }
    alert(`${pageTitle} 신청이 접수되었습니다. 담당자가 확인 후 빠른 시일 내에 연락드리겠습니다.`);
    console.log(`${id} membership applied:`, formData);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>{pageTitle}</h1>
      
      <form onSubmit={handleSubmit}>
        {/* 1. 단체/기업 기본 정보 */}
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>1. 기본 정보</h2>
          
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.formGroup}>
                <label className={styles.label}>{orgTypeLabel} <span className={styles.required}>*</span></label>
                <input type="text" name="orgName" className={styles.input} required value={formData.orgName} onChange={handleChange} placeholder={`${orgTypeLabel} 입력`} />
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.formGroup}>
                <label className={styles.label}>{bizNumLabel} <span className={styles.required}>*</span></label>
                <input type="text" name="bizNum" className={styles.input} required value={formData.bizNum} onChange={handleChange} placeholder="'-' 제외하고 입력" />
              </div>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.formGroup}>
                <label className={styles.label}>대표자명 <span className={styles.required}>*</span></label>
                <input type="text" name="representative" className={styles.input} required value={formData.representative} onChange={handleChange} placeholder="대표자 이름" />
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.formGroup}>
                <label className={styles.label}>신청인원수 <span className={styles.required}>*</span></label>
                <input type="number" name="memberCount" className={styles.input} required value={formData.memberCount} onChange={handleChange} placeholder="명 단위 입력" />
              </div>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>소재지 주소 <span className={styles.required}>*</span></label>
            <div className={styles.addressGroup}>
              <div className={styles.zipcodeRow}>
                <input type="text" name="zipcode" className={styles.input} placeholder="우편번호" style={{ width: '120px' }} value={formData.zipcode} onChange={handleChange} required readOnly />
                <button type="button" className={styles.btnZipcode}>우편번호 검색</button>
              </div>
              <input type="text" name="address" className={styles.input} placeholder="기본 주소" value={formData.address} onChange={handleChange} required readOnly />
              <input type="text" name="addressDetail" className={styles.input} placeholder="상세 주소를 입력해주세요" value={formData.addressDetail} onChange={handleChange} required />
            </div>
          </div>
        </section>

        {/* 2. 담당자 정보 */}
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>2. 실무 담당자 정보</h2>
          
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.formGroup}>
                <label className={styles.label}>담당자명 <span className={styles.required}>*</span></label>
                <input type="text" name="contactName" className={styles.input} required value={formData.contactName} onChange={handleChange} placeholder="담당자 이름" />
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.formGroup}>
                <label className={styles.label}>담당자 휴대전화 <span className={styles.required}>*</span></label>
                <input type="tel" name="contactMobile" className={styles.input} required value={formData.contactMobile} onChange={handleChange} placeholder="010-0000-0000" />
              </div>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>담당자 이메일 <span className={styles.required}>*</span></label>
            <input type="email" name="contactEmail" className={styles.input} required value={formData.contactEmail} onChange={handleChange} placeholder="example@domain.com" />
          </div>
        </section>

        {/* 3. 명단 및 서류 첨부 */}
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>3. 증빙 서류 및 신청자 명단 첨부</h2>
          <p style={{marginBottom: '16px', fontSize: '0.9rem', color: 'var(--text-light)'}}>
            {isGroup ? '단체 고유번호증 또는 고유단체 등록 확인 서류와 일괄 발급받을 회원 명단 파일을 업로드해 주세요.' : '기업 사업자등록증 사본과 회원카드를 일괄 발급받을 임직원 명단 파일을 업로드해 주세요.'}
          </p>
          <div className={styles.formGroup}>
            <div className={styles.fileRow}>
              <span className={styles.fileLabel}>증빙 서류 사본:</span>
              <input type="file" className={styles.input + ' ' + styles.fileInput} required />
            </div>
            <div className={styles.fileRow}>
              <span className={styles.fileLabel}>신청자 명단 엑셀:</span>
              <input type="file" className={styles.input + ' ' + styles.fileInput} required />
            </div>
          </div>
        </section>

        {/* 4. 개인정보 동의 */}
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>4. 약관 및 개인정보 동의</h2>
          <div className={styles.agreementBox}>
            솔로몬 복지재단은 개인정보보호법에 따라 단체/기업 신청 과정에서 기재된 담당자 및 수혜 예정 임직원/회원들의 정보를 소중히 관리하며, 일괄 카드 발급을 마치는 즉시 안전하게 보관 또는 파기 처리합니다.
            <br/><br/>
            1. 수집 개인정보 항목: 담당자 성명, 연락처, 이메일, 신청자 명단 속 성명, 생년월일 등<br/>
            2. 수집 목적: 단체/기업 회원카드 일괄 발급, 수혜 대상 조회 및 안내<br/>
            3. 보유 및 이용 기간: 카드 발급 업무 완료 및 승인 처리 후 즉시 파기 (단, 재단 사후 모니터링을 위해 기본 기관 정보는 보관)
          </div>
          <div className={styles.formGroup}>
            <label className={styles.checkboxLabel} style={{ fontWeight: 'bold' }}>
              <input type="checkbox" name="agreement" required checked={formData.agreement} onChange={handleChange} />
              위 개인정보 수집 및 단체 회원 정보 활용 방침에 동의합니다. <span className={styles.required}>*</span>
            </label>
          </div>
        </section>

        <button type="submit" className={styles.submitBtn}>
          {pageTitle} 신청하기
        </button>
      </form>
    </div>
  );
}
