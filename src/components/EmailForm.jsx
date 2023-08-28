import {React, useState} from 'react'
import emailjs from 'emailjs-com'

const EmailForm = () => {
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_q1xql2f'
    const publicKey = '5S7yaOU6kTtGdTdgf'
    const templateID = 'template_vn3zqz7'

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'web wizard',
      message: 'workign'
    }

    emailjs.send(serviceID, templateID, templateParams, publicKey)
    .then((response) => {
      console.log("email sent successfully", response)
      setName('')
      setEmail('')
    })
    .catch((error) =>{
      console.log('error sending email', error)
    })

  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input 
      type='text' 
      placeholder='your name' 
      value={name} 
      onChange={(e) => setName(e.target.value)}/>
    <input 
      type='text' 
      placeholder='your email' 
      value={email} 
      onChange={(e) => setEmail(e.target.value)}/>
    <button type='submit'>Send Email</button>

    </form>
  )
}

export default EmailForm