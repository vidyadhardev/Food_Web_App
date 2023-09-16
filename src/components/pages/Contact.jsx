import React from 'react'

const Contact=()=> {
  return (
    <div className='contact-page-wrapper' id='contact'>
    <h1 className='primary-subheading'>Contact</h1>
    <h1 className='primary-heading '>Have Quetions in your mind ?</h1>
    <h1 className='primary-heading'> Let Us Help you</h1>
    <div className='contact-form-container'>
      <input type='email' placeholder='enter your e-mail'/>
      <button className='secondary-button'>Submit</button>
    </div>
    </div>
  )
}

export default Contact;