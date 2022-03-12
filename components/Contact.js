import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

import style from '../styles/Contact.module.css'

const Contact = () => {
  const { t } = useTranslation('contact')

  return (
    <div className={style.contact}>
      <h2 className={style.title}>{t('title')}</h2>

      <div className={style.contactContainer}>
        <a className={style.contactOption} href='https://t.me/pod794' target='_blank'>
          <Image src='/telegram-brands.svg' width='48' height='48' alt='Telegram logo' />
          t.me/pod794
        </a>

        <a className={style.contactOption} href='https://www.linkedin.com/in/patrick-vilchez/' target='_blank'>
          <Image src='/linkedin-brands.svg' width='48' height='48' alt='Linkedin logo' />
          linkedin.com/in/patrick-vilchez
        </a>

        <a className={style.contactOption} href='https://github.com/Patrick564' target='_blank'>
          <Image src='/github-brands.svg' width='48' height='48' alt='Github logo' />
          github.com/Patrick564
        </a>
      </div>
    </div>
  )
}

export default Contact
