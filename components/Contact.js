import Image from 'next/image'

import style from '../styles/Contact.module.css'

import githubSvg from '../public/github-brands.svg'
import linkedinSvg from '../public/linkedin-brands.svg'
import telegramSvg from '../public/telegram-brands.svg'

const Contact = () => {
  return (
    <div className={style.contact}>
      <h2 className={style.title}>Contact me</h2>

      <div className={style.contactContainer}>
        <a className={style.contactOption} href='https://www.linkedin.com/in/patrick-vilchez/' target='_blank'>
          <Image src={linkedinSvg} width='48px' height='48px' />
          linkedin.com/in/patrick-vilchez
        </a>

        <a className={style.contactOption} href='https://github.com/Patrick564' target='_blank'>
          <Image src={githubSvg} width='48px' height='48px' />
          github.com/Patrick564
        </a>

        {/* <a className={style.contactOption} href='#'>
          <Image src={telegramSvg} width='48px' height='48px' />
          tme.example
        </a> */}
      </div>
    </div>
  )
}

export default Contact
