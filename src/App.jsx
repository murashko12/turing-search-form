// import { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
// import Success from './components/Success/Success';

function App() {
    // const [success, setSuccess] = useState(false)
    return (
        <main>
            <div className="mainContainerForm">
                <Form/>
                {/* <Success/> */}
            </div>
        </main>
    );
}

export default App;
