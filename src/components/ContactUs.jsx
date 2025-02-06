import React from 'react';
import style from './ContactUs.module.css';
import {useState} from 'react';

const ContactUs = () => {
  
  const[formData, setFormData] = useState({
    name : "",
    email : "",
    message : "",
  });


  const handleInputChange = (e) =>{
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:value,
    });
  };



  const handleContinue =()=>{
    const{name, email, message} = formData;
  
  if(!name || !email || !message){
    alert("Please fill all the fields");
  }else{
    alert("We've recieved your message "+formData.name+ " :)");
    console.log("We've recieved your message", formData);
  }};
  
  return (
    <div className={style.contactUs}>
      <h1 className={style.hh}>Contact Us</h1>
        <div className={style.container}>
            
            <div className={style.fields}>
                <input
                 type="text"
                  placeholder=" Name" 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange} 
                  className={style.nam}
                  />

                <input
                 type="email" 
                 placeholder=" Email Address"
                 name="email" 
                 value={formData.email}
                 onChange={handleInputChange}
                 className={style.email}
                  />

                <input
                 type="text"
                  placeholder="Type a message" 
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={style.message}
                  /> 
            </div>
            <button className={style.btn} onClick={handleContinue}>Submit</button>
        </div>
      
    </div>
  )
}

export default ContactUs;