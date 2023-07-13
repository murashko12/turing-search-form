import styles from './userItem.module.css'
import { BsPlusCircle } from 'react-icons/bs';

const UserItem = ({email, first_name, last_name, avatar}) => {
    return (
        <div className={styles.container}>
            <img className={styles.imgAvatar} src={avatar} alt="user_avatar" />
            <div className={styles.nameContainer}>
                <p>{first_name} {last_name}</p>
                <p>{email}</p>
            </div>
            <BsPlusCircle size={30}/>
        </div>
    )
}

export default UserItem
