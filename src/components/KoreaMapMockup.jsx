'use client';

import React, { useState } from 'react';
import './KoreaMapMockup.css';

const regions = [
  { id: 'seoul', name: '서울', x: 90, y: 60, size: 25 },
  { id: 'gyeonggi', name: '경기', x: 100, y: 110, size: 30 },
  { id: 'gangwon', name: '강원', x: 170, y: 70, size: 35 },
  { id: 'chungnam', name: '충남', x: 70, y: 160, size: 28 },
  { id: 'chungbuk', name: '충북', x: 130, y: 150, size: 25 },
  { id: 'jeonbuk', name: '전북', x: 80, y: 220, size: 28 },
  { id: 'jeonnam', name: '전남', x: 60, y: 280, size: 32 },
  { id: 'gyeongbuk', name: '경북', x: 180, y: 160, size: 35 },
  { id: 'gyeongnam', name: '경남', x: 150, y: 240, size: 32 },
  { id: 'busan', name: '부산', x: 190, y: 280, size: 22 },
  { id: 'jeju', name: '제주', x: 40, y: 350, size: 20 },
];

export default function KoreaMapMockup({ onRegionSelect, selectedRegion }) {
  const [hoveredRegion, setHoveredRegion] = useState(null);

  return (
    <div className="map-container">
      <svg viewBox="0 0 250 400" className="korea-svg">
        <defs>
          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        
        {/* Connecting lines for aesthetic network effect */}
        <path 
          d="M90 60 L100 110 L170 70 M100 110 L130 150 L180 160 L170 70 M100 110 L70 160 L80 220 L150 240 L180 160 M80 220 L60 280 M150 240 L190 280" 
          stroke="#e2e8f0" 
          strokeWidth="2" 
          fill="none" 
          strokeDasharray="4 4"
        />

        {regions.map((region) => {
          const isSelected = selectedRegion === region.id;
          const isHovered = hoveredRegion === region.id;
          
          return (
            <g 
              key={region.id}
              className={`region-group ${isSelected ? 'selected' : ''}`}
              onMouseEnter={() => setHoveredRegion(region.id)}
              onMouseLeave={() => setHoveredRegion(null)}
              onClick={() => onRegionSelect(region.id, region.name)}
            >
              <circle
                cx={region.x}
                cy={region.y}
                r={region.size}
                className="region-shape"
                fill={isSelected ? '#3b82f6' : isHovered ? '#93c5fd' : '#f8fafc'}
                stroke={isSelected ? '#2563eb' : isHovered ? '#60a5fa' : '#cbd5e1'}
                strokeWidth="2"
                filter={isHovered || isSelected ? 'url(#glow)' : ''}
              />
              <text
                x={region.x}
                y={region.y}
                textAnchor="middle"
                alignmentBaseline="middle"
                fill={isSelected ? '#ffffff' : '#334155'}
                fontSize="12"
                fontWeight="700"
                className="region-text"
              >
                {region.name}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
