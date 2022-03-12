import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import style from '../styles/TranslateButton.module.css'

const TranslateButton = () => {
  const { locale, asPath } = useRouter()

  return (
      <Link href={asPath} locale={locale === 'en' ? 'es' : 'en'}>
    <div className={style.button}>
        <a className={style.img}><Image src='/language-solid.svg' width='48' height='40' /></a>
    </div>
      </Link>
  )
}

export default TranslateButton
