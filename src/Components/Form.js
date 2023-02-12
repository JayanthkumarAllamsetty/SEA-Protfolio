import "./Form.css";
import React from 'react'

const Form = () => {
  return (
    <div className="form">
        <br></br>
        <form>
        <label>Your Name</label>
        <input type="text" placeholder="Enter your name"/>
        <label>Your Email</label>
        <input type="email" placeholder="Enter your email"/>
        <label>Your Message</label>
        <textarea placeholder="Enter your message"/>
        <button className="btn">Submit</button>


        </form>
    </div>
  )
}

export default Form