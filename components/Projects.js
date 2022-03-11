import Image from 'next/image'

import style from '../styles/Projects.module.css'

import chatRoomSs from '../public/chat-room.png'
import contactsCalendarSs from '../public/contacts-calendar.png'
import planetariumSs from '../public/planetarium.png'

const Projects = () => {
  return (
    <div className={style.projects}>
      <h2 className={style.title}>Projects</h2>

      <div className={style.container}>
        <div className={style.project}>
          <h3>Planetarium (NASA API)</h3>

          <Image className={style.projectImg} src={planetariumSs} width={'500px'} height={'250px'} />

          <p className={style.projectExplanation}>
            This page consume the NASA API, use images and descriptions for A Picture Of the Day
            and Mars Rover ordening and separating the images by their different cameras. Hosted in Vercel.
          </p>

          <div className={style.used}>
            <h4>Used technologies</h4>
            <p>JavaScript | React | Styled-Components | Docker</p>
          </div>

          <div className={style.links}>
            <a className={style.link} href='https://planetarium-nasa-api.vercel.app' target='_blank'>
              To page
            </a>
            <a className={style.link} href='https://github.com/Patrick564/planetarium-nasa-api' target='_blank'>
              Repository
            </a>
          </div>
        </div>

        <div className={style.project}>
          <h3>Chat Room (Client)</h3>

          <Image className={style.projectImg} src={chatRoomSs} width={'500px'} height={'250px'} />

          <p className={style.projectExplanation}>
            A page created with a client (hosted in Vercel) and a server (hosted in Heroku)
            to login with username and chat in realtime using Socket.io.
          </p>

          <div className={style.used}>
            <h4>Used technologies</h4>
            <p>JavaScript | React | Styled-Components | Socket.io</p>
          </div>

          <div className={style.links}>
            <a className={style.link} href='https://chat-room-client-psi.vercel.app' target='_blank'>
              To page
            </a>
            <a className={style.link} href='https://github.com/Patrick564/chat-room-client' target='_blank'>
              Repository
            </a>
          </div>
        </div>

        <div className={style.project}>
          <h3>Contacts Calendar</h3>

          <Image className={style.projectImg} src={contactsCalendarSs} width={'500px'} height={'250px'} />

          <p className={style.projectExplanation}>
            A page created to login (with user and password) and save your contacts info
            (name, birthday, phone number and email) in a database. Hosted in Heroku.
          </p>

          <div className={style.used}>
            <h4>Used technologies</h4>
            <p>Django | TailwindCSS | JavaScript | SendGrid</p>
          </div>

          <div className={style.links}>
            <a className={style.link} href='https://contacts-calendar.herokuapp.com' target='_blank'>
              To page
            </a>
            <a className={style.link} href='https://github.com/Patrick564/contacts_calendar' target='_blank'>
              Repository
            </a>
          </div>
        </div>
      </div>

      {/* <button type='button'>Show more</button> */}
    </div>
  )
}

export default Projects
