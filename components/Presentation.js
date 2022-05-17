import useTranslation from 'next-translate/useTranslation'
import style from '../styles/Presentation.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Presentation = () => {
  const { t } = useTranslation('presentation')

  return (
    <div className={style.container} id='presentation'>
      <h1 className={style.title}>
        <span>{t('titleOne')}</span>
        <span>{t('titleTwo')}</span>
      </h1>

      <h3>{t('subtitle')}</h3>

      <a className={style.more} href='#about'>
        <FontAwesomeIcon size='2x' icon={faArrowDown} className='fa-bounce' />
      </a>
    </div>
  )
}

export default Presentation
