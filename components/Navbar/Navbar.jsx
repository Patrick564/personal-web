import styles from './Navbar.module.css'

import useTranslation from 'next-translate/useTranslation'

const Navbar = () => {
  const { t } = useTranslation('navbar')

  return (
    <nav className={styles.navigation}>
      <div className={styles.container}>
        <a className={styles.link} href="#about">{t('about')}</a>
        <a className={styles.link} href="#projects">{t('projects')}</a>
        <a className={styles.link} href="#contact">{t('contact')}</a>
      </div>
    </nav>
  )
}

export default Navbar
