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
      const expireTime = new Date().getTime() + 24 * 60 * 60 * 1000;
      localStorage.setItem("welfare_popup_hide_until", expireTime.toString());
    }
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={() => handleClose(false)}>
      <div className="popup-content image-type" onClick={(e) => e.stopPropagation()}>
        <div className="popup-image-container">
          <img 
            src="/welfare_popup_image.jpg" 
            alt="청각장애인 보청기 지원사업안내" 
            className="popup-main-image"
          />
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
