import styles from './userItem.module.css'
import { BsPlusCircle } from 'react-icons/bs';

const UserItem = ({name, email}) => {
    return (
        <div className={styles.container}>
            <div className={styles.nameContainer}>
                <h4>{name}</h4>
                <p>{email}</p>
            </div>
            <BsPlusCircle size={30}/>
        </div>
    )
}

export default UserItem
