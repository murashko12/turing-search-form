import React from 'react'
import styles from './success.module.css'

const Success = ({count,setSuccess, setInvites}) => {
  return (
    <div className={styles.container} onClick={() => setSuccess(false)}>
        <div className={styles.successContainer} onClick={(e) => e.stopPropagation()}>
          <h3>Успешно!</h3>
          <p>Всем {count} пользователям отправлено приглашение.</p>
          <button onClick={() => { setInvites([]); setSuccess(false)}} className="send-invite-btn">Назад</button>
        </div>
    </div>
  )
}

export default Success
