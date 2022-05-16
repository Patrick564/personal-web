import { useState } from 'react'

import useTranslation from 'next-translate/useTranslation'

import ProjectCard from './Projects/ProjectCard'

import style from '../styles/Projects.module.css'

const projects = {
  planetarium: {
    name: 'Planetarium (NASA API)',
    explanation: 'planetariumExplanation',
    image: '/planetarium.webp',
    page: 'https://planetarium-nasa-api.vercel.app',
    repo: 'https://github.com/Patrick564/planetarium-nasa-api'
  },
  chatRoom: {
    name: 'Chat Room (Client)',
    explanation: 'chatRoomExplanation',
    image: '/chat-room-client.webp',
    page: 'https://chat-room-client-psi.vercel.app',
    repo: 'https://github.com/Patrick564/chat-room-client'
  },
  contactsCalendar: {
    name: 'Contacts Calendar',
    explanation: 'contactsCalendarExplanation',
    image: '/contacts-calendar.webp',
    page: 'https://contacts-calendar.onrender.com',
    repo: 'https://github.com/Patrick564/contacts_calendar'
  },
  photoGallery: {
    name: 'Photo Gallery (AWS-S3)',
    explanation: 'photoGalleryExplanation',
    image: '/photo-gallery.webp',
    page: 'https://aws-photo-gallery.netlify.app',
    repo: 'https://github.com/Patrick564/photo-gallery'
  },
  pokeApp: {
    name: 'Poke App (Client)',
    explanation: 'pokeAppExplanation',
    image: '/poke-app-client.webp',
    page: 'https://expo.dev/@patrick794/poke-app-client',
    repo: 'https://github.com/Patrick564/poke-app-client'
  }
}

const Projects = () => {
  const { t } = useTranslation('projects')
  const [showMore, setShowMore] = useState(false)

  return (
    <div className={style.projects} id='projects'>
      <h2 className={style.title}>{t('title')}</h2>

      <div className={style.container}>
        {
          Object.keys(projects).map((project, idx) => {
            if (idx > 2) {
              return (
                <ProjectCard
                  explanation={t(projects[project]['explanation'])}
                  page={t('toPage')}
                  repo={t('toRepo')}
                  subtitle={'usedSubtitle'}
                  image={projects[project]['image']}
                  title={projects[project]['name']}
                  visible={showMore}
                  key={idx}
                />
              )
            }
            return (
              <ProjectCard
                explanation={t(projects[project]['explanation'])}
                page={t('toPage')}
                repo={t('toRepo')}
                subtitle={'usedSubtitle'}
                image={projects[project]['image']}
                title={projects[project]['name']}
                visible={true}
                key={idx}
              />
            )
          })
        }
      </div>

      <button type='button' onClick={() => setShowMore(!showMore)}>Show more</button>
    </div>
  )
}

export default Projects
