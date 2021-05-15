import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <header className={styles.header}>
    <div className={styles.header_wrapper}>
      <h1>Tech Mesia</h1>
      <nav role="navigation">
        <ul className={styles.navigation}>
          <li className={styles.navigationItem}>
            <Link style={{ textDecoration: 'none' }} to="/">Home</Link>
          </li>
          <li className={styles.navigationItem}>
            <Link style={{ textDecoration: 'none' }} to="/blog/">Blog</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)
