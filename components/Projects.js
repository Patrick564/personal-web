import Image from 'next/image'

import style from '../styles/Projects.module.css'
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
            This page consume the NASA API for use images and descriptions for APOD.
          </p>

          <div className={style.used}>
            <h4>Used technologies</h4>
            <p>JavaScript React Styled-Components Docker</p>
          </div>

          <div className={style.links}>
            <a className={style.link} href='https://planetarium-nasa-api.vercel.app/' target='_blank'>
              To page
            </a>
            <a className={style.link} href='https://github.com/Patrick564/planetarium-nasa-api' target='_blank'>
              Repository
            </a>
          </div>
        </div>

        <div className={style.project}>
          <h3>Planetarium (NASA API)</h3>

          <Image className={style.projectImg} src={planetariumSs} width={'500px'} height={'250px'} />

          <p className={style.projectExplanation}>
            This page consume the NASA API for use images and descriptions for APOD.
          </p>

          <div className={style.used}>
            <h4>Used technologies</h4>
            <p>JavaScript React Styled-Components Docker</p>
          </div>

          <div className={style.links}>
            <a className={style.link} href='https://planetarium-nasa-api.vercel.app/' target='_blank'>
              To page
            </a>
            <a className={style.link} href='https://github.com/Patrick564/planetarium-nasa-api' target='_blank'>
              Repository
            </a>
          </div>
        </div>

        <div className={style.project}>
          <h3>Planetarium (NASA API)</h3>

          <Image className={style.projectImg} src={planetariumSs} width={'500px'} height={'250px'} />

          <p className={style.projectExplanation}>
            This page consume the NASA API for use images and descriptions for APOD.
          </p>

          <div className={style.used}>
            <h4>Used technologies</h4>
            <p>JavaScript React Styled-Components Docker</p>
          </div>

          <div className={style.links}>
            <a className={style.link} href='https://planetarium-nasa-api.vercel.app/' target='_blank'>
              To page
            </a>
            <a className={style.link} href='https://github.com/Patrick564/planetarium-nasa-api' target='_blank'>
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
