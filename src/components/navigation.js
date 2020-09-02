import React from 'react'
import { Link } from 'gatsby'
import styles from './navigation.module.css'

export default () => (
  <header style={{width: 990, margin: 'auto'}}>
    <div style={{ display: 'flex', justifyContent: 'flex-end', marginLeft: 50 }}>
      <h1 style={{marginRight: 'auto'}}><strong>Tech Mesia</strong></h1>

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
