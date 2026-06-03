"use client";

import { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';

export default function SupportApplyPage() {
  const [formData, setFormData] = useState({
    supportType: '정기후원', // 정기후원 or 일시후원
    amount: '10000', // 후원금액
    customAmount: '',
    name: '',
    birthDate: '',
    mobile: '',
    email: '',
    zipcode: '',
    address: '',
    addressDetail: '',
    payMethod: '신용카드', // 신용카드 or 자동이체(CMS)
    cardNum1: '',
    cardNum2: '',
    cardNum3: '',
    cardNum4: '',
    cvc: '',
    bankName: '',
    accountNum: '',
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
    const finalAmount = formData.amount === 'custom' ? formData.customAmount : formData.amount;
    if (!finalAmount || isNaN(finalAmount) || parseInt(finalAmount) <= 0) {
      alert('올바른 후원 금액을 입력해 주세요.');
      return;
    }
    alert(`따뜻한 마음에 감사드립니다! ${parseInt(finalAmount).toLocaleString()}원 후원 신청이 완료되었습니다.`);
    console.log('Sponsorship Form Submitted:', formData);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.badge}>나눔의 동참</span>
        <h1 className={styles.pageTitle}>후원 신청서 작성</h1>
        <p className={styles.pageDesc}>
          여러분의 작은 정성이 모여 소외된 이웃들에게 평생 잊지 못할 희망과 기적을 선물합니다.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        {/* 1. 후원 유형 및 금액 설정 */}
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>1. 후원 정보 설정</h2>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>후원 구분 <span className={styles.required}>*</span></label>
            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input type="radio" name="supportType" value="정기후원" checked={formData.supportType === '정기후원'} onChange={handleChange} /> 매월 정기후원
              </label>
              <label className={styles.radioLabel}>
                <input type="radio" name="supportType" value="일시후원" checked={formData.supportType === '일시후원'} onChange={handleChange} /> 1회 일시후원
              </label>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>후원 금액 선택 <span className={styles.required}>*</span></label>
            <div className={styles.amountGrid}>
              {['10000', '20000', '30000', '50000', '100000'].map((amt) => (
                <label key={amt} className={`${styles.amountCard} ${formData.amount === amt ? styles.activeAmount : ''}`}>
                  <input type="radio" name="amount" value={amt} checked={formData.amount === amt} onChange={handleChange} className={styles.hiddenRadio} />
                  {parseInt(amt).toLocaleString()} 원
                </label>
              ))}
              <label className={`${styles.amountCard} ${formData.amount === 'custom' ? styles.activeAmount : ''}`}>
                <input type="radio" name="amount" value="custom" checked={formData.amount === 'custom'} onChange={handleChange} className={styles.hiddenRadio} />
                직접 입력
              </label>
            </div>
            
            {formData.amount === 'custom' && (
              <div className={styles.customAmountWrapper}>
                <input type="number" name="customAmount" className={styles.input} placeholder="금액 직접 입력 (원 단위)" value={formData.customAmount} onChange={handleChange} required />
                <span className={styles.inputUnit}>원</span>
              </div>
            )}
          </div>
        </section>

        {/* 2. 후원자 인적 사항 */}
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>2. 후원자 인적 사항</h2>
          
          <div className={styles.row}>
            <div className={styles.col}>
              <div className={styles.formGroup}>
                <label className={styles.label}>후원자명 <span className={styles.required}>*</span></label>
                <input type="text" name="name" className={styles.input} placeholder="이름 입력" required value={formData.name} onChange={handleChange} />
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
                <label className={styles.label}>휴대전화 <span className={styles.required}>*</span></label>
                <input type="tel" name="mobile" className={styles.input} placeholder="010-0000-0000" required value={formData.mobile} onChange={handleChange} />
              </div>
            </div>
            <div className={styles.col}>
              <div className={styles.formGroup}>
                <label className={styles.label}>이메일</label>
                <input type="email" name="email" className={styles.input} placeholder="example@email.com" value={formData.email} onChange={handleChange} />
              </div>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>주소 (기부금영수증 발송용)</label>
            <div className={styles.addressGroup}>
              <div className={styles.zipcodeRow}>
                <input type="text" name="zipcode" className={styles.input} placeholder="우편번호" style={{ width: '120px' }} value={formData.zipcode} onChange={handleChange} readOnly />
                <button type="button" className={styles.btnZipcode}>우편번호 검색</button>
              </div>
              <input type="text" name="address" className={styles.input} placeholder="기본 주소" value={formData.address} onChange={handleChange} readOnly />
              <input type="text" name="addressDetail" className={styles.input} placeholder="상세 주소를 입력해주세요" value={formData.addressDetail} onChange={handleChange} />
            </div>
          </div>
        </section>

        {/* 3. 결제 방식 및 정보 */}
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>3. 후원금 결제 정보</h2>
          
          <div className={styles.formGroup}>
            <label className={styles.label}>결제 수단 <span className={styles.required}>*</span></label>
            <div className={styles.radioGroup}>
              <label className={styles.radioLabel}>
                <input type="radio" name="payMethod" value="신용카드" checked={formData.payMethod === '신용카드'} onChange={handleChange} /> 신용카드 결제
              </label>
              <label className={styles.radioLabel}>
                <input type="radio" name="payMethod" value="자동이체" checked={formData.payMethod === '자동이체'} onChange={handleChange} /> CMS 계좌 자동이체
              </label>
            </div>
          </div>

          {formData.payMethod === '신용카드' ? (
            <div className={styles.cardInfoGroup}>
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
            </div>
          ) : (
            <div className={styles.bankInfoGroup}>
              <div className={styles.row}>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>은행명 <span className={styles.required}>*</span></label>
                    <select name="bankName" className={styles.select} value={formData.bankName} onChange={handleChange} required>
                      <option value="">은행 선택</option>
                      <option value="신한은행">신한은행</option>
                      <option value="국민은행">KB국민은행</option>
                      <option value="우리은행">우리은행</option>
                      <option value="하나은행">하나은행</option>
                      <option value="농협은행">NH농협은행</option>
                      <option value="기업은행">IBK기업은행</option>
                    </select>
                  </div>
                </div>
                <div className={styles.col}>
                  <div className={styles.formGroup}>
                    <label className={styles.label}>계좌번호 <span className={styles.required}>*</span></label>
                    <input type="text" name="accountNum" className={styles.input} placeholder="'-' 제외하고 입력" value={formData.accountNum} onChange={handleChange} required />
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* 4. 약관 및 개인정보 동의 */}
        <section className={styles.formSection}>
          <h2 className={styles.sectionTitle}>4. 개인정보 동의 및 서명</h2>
          <div className={styles.agreementBox}>
            솔로몬 복지재단은 수집된 개인정보를 기부금영수증 발행 및 기부 안내 목적으로 소중히 관리하며, 개인정보보호법에 의거하여 안전하게 보관합니다.
            <br/><br/>
            1. 수집 항목: 성명, 생년월일, 연락처, 주소, 이메일, 신용카드 또는 은행 결제 정보<br/>
            2. 보유 및 이용 기간: 기부 종료일 또는 신청자 요청 시 즉시 파기 (단, 세무 신고 의무 기간인 5년 동안 기부 영수증 발급 목적의 필수 정보 보관)<br/>
            3. 기부금은 법인세법 제24조 및 소득세법 제34조에 의거하여 기부금영수증 발행을 통한 소득 공제 혜택을 받으실 수 있습니다.
          </div>
          <div className={styles.formGroup}>
            <label className={styles.checkboxLabel} style={{ fontWeight: 'bold' }}>
              <input type="checkbox" name="agreement" required checked={formData.agreement} onChange={handleChange} />
              위 개인정보 처리 및 기부자동이체 동의서 내용을 이해하고 동의합니다. <span className={styles.required}>*</span>
            </label>
          </div>
        </section>

        <button type="submit" className={styles.submitBtn}>
          후원 동참 신청하기
        </button>
      </form>
    </div>
  );
}
