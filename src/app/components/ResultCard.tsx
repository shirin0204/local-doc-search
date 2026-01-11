'use client'

import React from 'react'

export default function ResultCard({ title, excerpt }: { title: string; excerpt?: string }) {
  return (
    <div style={{ border: '1px solid #eee', padding: 12, borderRadius: 6, marginBottom: 8 }}>
      <h3 style={{ margin: '0 0 6px 0' }}>{title}</h3>
      <p style={{ margin: 0, color: '#444' }}>{excerpt}</p>
    </div>
  )
}
