'use client'

import React, { useState } from 'react'

export default function SearchInput() {
  const [q, setQ] = useState('')

  return (
    <div style={{ marginTop: 12, marginBottom: 12 }}>
      <input
        placeholder="検索..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
        style={{ padding: 8, width: 300 }}
      />
      <button style={{ marginLeft: 8, padding: '8px 12px' }}>検索</button>
    </div>
  )
}
