import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ContactCard = ({ link, icon, text, cardStyle, iconStyle }) => {
  return (
    <a className={cardStyle} href={link} rel='noopener noreferrer' target='_blank'>
      <FontAwesomeIcon className={iconStyle} icon={icon} size='3x' />
      {text}
    </a>
  )
}

export default ContactCard
