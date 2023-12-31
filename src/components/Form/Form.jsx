import styles from './form.module.css'
import UsersCont from '../Users/UsersCont';
import { useEffect, useState } from 'react';


const Form = ({ setSuccess, invites, setInvites}) => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchValue, setSearchValue] = useState("")

    useEffect(() => {
        fetch("https://reqres.in/api/users")
        .then(res => res.json())
        .then(json => {
            setUsers(json.data)
        })
        .catch(err => {
            console.log(err);
            alert("err")
        })
        .finally(() => setIsLoading(false))
    }, []);
    
    const onChangeSearchValue = (e) => setSearchValue(e.target.value)
    const onClickInvite = (id) => {
        if (invites.includes(id)) {
            setInvites(prev => prev.filter(_id => _id !==id))
        } else {
            setInvites(prev => [...prev, id])
        }
    }

    return (
        
        <form className={styles.container}>
            <div className={styles.containerSearch}>
                <input 
                    type="text" 
                    placeholder="Найти пользователя..." 
                    value={searchValue}
                    onChange={onChangeSearchValue}
                />
            </div>
            <UsersCont 
                users={users} 
                isLoading={isLoading}
                searchValue={searchValue}
                invites={invites}
                onClickInvite={onClickInvite}
            />
            {
                invites.length > 0 && <button onClick={(e) =>{e.preventDefault(); setSuccess(true)}} className={styles.sendInviteBtn}>Отправить приглашение</button>
            }
            
        </form>
        
    )
}
 
export default Form
