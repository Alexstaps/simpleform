import { useState } from 'react'
import './App.css'

import Form from './components/form';

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");




  return (
    <>
      <header>
        <h2>Create account</h2>
      </header>
      <section>
        <Form
          userName={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          password1={password1}
          setPassword1={setPassword1}
          password2={password2}
          setPassword2={setPassword2}
        />
      </section>

    </>
  )
}

export default App
