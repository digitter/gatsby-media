import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <header className={styles.header}>
    <div className={styles.header_wrapper}>
      <h1>
        <Link style={{ textDecoration: 'none' }} to="/">
          Tech Boyaki
         </Link>
      </h1>

      <nav role="navigation">
        <ul className={styles.navigation}>
          <li className={styles.navigationItem}>
            <Link style={{ textDecoration: 'none' }} to="/">Home</Link>
          </li>
          <li className={styles.navigationItem}>
            <Link style={{ textDecoration: 'none' }} to="/blog/">Blog</Link>
          </li>
          <li className={styles.navigationItem}>
            <Link style={{ textDecoration: 'none' }} to="/about/">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)
