import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'

import style from '../styles/Projects.module.css'

const Projects = () => {
  const { t } = useTranslation('projects')

  return (
    <div className={style.projects}>
      <h2 className={style.title}>{t('title')}</h2>

      <div className={style.container}>
        <div className={style.project}>
          <h3>Planetarium (NASA API)</h3>

          <Image
            className={style.projectImg}
            src='/planetarium.png'
            width={500}
            height={250}
            alt='Planetarium project'
          />

          <p className={style.projectExplanation}>
            {t('planetariumExplanation')}
          </p>

          <div className={style.used}>
            <h4>{t('usedSubtitle')}</h4>
            <p>JavaScript | React | Styled-Components | Docker</p>
          </div>

          <div className={style.links}>
            <a className={style.link} href='https://planetarium-nasa-api.vercel.app' target='_blank'>
              {t('toPage')}
            </a>
            <a className={style.link} href='https://github.com/Patrick564/planetarium-nasa-api' target='_blank'>
              {t('toRepo')}
            </a>
          </div>
        </div>

        <div className={style.project}>
          <h3>Chat Room (Client)</h3>

          <Image
            className={style.projectImg}
            src='/chat-room.png'
            width={500}
            height={250}
            alt='Chat Room project'
          />

          <p className={style.projectExplanation}>
            {t('chatRoomExplanation')}
          </p>

          <div className={style.used}>
            <h4>{t('usedSubtitle')}</h4>
            <p>JavaScript | React | Styled-Components | Socket.io</p>
          </div>

          <div className={style.links}>
            <a className={style.link} href='https://chat-room-client-psi.vercel.app' target='_blank'>
              {t('toPage')}
            </a>
            <a className={style.link} href='https://github.com/Patrick564/chat-room-client' target='_blank'>
              {t('toRepo')}
            </a>
          </div>
        </div>

        <div className={style.project}>
          <h3>Contacts Calendar</h3>

          <Image
            className={style.projectImg}
            src='/contacts-calendar.png'
            width={500}
            height={250}
            alt="Contacts Calendar project"
            priority
          />

          <p className={style.projectExplanation}>
            {t('contactsCalendarExplanation')}
          </p>

          <div className={style.used}>
            <h4>{t('usedSubtitle')}</h4>
            <p>Django | TailwindCSS | JavaScript | SendGrid</p>
          </div>

          <div className={style.links}>
            <a className={style.link} href='https://contacts-calendar.herokuapp.com' target='_blank'>
              {t('toPage')}
            </a>
            <a className={style.link} href='https://github.com/Patrick564/contacts_calendar' target='_blank'>
              {t('toRepo')}
            </a>
          </div>
        </div>
      </div>

      {/* <button type='button'>Show more</button> */}
    </div>
  )
}

export default Projects
