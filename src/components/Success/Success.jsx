import React from 'react'
import styles from './success.module.css'
import successImg from '../../images/successImage.png';

const Success = ({count,setSuccess, setInvites}) => {
  
  return (
    <div className={styles.container} onClick={() => setSuccess(false)}>
        <div className={styles.successContainer} onClick={(e) => e.stopPropagation()}>
          
          <img className={styles.successImg} src={successImg} alt="" />
          <h3>{count} received an invitation</h3>
          <button onClick={() => { setInvites([]); setSuccess(false)}} className={styles.btnOK}><h2>OK</h2></button>
        </div>
    </div>
  )
}

export default Success
