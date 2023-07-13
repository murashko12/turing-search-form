import styles from './userItem.module.css'
import { BsPlusCircle } from 'react-icons/bs';

const UserItem = ({id, email, firstName, lastName, avatar}) => {
    return (
        <div className={styles.container}>
            <img className={styles.imgAvatar} src={avatar} alt="user_avatar" />
            <div className={styles.nameContainer}>
                <p>{firstName} {lastName}</p>
                <p>{email}</p>
            </div>
            <BsPlusCircle size={30}/>
        </div>
    )
}

export default UserItem
