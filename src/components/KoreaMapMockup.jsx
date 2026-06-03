'use client';

import React, { useState } from 'react';
import './KoreaMapMockup.css';

const regions = [
  { id: 'gyeonggi', name: '경기', x: 85, y: 105, path: 'M 50 40 L 110 40 L 120 70 L 120 110 L 95 120 L 75 110 L 50 90 Z' },
  { id: 'seoul', name: '서울', x: 85, y: 75, path: 'M 72 75 A 13 13 0 1 0 98 75 A 13 13 0 1 0 72 75' },
  { id: 'gangwon', name: '강원', x: 160, y: 90, path: 'M 110 40 L 210 40 L 210 110 L 180 150 L 140 140 L 120 110 L 120 70 Z' },
  { id: 'chungnam', name: '충남', x: 75, y: 165, path: 'M 50 90 L 75 110 L 95 120 L 120 160 L 120 180 L 90 210 L 40 210 L 40 145 Z' },
  { id: 'chungbuk', name: '충북', x: 135, y: 150, path: 'M 120 110 L 140 140 L 180 150 L 175 190 L 130 190 L 120 160 L 95 120 Z' },
  { id: 'jeonbuk', name: '전북', x: 90, y: 225, path: 'M 40 210 L 90 210 L 120 180 L 130 190 L 145 220 L 135 250 L 45 250 Z' },
  { id: 'jeonnam', name: '전남', x: 85, y: 290, path: 'M 45 250 L 135 250 L 140 290 L 115 330 L 40 330 Z' },
  { id: 'gyeongbuk', name: '경북', x: 185, y: 180, path: 'M 180 150 L 210 110 L 230 180 L 230 240 L 190 240 L 175 190 Z' },
  { id: 'gyeongnam', name: '경남', x: 160, y: 260, path: 'M 175 190 L 190 240 L 190 275 L 140 290 L 135 250 L 145 220 Z' },
  { id: 'busan', name: '부산', x: 205, y: 260, path: 'M 190 240 L 220 240 L 220 270 L 190 275 Z' },
  { id: 'jeju', name: '제주', x: 90, y: 360, path: 'M 65 360 A 25 13 0 1 0 115 360 A 25 13 0 1 0 65 360' },
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
              <path
                d={region.path}
                className="region-shape"
                fill={isSelected ? 'var(--primary-color)' : isHovered ? 'var(--accent-light)' : '#f8fafc'}
                stroke={isSelected ? 'var(--primary-dark)' : isHovered ? 'var(--accent-color)' : '#cbd5e1'}
                strokeWidth="1.5"
                filter={isHovered || isSelected ? 'url(#glow)' : ''}
              />
              <text
                x={region.x}
                y={region.y}
                textAnchor="middle"
                alignmentBaseline="middle"
                fill={isSelected ? '#ffffff' : '#334155'}
                fontSize="11"
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
