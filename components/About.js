import style from '../styles/About.module.css'

const About = () => {
  return (
    <div className={style.about} id='about'>
      <h1 className={style.title}>About</h1>
      <p className={style.explanation}>
        Actualmente me dedico al desarrollo web backend y frontend
        con manejo de bases de datos relacionales y no relacionales.
        Me enfoco en backend y tengo interés en administración de servidores y bases de datos.
        Disfruto encontrarme con nuevos retos y como aprender a manejarlos.
      </p>
      <a className={style.download} href='https://drive.google.com/file/d/1JrJtZ61TluUh6ngVpU8JI0Oa-uNcKYFG/view?usp=sharing' target='_blank'>
        Resume
      </a>
    </div>
  )
}

export default About
