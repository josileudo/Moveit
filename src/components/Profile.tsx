import styles from "../styles/pages/Profile.module.css"

export function Profile(){
  return (
    <div className= {styles.profileContainer}>
      <img src='https://github.com/josileudo.png' alt="Josileudo Rodrigues"/>
      <div>
        <strong>Josileudo Rodrigues</strong>
        <p>
          <img src="icons/level.svg" alt="level-up"/>
          Level 1
        </p>
      </div>
    </div>
  )  
}