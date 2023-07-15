import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Hello World</h1>
      <button
        style={{
          padding: '1rem',
        }}
      >
        <Link href="/ajustes">
          Ir a ajustes
        </Link>
      </button>
    </div>
  )
}
