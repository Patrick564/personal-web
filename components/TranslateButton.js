import style from '../styles/TranslateButton.module.css'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons'

const TranslateButton = () => {
  const { locale, asPath } = useRouter()

  return (
    <div className={style.button}>
      <Link href={asPath} locale={locale === 'en' ? 'es' : 'en'} passHref>
        <a>
          <FontAwesomeIcon className={style.icon} icon={faLanguage} />
        </a>
      </Link>
    </div>
  )
}

export default TranslateButton
