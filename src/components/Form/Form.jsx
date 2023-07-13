import styles from './form.module.css'
// import { BsSearch } from 'react-icons/bs';
import UsersCont from '../Users/UsersCont';

const Form = () => {

    

    return (
        <form className={styles.container}>
            <div className={styles.containerSearch}>
                {/* <BsSearch size={25} className={styles.bsSearch}/> */}
                <input type="text" placeholder="Найти пользователя..." />
            </div>
            <UsersCont/>
            <button className={styles.sendInviteBtn}>Отправить приглашение</button>
        </form>
    )
}

export default Form
