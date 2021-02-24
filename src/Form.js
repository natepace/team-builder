import React from 'react';

export default function Form(props) {

    const { values, update, submit } = props

    const onChange = evt => {
      
      // 🔥 STEP 6 - IMPLEMENT the change handler for our inputs and dropdown
      // a) pull the name of the input from the event object
      // b) pull the value of the input from the event object

      
      const {name, value}=evt.target
      
      // c) use the `update` callback coming in through props
      update(name, value)
    }
  
    const onSubmit = evt => {
      // 🔥 STEP 7 - IMPLEMENT the submit handler
      // a) don't allow the browser to reload!
      // c) use the `submit` callback coming in through props
      evt.preventDefault()
      submit()
    
  
  
    }


    return (
        <form className='form container' onSubmit={onSubmit}>
          <div className='form-group inputs'>
            {/* ////////// TEXT INPUTS ////////// */}
            {/* ////////// TEXT INPUTS ////////// */}
            {/* ////////// TEXT INPUTS ////////// */}
            <label>Username
              {/* 🔥 STEP 3 - Make an input of type `text` for username.
                  Controlled inputs need `value` and `onChange` props.
                  Inputs render what they're told - their current value comes from app state.
                  At each keystroke, a change handler fires to change app state. */}
                  <input
                   name ='username' type='text' onChange={onChange} value={values.username} 
                   placeholder='type a username...'
                   maxLength='30'
                   />
            </label>
    
            <label>Email
              {/* 🔥 STEP 4 - Make an input of type `email` or `text` for email. */}
              <input 
              name='email'
              type='text'
              onChange={onChange}
              value={values.email}
              placeholder='type a valid email'
              
              />
            </label>
    
            {/* ////////// DROPDOWN ////////// */}
            {/* ////////// DROPDOWN ////////// */}
            {/* ////////// DROPDOWN ////////// */}
            <label>Role
              {/* 🔥 STEP 5 - Make dropdown for role. */}
              <select value={values.role} name='role' onChange={onChange}>
                  <option value=''>--- Select Role..---</option>
                  <option value='Developer'>Developer</option>
                  <option value='Graphic Designer'>Graphic Designer</option>
                  <option value='Hype Man'>Hype Man</option>
              </select>
    
            </label>
    
            <div className='submit'>
              <button disabled={!values.username || !values.email || !values.role}>submit</button>
            </div>
          </div>
        </form>
      )



}