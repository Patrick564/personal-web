import { useState } from 'react'

import useTranslation from 'next-translate/useTranslation'

import ProjectCard from './Projects/ProjectCard'
import PrimaryButton from './Buttons/Primary/PrimaryButton'

import style from '../styles/Projects.module.css'

const projects = {
  planetarium: {
    name: 'Planetarium (NASA API)',
    image: 'https://personal-images-serve.s3.us-east-2.amazonaws.com/planetarium.webp',
    explanation: 'planetariumExplanation',
    technologies: 'JavaScript | React | Styled-Components | Docker',
    pageLink: 'https://planetarium-nasa-api.vercel.app',
    repoLink: 'https://github.com/Patrick564/planetarium-nasa-api'
  },
  chatRoom: {
    name: 'Chat Room (Client)',
    image: 'https://personal-images-serve.s3.us-east-2.amazonaws.com/chat-room-client.webp',
    explanation: 'chatRoomExplanation',
    technologies: 'JavaScript | React | Styled-Components | Socket.io',
    pageLink: 'https://chat-room-client-psi.vercel.app',
    repoLink: 'https://github.com/Patrick564/chat-room-client'
  },
  contactsCalendar: {
    name: 'Contacts Calendar',
    image: 'https://personal-images-serve.s3.us-east-2.amazonaws.com/contacts-calendar.webp',
    explanation: 'contactsCalendarExplanation',
    technologies: 'Django | Tailwind CSS | PostgreSQL | Docker',
    pageLink: 'https://contacts-calendar.onrender.com',
    repoLink: 'https://github.com/Patrick564/contacts_calendar'
  },
  photoGallery: {
    name: 'Photo Gallery (AWS-S3)',
    image: 'https://personal-images-serve.s3.us-east-2.amazonaws.com/photo-gallery.webp',
    explanation: 'photoGalleryExplanation',
    technologies: 'Astro | React | Tailwind CSS',
    pageLink: 'https://aws-photo-gallery.netlify.app',
    repoLink: 'https://github.com/Patrick564/photo-gallery'
  },
  pokeApp: {
    name: 'Poke App (Client)',
    image: '/poke-app-client.svg',
    explanation: 'pokeAppExplanation',
    technologies: 'Fastify | React Native | Expo | MongoDB',
    pageLink: 'https://expo.dev/@patrick794/poke-app-client',
    repoLink: 'https://github.com/Patrick564/poke-app-client'
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
          Object.keys(projects).map((project, idx) => (
              <ProjectCard
                title={projects[project]['name']}
                image={projects[project]['image']}
                explanation={t(projects[project]['explanation'])}
                subtitle={t('usedSubtitle')}
                technologies={projects[project]['technologies']}
                page={t('toPage')}
                toPage={projects[project]['pageLink']}
                repo={t('toRepo')}
                toRepo={projects[project]['repoLink']}
                visible={idx > 2 ? showMore : true}
                key={idx}
              />
            )
          )
        }
      </div>

      <PrimaryButton
        action={ () => {setShowMore(!showMore)} }
        text={'More Projects'}
      />
    </div>
  )
}

export default Projects
