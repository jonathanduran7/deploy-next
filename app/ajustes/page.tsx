import Link from 'next/link'
import React from 'react'

export default function Ajustes() {
  return (
    <div>
      <h1>Ajustes</h1>
      <button
        style={{
          padding: '1rem',
        }}
      >
        <Link href="/">
          Ir a home
        </Link>
      </button>

    </div>

  )
}
