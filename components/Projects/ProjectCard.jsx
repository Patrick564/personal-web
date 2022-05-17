import Image from 'next/image'

import style from './ProjectCard.module.css'

const ProjectCard = ({
  title,
  image,
  explanation,
  subtitle,
  technologies,
  page,
  toPage,
  repo,
  toRepo,
  visible
}) => {
  return (
    <div className={style.card} style={{ display: visible ? '' : 'none' }}>
      <h3>{title}</h3>

      <Image
        className={style.img}
        src={image}
        width={500}
        height={250}
        layout='intrinsic'
        alt={title}
      />

      <p className={style.explanation}>
        {explanation}
      </p>

      <div className={style.technologies}>
        <h4>{subtitle}</h4>
        <p>{technologies}</p>
      </div>

      <div className={style.links}>
        <a className={style.link} href={toPage} target='_blank'>
          {page}
        </a>
        <a className={style.link} href={toRepo} target='_blank'>
          {repo}
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
