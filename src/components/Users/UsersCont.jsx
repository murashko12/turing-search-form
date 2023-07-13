import { useEffect, useState } from 'react'
import UserItem from '../UserItem/UserItem'
import styles from './usersCont.module.css'

const UsersCont = () => {

    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch("https://reqres.in/api/users")
        .then(res => res.json())
        .then(json => {
            console.log(json);
            setUsers(json.data)
        })
        .catch(err => {
            console.log(err);
            alert("err")
        })
        .finally(() => setIsLoading(false))
    }, []);

    return (
        <div className={styles.container}>
            {
                isLoading ? (
                    <div className={styles.skeletonList}>Загрузка</div>
                ) : (
                users.map(({id,avatar,email,first_name,last_name}) => (
                    <UserItem
                        key={id}
                        avatar={avatar}
                        email={email}
                        firstName={first_name}
                        lastName={last_name}
                    />
                ))
            )}
        </div>
    )
}

export default UsersCont
