import React, {useState}from 'react'
import styled from 'styled-components'
export const FormComponent = styled.form`
padding: 2rem 1rem;
width:100%;
height: 350px;
background-color: var(--dark-blue);
h2{
  margin-bottom:1rem;
  color:var(--white);
  font-weight:400;
  letter-spacing:1.5;
}
`
export const Input= styled.input`
padding: 1rem 2rem;
width:100%;
font-size:1.2rem;
background-color: var(--light-blue);
margin:0.5rem auto;
outline:none;
border:transparent;
border-radius:5px;
color:var(--white);
::placeholder{
  color:var(--white);
}
:focus{
    background-color: var(--btn-blue);
   
}

`

export const Button = styled.input`
background-color: var(--btn-blue);
color:var(--white);
padding:1rem 3rem;
text-transform:capitalize;
font-size:1rem;
transition:var(--transition);
margin-top:0.5rem;
outline:none;
border:transparent;
:hover{
    background-color: var(--white);
    color:var(--btn-blue);
}
`

const Form = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setMail] = useState("")
    
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
        
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", name,phone, email, }),
        })
          .then(() => alert("Message sent!"))
          .catch((error) => alert(error));
      }
    return (
        <FormComponent netlify name="appointment" onSubmit={handleSubmit}>

            <h2>Book an Appointment</h2>
                <Input type="text" id="name" name="name" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <Input type="text" id="phone" name="phone" placeholder="Email" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
           
            <Input type="email" id="email" name="email" placeholder="Email" value={email} onChange={(e)=>setMail(e.target.value)}/>
            <Button type="submit" value="send message"/>
        </FormComponent>
    )
}

export default Form
