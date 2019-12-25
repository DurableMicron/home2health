import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LogoLink = props => {
  let icon
  let href = props.href
  let iconColor

  switch (props.service) {
    case 'email':
      icon = 'envelope'
      href = `mailto:${props.href}`
      iconColor = 'grey'
      break
    case 'twitter':
      icon = ['fab', 'twitter']
      iconColor = '#1DA1F2'
      break
    case 'facebook':
      icon = ['fab', 'facebook']
      iconColor = '#4267B2'
      break
    default:
      icon = 'question'
      iconColor = 'green'
      break
  }

  return (
    <>
      {style}
      <Link href={href}>
        <a className="logo-link">
          <FontAwesomeIcon icon={icon} size="2x" color={iconColor} />
        </a>
      </Link>
    </>
  )
}

const style = (
  <style jsx="true">{`
    .logo-link {
      padding: 0 5px;
    }
  `}</style>
)

export default LogoLink
