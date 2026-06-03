"use client";

import React, { useState, useEffect } from "react";
import "./WelfarePopup.css";

export default function WelfarePopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hideUntil = localStorage.getItem("welfare_popup_hide_until");
    if (!hideUntil) {
      setIsOpen(true);
    } else {
      const now = new Date().getTime();
      if (now > parseInt(hideUntil, 10)) {
        setIsOpen(true);
      }
    }
  }, []);

  const handleClose = (hideForToday) => {
    if (hideForToday) {
      // Set expire time to 24 hours from now
      const expireTime = new Date().getTime() + 24 * 60 * 60 * 1000;
      localStorage.setItem("welfare_popup_hide_until", expireTime.toString());
    }
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={() => handleClose(false)}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup-header">
          <span className="popup-badge">공동 기획 지원사업</span>
          <h2>청각장애인 보청기 지원사업 안내</h2>
          <div className="popup-divider"></div>
        </div>

        <div className="popup-body">
          <p className="popup-intro">
            솔로몬 복지재단과 지정 이비인후과 및 보청기 전문 센터가 함께하여, 
            경제적인 부담으로 보청기 구입이 어려우신 청각장애인 분들을 지원해 드립니다.
          </p>

          <div className="popup-section">
            <h4 className="section-title">지원 대상</h4>
            <p className="section-text">
              <strong>청각장애 등록자</strong> (복지카드 소지자)<br />
              <span className="text-muted">* 기초생활수급자, 차상위계층, 일반 대상자 관계없이 신청 가능</span>
            </p>
          </div>

          <div className="popup-section">
            <h4 className="section-title">지원 내용</h4>
            <div className="table-responsive">
              <table className="popup-table">
                <thead>
                  <tr>
                    <th>구분</th>
                    <th>지원 혜택</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>보청기 내구연한 <strong>5년 경과</strong></td>
                    <td className="highlight-gold"><strong>20만원</strong> 지원</td>
                  </tr>
                  <tr>
                    <td>보청기 내구연한 <strong>5년 미경과</strong></td>
                    <td className="highlight-gold"><strong>30만원</strong> 지원</td>
                  </tr>
                  <tr>
                    <td><strong>양이(양측)</strong> 보청기 신청자</td>
                    <td className="highlight-gold"><strong>50만원</strong> 지원</td>
                  </tr>
                  <tr>
                    <td><strong>기관 특별 추천자</strong></td>
                    <td className="highlight-gold-bg">보청기 1대 <strong>무료 지원</strong></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="popup-section">
            <h4 className="section-title">신청 및 문의</h4>
            <p className="section-text">
              <strong>신청 방법 :</strong> 솔로몬 복지재단 또는 지정 연계 센터를 통하거나 개별 신청<br />
              <strong>문의처 :</strong> 솔로몬 복지재단 사무국 및 전국 연계 센터
            </p>
          </div>
        </div>

        <div className="popup-footer">
          <label className="checkbox-container">
            <input type="checkbox" id="today-hide-checkbox" onChange={(e) => handleClose(e.target.checked)} />
            <span className="checkmark"></span>
            오늘 하루 동안 보지 않기
          </label>
          <button className="popup-close-btn" onClick={() => handleClose(false)}>
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
