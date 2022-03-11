import style from '../styles/About.module.css'

const About = () => {
  return (
    <div className={style.about} id='about'>
      <h1 className={style.title}>About</h1>
      <p className={style.explanation}>
        I'm a Frontend and Backend web developer. I also know about
        relational and non-relational databases as MongoDB and PostgreSQL.
      </p>
      <p className={style.explanation}>
        I have knowledge on the Frontend side of JavaScript, CSS,
        TailwindCSS, Socket.io and React. And on the Backend side of Python,
        Django, Flask, and ExpressJS. I also have knowledge about Docker and AWS-S3.
        I enjoy constantly learning and fecing new challenges.
      </p>
      <a className={style.download} href='https://drive.google.com/file/d/1JrJtZ61TluUh6ngVpU8JI0Oa-uNcKYFG/view?usp=sharing' target='_blank'>
        Download Resume
      </a>
    </div>
  )
}

export default About
