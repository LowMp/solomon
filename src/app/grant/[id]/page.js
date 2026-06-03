"use client";

import { useState, use } from 'react';
import styles from './page.module.css';
import { notFound } from 'next/navigation';

export default function GrantFormPage({ params }) {
  const { id } = use(params);

  const isHearingAid = id === 'free-hearing-aid';
  const isGeneralGrant = id === 'apply';

  if (!isHearingAid && !isGeneralGrant) {
    notFound();
  }

  const pageTitle = isHearingAid ? "무료보청기 지원 신청" : "복지 지원금 신청";

  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    gender: '남',
    mobile: '',
    zipcode: '',
    address: '',
    addressDetail: '',
    // Hearing Aid specific
    hearingLevel: '중도난청', // 난청 등급
    disabilityRegistered: '아니오', // 청각장애 등록 여부
    // General Grant specific
    grantCategory: '의료비지원', // 신청 분야
    targetReason: '', // 신청 사유
    incomeLevel: '기초생활수급자', // 소득 수준
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
    alert(`${pageTitle}서 접수가 성공적으로 완료되었습니다. 기재해주신 번호로 심사 결과를 개별 안내해 드리겠습니다.`);
    console.log(`${id} welfare form submitted:`, formData);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>{pageTitle}</h1>

      <form onSubmit={handleSubmit}>
        {/* 1. 신청자 기본 인적사항 */}
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>1. 신청인(수혜대상자) 정보</h2>
          
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.formGroup}>
                <label className={styles.label}>신청인 이름 <span className={styles.required}>*</span></label>
                <input type="text" name="name" className={styles.input} required value={formData.name} onChange={handleChange} placeholder="이름 입력" />
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.formGroup}>
                <label className={styles.label}>생년월일 <span className={styles.required}>*</span></label>
                <input type="date" name="birthDate" className={styles.input} required value={formData.birthDate} onChange={handleChange} />
              </div>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.formGroup}>
                <label className={styles.label}>성별 <span className={styles.required}>*</span></label>
                <div className={styles.radioGroup}>
                  <label className={styles.radioLabel}>
                    <input type="radio" name="gender" value="남" checked={formData.gender === '남'} onChange={handleChange} /> 남자
                  </label>
                  <label className={styles.radioLabel}>
                    <input type="radio" name="gender" value="여" checked={formData.gender === '여'} onChange={handleChange} /> 여자
                  </label>
                </div>
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.formGroup}>
                <label className={styles.label}>연락처 <span className={styles.required}>*</span></label>
                <input type="tel" name="mobile" className={styles.input} required value={formData.mobile} onChange={handleChange} placeholder="010-0000-0000" />
              </div>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>거주지 주소 <span className={styles.required}>*</span></label>
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

        {/* 2. 각 신청서별 특화 항목 */}
        {isHearingAid && (
          <section className={styles.formSection}>
            <h2 className={styles.sectionTitle}>2. 청력 및 청각 상태 정보</h2>
            
            <div className={styles.row}>
              <div className={styles.col}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>청각 상태 <span className={styles.required}>*</span></label>
                  <select name="hearingLevel" className={styles.select} value={formData.hearingLevel} onChange={handleChange} required>
                    <option value="경도난청">경도 난청 (대화 시 소리가 종종 안 들림)</option>
                    <option value="중도난청">중도 난청 (일반적인 크기의 대화가 힘듦)</option>
                    <option value="고도난청">고도 난청 (귀에 대고 크게 말해야 들림)</option>
                    <option value="기타">기타 / 진단 전</option>
                  </select>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>정부 청각장애인 등록 여부 <span className={styles.required}>*</span></label>
                  <div className={styles.radioGroup}>
                    <label className={styles.radioLabel}>
                      <input type="radio" name="disabilityRegistered" value="예" checked={formData.disabilityRegistered === '예'} onChange={handleChange} /> 등록 장애인
                    </label>
                    <label className={styles.radioLabel}>
                      <input type="radio" name="disabilityRegistered" value="아니오" checked={formData.disabilityRegistered === '아니오'} onChange={handleChange} /> 미등록 / 해당없음
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {isGeneralGrant && (
          <section className={styles.formSection}>
            <h2 className={styles.sectionTitle}>2. 지원 신청 분야 및 사유</h2>
            
            <div className={styles.row}>
              <div className={styles.col}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>신청 지원금 분야 <span className={styles.required}>*</span></label>
                  <select name="grantCategory" className={styles.select} value={formData.grantCategory} onChange={handleChange} required>
                    <option value="의료비지원">의료비 지원 (진료 및 수술 비용)</option>
                    <option value="60세비상지원">만 60세 이상 긴급 생계비 지원</option>
                    <option value="요양비지원">장기 요양비 및 간병인비 지원</option>
                    <option value="체납건강보험료">체납 건강보험료 대납 지원</option>
                    <option value="산소발생기">산소발생기/호흡기 복지 지원</option>
                    <option value="기타">기타 긴급 복지 지원</option>
                  </select>
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>소득 상태 <span className={styles.required}>*</span></label>
                  <select name="incomeLevel" className={styles.select} value={formData.incomeLevel} onChange={handleChange} required>
                    <option value="기초생활수급자">기초생활수급 대상자</option>
                    <option value="차상위계층">차상위 계층</option>
                    <option value="일반취약계층">차상위 초과 일반 취약 가구</option>
                    <option value="일반">해당사항 없음 (경제적 곤란 상태)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>상세 신청 사유 <span className={styles.required}>*</span></label>
              <textarea name="targetReason" className={styles.textarea} rows="4" required value={formData.targetReason} onChange={handleChange} placeholder="경제적 어려움, 질병 상태 등 긴급 지원이 필요한 이유를 기재해 주세요."></textarea>
            </div>
          </section>
        )}

        {/* 3. 증빙 첨부서류 */}
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>3. 증빙서류 등록</h2>
          <p style={{marginBottom: '16px', fontSize: '0.9rem', color: 'var(--text-light)'}}>
            주민등록등본 사본, 소득 증빙 서류(수급자 증명서 등), 그리고 {isHearingAid ? '청력 검사 진단서나 이비인후과 의뢰서' : '의료비 청구서 또는 체납 사실 고지서'} 사본을 첨부해 주세요.
          </p>
          <div className={styles.formGroup}>
            <div className={styles.fileRow}>
              <span className={styles.fileLabel}>기본 서류 (주민등록등본):</span>
              <input type="file" className={styles.input + ' ' + styles.fileInput} required />
            </div>
            <div className={styles.fileRow}>
              <span className={styles.fileLabel}>복지 증빙 서류:</span>
              <input type="file" className={styles.input + ' ' + styles.fileInput} required />
            </div>
            <div className={styles.fileRow}>
              <span className={styles.fileLabel}>기타 질병/비용 고지서:</span>
              <input type="file" className={styles.input + ' ' + styles.fileInput} />
            </div>
          </div>
        </section>

        {/* 4. 개인정보 수집 동의 */}
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>4. 개인정보 제공 동의</h2>
          <div className={styles.agreementBox}>
            솔로몬 복지재단은 지원 신청 심사 및 자격 검증을 위해 신청자의 개인정보(성명, 생년월일, 연락처, 세부 자격 조건 및 진단 정보)를 수집하여 심사 목적으로만 활용하며, 개인정보보호법에 의거 안전하게 보관 및 폐기할 것을 약속드립니다.
            <br/><br/>
            1. 개인정보 수집자: 재단법인 솔로몬 복지재단<br/>
            2. 보유 및 이용 기간: 복지지원 심사 및 지급 완료일로부터 3년 (세무 및 감사 목적을 위한 보존)<br/>
            3. 동의 거부권: 귀하는 개인정보 제공에 동의하지 않을 권리가 있으나, 동의하지 않을 경우 복지지원 혜택 심사 및 집행이 불가합니다.
          </div>
          <div className={styles.formGroup}>
            <label className={styles.checkboxLabel} style={{ fontWeight: 'bold' }}>
              <input type="checkbox" name="agreement" required checked={formData.agreement} onChange={handleChange} />
              위 개인정보 제공 및 활용 방침에 동의합니다. <span className={styles.required}>*</span>
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
