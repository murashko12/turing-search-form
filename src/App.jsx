import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Success from './components/Success/Success';

function App() {
    const [success, setSuccess] = useState(false)
    // const [invites, setInvites] = useState([])
    // const [users, setUsers] = useState([])
    // const [isLoading, setIsLoading] = useState(true)
    // const [searchValue, setSearchValue] = useState("")

    // console.log(invites);
    // useEffect(() => {
    //     fetch("https://reqres.in/api/users")
    //     .then(res => res.json())
    //     .then(json => {
    //         // console.log(json); 
    //         setUsers(json.data)
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         alert("err")
    //     })
    //     .finally(() => setIsLoading(false))
    // }, []);

    // const onChangeSearchValue = (e) => setSearchValue(e.target.value)
    // const onClickInvite = (id) => {
    //     if (invites.includes(id)) {
    //         setInvites(prev => prev.filter(_id => _id !==id))
    //     } else {
    //         setInvites(prev => [...prev, id])
    //     }
    // }

    return (
        <main>
            <div className="mainContainerForm">
                <Form
                    success={success}
                    setSuccess={setSuccess} 
                    // invites={invites} 
                    // setInvites={setInvites}
                    // users={users}
                    // setUsers={setUsers}
                    // isLoading={isLoading}
                    // setIsLoading={setIsLoading}
                    // searchValue={searchValue}
                    // setSearchValue={setSearchValue}
                    // onChangeSearchValue={onChangeSearchValue}
                    // onClickInvite={onClickInvite}
                />
                <Success success={success} setSuccess={setSuccess}/>
            </div>
        </main>
    );
}

export default App;
