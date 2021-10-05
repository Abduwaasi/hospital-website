import React, {useState}from 'react'
import { FormComponent,NameContainer,Message,Button,Input } from './Form.element'
import Success from '../Success/Success'

const Form = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setMail] = useState("")
    const [message, setMessage] = useState("")
    const encode=(data)=> {
        return Object.keys(data)
          .map(
            (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
          )
          .join("&");
      }
      
      const handleSubmit=(e) => {
        e.preventDefault();
        setName("")
        setPhone("")
        setMail("")
        setMessage("")
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", name,phone, email, message }),
        })
          .then(() => {
                 return <Success/>
          } )
          .catch((error) => alert(error));
      }
    return (
        <FormComponent netlify name="contact" onSubmit={handleSubmit} method="POST">
            <NameContainer>
                <Input type="text" id="name" name="name" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <Input type="text" id="phone" name="phone" placeholder="Email" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
            </NameContainer>
            <Input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e)=>setMail(e.target.value)}/>
            <Message id="message" name="message" cols="30" rows="10" placeholder="Message" value={message} onChange={(e)=>setMessage(e.target.value)}/>
            <Button type="submit" value="send message"/>
        </FormComponent>
    )
}

export default Form
