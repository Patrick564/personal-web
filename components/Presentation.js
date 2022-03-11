import style from '../styles/Presentation.module.css'

const Presentation = () => {
  return (
    <div className={style.container} id='presentation'>
      <h1 className={style.title}>
        <span>Hi, I'm </span>
        <span>Patrick Vilchez</span>
      </h1>
      <span>Backend/Frontend Web Developer</span>
      <a className={style.more} href='#about'>More</a>
    </div>
  )
}

export default Presentation
