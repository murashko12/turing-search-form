import React from 'react'
import styles from './success.module.css'

const Success = ({success,setSuccess,count}) => {
  return (
    <div className={success ? styles.container.active : styles.container} onClick={() => setSuccess(false)}>
        <div className={styles.successContainer} onClick={(e) => e.stopPropagation()}>
          <h3>Успешно!</h3>
          <p>Всем {count} пользователям отправлено приглашение.</p>
          <button onClick={() => setSuccess(false)} className="send-invite-btn">Назад</button>
        </div>
    </div>
  )
}

export default Success
