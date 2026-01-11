'use client'

import React from 'react'

export default function PdfViewer({ src }: { src?: string }) {
  return (
    <div style={{ border: '1px dashed #ccc', padding: 12 }}>
      PDFビューア（プレースホルダ）{src ? `: ${src}` : ''}
    </div>
  )
}
