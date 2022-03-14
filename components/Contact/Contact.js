import style from '../../styles/Contact.module.css'

import useTranslation from 'next-translate/useTranslation'
import { faTelegram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import ContactCard from './ContactCard'

const CONTACT_OPTIONS = {
  telegram: {
    link: 'https://t.me/pod794',
    icon: faTelegram,
    text: 't.me/pod794',
  },
  linkedin: {
    link: 'https://linkedin.com/in/patrick-vilchez/',
    icon: faLinkedin,
    text: 'linkedin.com/in/patrick-vilchez',
  },
  github: {
    link: 'https://github.com/Patrick564',
    icon: faGithub,
    text: 'github.com/Patrick564',
  }
}

const Contact = () => {
  const { t } = useTranslation('contact')

  return (
    <div className={style.contact}>
      <h2 className={style.title}>{t('title')}</h2>

      <div className={style.contactContainer}>
        {Object.keys(CONTACT_OPTIONS).map((option) => {
          let { link, icon, text } = CONTACT_OPTIONS[option]
          return (
            <ContactCard
            key={option}
            link={link}
            icon={icon}
            text={text}
            cardStyle={style.contactOption}
            iconStyle={style.contactIcon}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Contact
