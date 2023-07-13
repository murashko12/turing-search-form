import styles from './form.module.css'
// import { BsSearch } from 'react-icons/bs';
import UsersCont from '../Users/UsersCont';
import { useEffect, useState } from 'react';

const Form = () => {

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
        <form className={styles.container}>
            <div className={styles.containerSearch}>
                {/* <BsSearch size={25} className={styles.bsSearch}/> */}
                <input type="text" placeholder="Найти пользователя..." />
            </div>
            <UsersCont users={users} isLoading={isLoading}/>
            <button className={styles.sendInviteBtn}>Отправить приглашение</button>
        </form>
    )
}

export default Form
