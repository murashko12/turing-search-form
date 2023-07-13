import UserItem from '../UserItem/UserItem'
import styles from './usersCont.module.css'

const UsersCont = ({users, isLoading}) => {

    return (
        <div className={styles.container}>
            {
                isLoading ? (
                    <div className={styles.skeletonList}>Загрузка</div>
                ) : (
                users.map((item) => (
                    <UserItem
                        key={item.id}
                        {...item}
                    />
                ))
            )}
        </div>
    )
}

export default UsersCont
