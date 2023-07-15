import styles from './userItem.module.css'
import { FiPlusCircle, FiMinusCircle } from 'react-icons/fi';

const UserItem = ({id, email, first_name, last_name, avatar, onClickInvite, isInvited}) => {
    return (
        <div className={styles.container}>
            <img className={styles.imgAvatar} src={avatar} alt="user_avatar" />
            <div className={styles.nameContainer}>
                <h3>{first_name} {last_name}</h3>
                <p className={styles.email}>{email}</p>
            </div>
            <div className={styles.iconContainer} onClick={() => onClickInvite(id)}>
                {isInvited ? <FiMinusCircle size={30}/> : <FiPlusCircle size={30}/>}
            </div>
        </div>
    )
}

export default UserItem
