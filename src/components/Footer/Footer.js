  import React from 'react';
import styles from './Footer.scss'
import LinkedInIcon from '../../styles/icons/linkedin-icon.svg'
import GithubIcon from '../../styles/icons/github-icon.svg'

const Footer = () => {

  const socialIcons = [
    {
      name: 'Github',
      url: 'https://github.com/kayroncabral/Chucknorris',
      icon: <GithubIcon/>
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kayroncabral/',
      icon: <LinkedInIcon/>
    },
  ]

  const renderSocialIcon = (socialShortcut, index) => {
    return (
      <a className={styles.link} key={index} href={socialShortcut.url}>{socialShortcut.icon}</a>
    )
  }

  return (
    <div className={styles.Footer}>
      <div className={styles.content}>
        <div className={styles.socialShortcuts}>
          {
            socialIcons.map(renderSocialIcon)
          }
        </div>
        <div className={styles.rightsReserved}><p>KAYRON CABRAL © 2018. ALL RIGHTS RESERVED.</p></div>
      </div>
    </div>
  )
}

export default Footer
