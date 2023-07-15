import styles from './form.module.css'
// import { BsSearch } from 'react-icons/bs';
import UsersCont from '../Users/UsersCont';

import { useEffect, useState } from 'react';
import Success from '../Success/Success';

const Form = (success, setSuccess) => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchValue, setSearchValue] = useState("")

    const [invites, setInvites] = useState([])

    // const [success, setSuccess] = useState(false)

    console.log(invites);
    useEffect(() => {
        fetch("https://reqres.in/api/users")
        .then(res => res.json())
        .then(json => {
            // console.log(json); 
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
                {/* <BsSearch size={25} className={styles.bsSearch}/> */}
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
                onChangeSearchValue={onChangeSearchValue}
                invites={invites}
                onClickInvite={onClickInvite}
            />
            {
                invites.length > 0 && <button onClick={() => setSuccess(true)} className={styles.sendInviteBtn}>Отправить приглашение</button>
            }
            {/* <Success success={success} setSuccess={setSuccess}/> */}
        </form>
        
    )
}
 
export default Form
