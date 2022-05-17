import style from './PrimaryButton.module.css'

const PrimaryButton = ({ action, text }) => {
  return (
    <button type='button' className={style.button} onClick={action}>
      {text}
    </button>
  )
}

export default PrimaryButton
