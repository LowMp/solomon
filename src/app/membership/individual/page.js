"use client";

import { useState } from 'react';
import styles from './page.module.css';

export default function IndividualApplication() {
  const [formData, setFormData] = useState({
    appType: '본인', // 신청구분: 본인 or 보호자
    beneficiaryName: '',
    birthDate: '',
    gender: '남',
    zipcode: '',
    address: '',
    addressDetail: '',
    mobile: '',
    homePhone: '',
    email: '',
    guardianName: '',
    guardianRel: '',
    guardianMobile: '',
    guardianHome: '',
    cardNum1: '',
    cardNum2: '',
    cardNum3: '',
    cardNum4: '',
    cvc: '',
    supportTargets: [],
    recommender: '',
    agreement: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'agreement') {
        setFormData({ ...formData, [name]: checked });
      } else {
        // Handle support targets array
        let updatedTargets = [...formData.supportTargets];
        if (checked) {
          updatedTargets.push(value);
        } else {
          updatedTargets = updatedTargets.filter(item => item !== value);
        }
        setFormData({ ...formData, supportTargets: updatedTargets });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agreement) {
      alert('개인정보 수집 및 이용에 동의해야 합니다.');
      return;
    }
    alert('신청이 완료되었습니다. (테스트 폼)');
    console.log('Form Data:', formData);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>개인 회원카드 신청</h1>
      
      <form onSubmit={handleSubmit}>
        {/* 수혜자 정보 */}
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>1. 수혜자 정보</h2>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>신청구분 <span className={styles.required}>*</span></label>
            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input type="radio" name="appType" value="본인" checked={formData.appType === '본인'} onChange={handleChange} /> 본인 신청
              </label>
              <label className={styles.radioLabel}>
                <input type="radio" name="appType" value="보호자" checked={formData.appType === '보호자'} onChange={handleChange} /> 보호자 신청
              </label>
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.formGroup}>
                <label className={styles.label}>수혜자명 <span className={styles.required}>*</span></label>
                <input type="text" name="beneficiaryName" className={styles.input} required value={formData.beneficiaryName} onChange={handleChange} placeholder="이름 입력" />
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.formGroup}>
                <label className={styles.label}>생년월일 <span className={styles.required}>*</span></label>
                <input type="date" name="birthDate" className={styles.input} required value={formData.birthDate} onChange={handleChange} />
              </div>
            </div>
          </div>

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

          <div className={styles.formGroup}>
            <label className={styles.label}>주소 <span className={styles.required}>*</span></label>
            <div className={styles.addressGroup}>
              <div className={styles.zipcodeRow}>
                <input type="text" name="zipcode" className={styles.input} placeholder="우편번호" style={{ width: '120px' }} value={formData.zipcode} onChange={handleChange} required readOnly />
                <button type="button" className={styles.btnZipcode}>우편번호 검색</button>
              </div>
              <input type="text" name="address" className={styles.input} placeholder="기본 주소" value={formData.address} onChange={handleChange} required readOnly />
              <input type="text" name="addressDetail" className={styles.input} placeholder="상세 주소를 입력해주세요" value={formData.addressDetail} onChange={handleChange} required />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.formGroup}>
                <label className={styles.label}>휴대전화 <span className={styles.required}>*</span></label>
                <input type="tel" name="mobile" className={styles.input} placeholder="010-0000-0000" value={formData.mobile} onChange={handleChange} required />
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.formGroup}>
                <label className={styles.label}>자택전화</label>
                <input type="tel" name="homePhone" className={styles.input} placeholder="02-000-0000" value={formData.homePhone} onChange={handleChange} />
              </div>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>이메일</label>
            <input type="email" name="email" className={styles.input} placeholder="example@email.com" value={formData.email} onChange={handleChange} />
          </div>
        </section>

        {/* 보호자 정보 (보호자 신청일 경우에만 표시되도록 하거나 공통으로 입력) */}
        {formData.appType === '보호자' && (
          <section className={styles.formSection}>
            <h2 className={styles.sectionTitle}>2. 보호자 정보</h2>
            <div className={styles.row}>
              <div className={styles.col}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>보호자명 <span className={styles.required}>*</span></label>
                  <input type="text" name="guardianName" className={styles.input} value={formData.guardianName} onChange={handleChange} required={formData.appType === '보호자'} />
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>수혜자와의 관계 <span className={styles.required}>*</span></label>
                  <input type="text" name="guardianRel" className={styles.input} placeholder="예: 자녀, 배우자" value={formData.guardianRel} onChange={handleChange} required={formData.appType === '보호자'} />
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.col}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>보호자 휴대전화 <span className={styles.required}>*</span></label>
                  <input type="tel" name="guardianMobile" className={styles.input} value={formData.guardianMobile} onChange={handleChange} required={formData.appType === '보호자'} />
                </div>
              </div>
              <div className={styles.col}>
                <div className={styles.formGroup}>
                  <label className={styles.label}>보호자 자택전화</label>
                  <input type="tel" name="guardianHome" className={styles.input} value={formData.guardianHome} onChange={handleChange} />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 결제/카드 정보 */}
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>{formData.appType === '보호자' ? '3' : '2'}. 카드 결제 정보</h2>
          <div className={styles.formGroup}>
            <label className={styles.label}>카드번호 <span className={styles.required}>*</span></label>
            <div className={styles.cardRow}>
              <input type="text" name="cardNum1" maxLength="4" className={`${styles.input} ${styles.cardInput}`} value={formData.cardNum1} onChange={handleChange} required />
              <span>-</span>
              <input type="text" name="cardNum2" maxLength="4" className={`${styles.input} ${styles.cardInput}`} value={formData.cardNum2} onChange={handleChange} required />
              <span>-</span>
              <input type="text" name="cardNum3" maxLength="4" className={`${styles.input} ${styles.cardInput}`} value={formData.cardNum3} onChange={handleChange} required />
              <span>-</span>
              <input type="text" name="cardNum4" maxLength="4" className={`${styles.input} ${styles.cardInput}`} value={formData.cardNum4} onChange={handleChange} required />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>CVC (카드 뒷면 3자리) <span className={styles.required}>*</span></label>
            <input type="password" name="cvc" maxLength="3" className={styles.input} style={{ width: '100px', letterSpacing: '3px' }} value={formData.cvc} onChange={handleChange} required />
          </div>
        </section>

        {/* 지원대상 선택 */}
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>{formData.appType === '보호자' ? '4' : '3'}. 지원대상 카테고리 (중복선택 가능) <span className={styles.required}>*</span></h2>
          <div className={styles.checkboxGroup}>
            {['노인복지', '아동/청소년복지', '장애인복지', '소상공인 연계복지', '기타 취약계층'].map(target => (
              <label key={target} className={styles.checkboxLabel}>
                <input type="checkbox" value={target} onChange={handleChange} /> {target}
              </label>
            ))}
          </div>
        </section>

        {/* 첨부파일 */}
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>{formData.appType === '보호자' ? '5' : '4'}. 증빙서류 첨부파일</h2>
          <p style={{marginBottom: '16px', fontSize: '0.9rem', color: 'var(--text-light)'}}>신분증 사본 및 증빙 서류를 업로드해 주세요. (최대 4개)</p>
          <div className={styles.formGroup}>
            {[1, 2, 3, 4].map(num => (
              <input key={num} type="file" className={styles.input + ' ' + styles.fileInput} />
            ))}
          </div>
        </section>

        {/* 추천인 */}
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>{formData.appType === '보호자' ? '6' : '5'}. 추천인 정보</h2>
          <div className={styles.formGroup}>
            <label className={styles.label}>추천인 이름 (선택)</label>
            <input type="text" name="recommender" className={styles.input} placeholder="추천인이 있는 경우 입력해주세요" value={formData.recommender} onChange={handleChange} />
          </div>
        </section>

        {/* 개인정보 동의 */}
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>{formData.appType === '보호자' ? '7' : '6'}. 개인정보 수집 및 이용 동의</h2>
          <div className={styles.agreementBox}>
            솔로몬 복지재단은 개인정보보호법에 따라 신청자의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보 처리방침을 수립·공개합니다.
            <br/><br/>
            1. 수집하는 개인정보 항목: 성명, 생년월일, 성별, 주소, 연락처, 카드정보, 증빙서류 등<br/>
            2. 개인정보 수집 및 이용 목적: 회원카드 발급, 본인 확인, 복지 혜택 제공 및 안내<br/>
            3. 개인정보 보유 및 이용 기간: 목적 달성 후 즉시 파기 (단, 관계 법령에 의거 보존할 필요가 있는 경우 해당 기간 동안 보존)<br/>
            4. 동의를 거부할 권리: 귀하는 개인정보 수집 동의를 거부할 수 있으나, 이 경우 회원카드 발급 및 혜택 제공이 제한될 수 있습니다.
          </div>
          <div className={styles.formGroup}>
            <label className={styles.checkboxLabel} style={{ fontWeight: 'bold' }}>
              <input type="checkbox" name="agreement" required checked={formData.agreement} onChange={handleChange} />
              위 개인정보 수집 및 이용 방침에 동의합니다. <span className={styles.required}>*</span>
            </label>
          </div>
        </section>

        <button type="submit" className={styles.submitBtn}>
          개인 회원카드 신청하기
        </button>
      </form>
    </div>
  );
}
