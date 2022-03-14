import style from '../styles/TranslateButton.module.css'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'

const TranslateButton = () => {
  const { locale, asPath } = useRouter()

  return (
    <Link href={asPath} locale={locale === 'en' ? 'es' : 'en'}>
      <div className={style.button}>
        <a className={style.img}>
          <FontAwesomeIcon icon={faLanguage} style={{ width: '48px', height: '40px' }} />
        </a>
      </div>
    </Link>
  )
}

export default TranslateButton
