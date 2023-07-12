import UserItem from '../UserItem/UserItem'
import styles from './usersCont.module.css'

const UsersCont = () => {

    const usersList = [
        {
            id: 1,
            name: "Petr",
            email: "petr@ocumare.ru"
        },{
            id: 2,
            name: "Ilya",
            email: "petr@ocumare.ru"
        },{
            id: 3,
            name: "Andrew",
            email: "petr@ocumare.ru"
        }
    ]

    return (
        <div className={styles.container}>
            {
                usersList.map(({id, name, email}) => (
                    <UserItem key={id} name={name} email={email}/>
                ))
            }
        </div>
    )
}

export default UsersCont
