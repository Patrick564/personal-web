import useTranslation from 'next-translate/useTranslation'
import style from '../styles/About.module.css'

const About = () => {
  const { t } = useTranslation('about')

  return (
    <div className={style.about} id='about'>
      <h1 className={style.title}>{t('title')}</h1>
      <p className={style.explanation}>
        {t('explanationOne')}
      </p>
      <p className={style.explanation}>
        {t('explanationTwo')}
      </p>
      <a className={style.download} href={t('resumeLink')} target='_blank'>
        {t('button')}
      </a>
    </div>
  )
}

export default About
