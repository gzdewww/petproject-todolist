import React from 'react'
import styles from './Header.module.css'

export default function Header() {
  return (
    <nav className={styles['header-container']}>
      <ul className={styles.header}>

        <li className={styles['header-element']}>Главная</li>
        <li className={styles['header-element']}>Мои списки</li>
        <li className={styles['header-element']} styles={{background: 'red'}}>Профиль</li>

      </ul>
    </nav>
  )
}