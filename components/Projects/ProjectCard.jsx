import Image from 'next/image'

import style from './ProjectCard.module.css'

const ProjectCard = ({ explanation, subtitle, page, repo, image, title, visible }) => {
  return (
    <div className={style.project} style={{ display: visible ? '' : 'none' }}>
      <h3>{title}</h3>

      <Image
        className={style.projectImg}
        src={image}
        width={500}
        height={250}
        alt='Planetarium project'
      />

      <p className={style.projectExplanation}>
        {explanation}
      </p>

      <div className={style.used}>
        <h4>{subtitle}</h4>
        <p>JavaScript | React | Styled-Components | Docker</p>
      </div>

      <div className={style.links}>
        <a className={style.link} href='https://planetarium-nasa-api.vercel.app' target='_blank'>
          {page}
        </a>
        <a className={style.link} href='https://github.com/Patrick564/planetarium-nasa-api' target='_blank'>
          {repo}
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
