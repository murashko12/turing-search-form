import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Success from './components/Success/Success';

function App() {
    const [success, setSuccess] = useState(false)
    const [invites, setInvites] = useState([])

    return (
        <main>
            <div className="mainContainerForm">
                {
                success ? 
                <Success 
                count={invites.length}
                setSuccess={setSuccess}
                setInvites={setInvites}
                />
                : 
                <Form
                setSuccess={setSuccess} 
                invites={invites}
                setInvites={setInvites}
                />
            }            
            </div>
        </main>
    );
}

export default App;
