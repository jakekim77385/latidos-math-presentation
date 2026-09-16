import React from 'react'

export function PanamaFlag({ width = 26, height = 18, style = {} }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 36 24"
      style={{
        borderRadius: 3,
        verticalAlign: 'middle',
        display: 'inline-block',
        boxShadow: '0 1px 3px rgba(0,0,0,0.18)',
        border: '1px solid rgba(0,0,0,0.08)',
        flexShrink: 0,
        ...style
      }}
    >
      <rect width="18" height="12" fill="#ffffff" />
      <rect x="18" width="18" height="12" fill="#c21e2d" />
      <rect y="12" width="18" height="12" fill="#003087" />
      <rect x="18" y="12" width="18" height="12" fill="#ffffff" />
      {/* Blue star in top left quarter */}
      <polygon points="9,2.8 10,5.4 12.8,5.4 10.5,7 11.4,9.6 9,8 6.6,9.6 7.5,7 5.2,5.4 8,5.4" fill="#003087" />
      {/* Red star in bottom right quarter */}
      <polygon points="27,14.8 28,17.4 30.8,17.4 28.5,19 29.4,21.6 27,20 24.6,21.6 25.5,19 23.2,17.4 26,17.4" fill="#c21e2d" />
    </svg>
  )
}
