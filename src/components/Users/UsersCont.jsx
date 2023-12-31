import UserItem from '../UserItem/UserItem'
import styles from './usersCont.module.css'

const UsersCont = ({users, isLoading, searchValue, invites, onClickInvite}) => {

    return (
        <div className={styles.container}>
            {
                isLoading ? (
                    <div className={styles.skeletonList}>Загрузка</div>
                ) : (
                users.filter((obj) => {
                    const fullName = obj.first_name + " " + obj.last_name
                    return (
                        fullName.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) 
                        || obj.email.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
                    )
                }).map((user) => (
                    <UserItem
                        onClickInvite={onClickInvite}
                        key={user.id}
                        isInvited={invites.includes(user.id)}
                        {...user}
                    />
                ))
            )}
        </div>
    )
}

export default UsersCont
