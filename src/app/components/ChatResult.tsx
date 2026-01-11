'use client'

import React from 'react'

export default function ChatResult({ messages }: { messages?: string[] }) {
  return (
    <div style={{ borderTop: '1px solid #ddd', paddingTop: 12 }}>
      {messages && messages.length > 0 ? (
        messages.map((m, i) => (
          <div key={i} style={{ padding: 8, background: i % 2 ? '#fafafa' : '#fff' }}>
            {m}
          </div>
        ))
      ) : (
        <div style={{ color: '#666' }}>結果がありません</div>
      )}
    </div>
  )
}
