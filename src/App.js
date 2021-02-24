import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Form';

import styled from 'styled-components';

const initialFormValues = {
  ///// TEXT INPUTS /////
  username: '',
  email: '',
  ///// DROPDOWN /////
  role: '',
}

const defaultData = [
  {
    username: 'Billy Joel',
    email: 'harmonicajesus@yourmomscrush.com',
    role: 'Hype Man'
  },
  {
    username: 'Kevin Durant',
    email: 'goOKC@GSwarriors.com(forward to @brooklynnets.com)',
    role: 'ring-hunter'
  },
  {
    username: 'Wilt Chamberlain',
    email: 'thestilt@aol.com',
    role: 'center'
  }
]

const Stylediv = styled.div`
margin: 5%;
border-radius: 4px;
box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
padding: 20px;
`
const StyleHead = styled.div`

border-radius: 4px;
// box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
// padding: 30px;

`


function App() {
  const [workers, setWorkers] = useState(defaultData)

  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    })
    
  }

  const submitForm = () => {
      const newHire ={
        username: formValues.username.trim(),
        email: formValues.email.trim(),
        role: formValues.role.trim(),
      }
      if(!newHire.username || !newHire.email || !newHire.role){
        return;
      }
      setWorkers(workers.concat(newHire))
      setFormValues(initialFormValues)


  }

  useEffect(() => {

  }, [])
  
  return (
    <Stylediv className='container'>
    <h1>The Best Team of All Time</h1>
    <StyleHead>
    <Form
      // 🔥 STEP 2 - The form component needs its props.
      //  Check implementation of FriendForm
      //  to see what props it expects.
      values={formValues}
      update={updateForm}
      submit={submitForm}
    />
    </StyleHead>
    {
      workers.map((member,idx) => {
        return (
          // <Worker key={Worker.id} details={Worker} />
          <Stylediv key = {idx}>
            <h2>{member.username}</h2>
            <h3>Email: {member.email}</h3>
            <p>Role: {member.role}</p>
            <hr></hr>
          </Stylediv>
        )
      })
    }
  </Stylediv>
)




  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
