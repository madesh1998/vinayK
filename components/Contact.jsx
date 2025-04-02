import React, { useState } from 'react'
import styles from '@/styles/contact.module.css';
import Link from 'next/link';
import { toast } from 'react-toastify';
import axios from '../axios';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.css';
import { Form } from 'react-bootstrap';

const Contact = () => {
  const router = useRouter()
  const [inputVal, setInputVal] = useState({
    username:'',
    email:'',
    phone:'',
    message:''
})
console.log(inputVal)
const getData = (e) =>{

    const {value, name} = e.target;

    setInputVal(()=>{
        return {
            ...inputVal,
            [name]:value
        }
    })
}

const reset = () =>{
  setInputVal({
    username:'',
    email:'',
    phone:'',
    message:''
})
  // document.getElementById('name').value = ''
  // document.getElementById('email').value = ''
  // document.getElementById('phone').value = ''
  // document.getElementById('msg').value = ''
}

const sendMail = () =>{
  axios.post('https://jurysoftprojects.com/calibreply/api/checkmail.php', {
    subject: `Hi there,  You've got a new message from ${inputVal.username}.`,
    receiver: {
      email: '',
      name: ''
    },
    message: `<!DOCTYPE html>
    <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    .card {
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
      transition: 0.3s;
      width: 40%;
    }
    
    .card:hover {
      box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
    
    .container {
      padding: 2px 16px;
    }
    </style>
    </head>
    <body>
    
    <div class="card">
      <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="Avatar" style="width:100%">
      <div class="container">
        <h4 style="text-transform: uppercase;"><b>${inputVal.username}</b></h4> 
         <h3>Email: <a href="mailto:'${inputVal.email}'">${inputVal.email}</a></h3>
        <h3>Phone: ${inputVal.phone}</h3> 
        <h3>Message</h3> 
        <p>${inputVal.message}</p>
      </div>
    </div>
    
    </body>
    </html> 
    `
  })
.then(res => {
 
 if(res.data.status === 'success'){
  toast.success(res.data.msg)
 
}else if(res.data.status === 'error'){
  toast.error(res.data.msg)
}
})
.catch(err => {
  console.log(err)
})
}

const form =() =>{

  const { username, email,phone,message } = inputVal;

  if(username === ''){
      toast.error('enter username')
    }else if(email === ''){
      toast.error('enter email')
    }else if(phone === '' || phone.length>10 || phone.length<10){
      toast.error('Enter Valid Number')
    }else if(message === ''){
      toast.error('Enter Message')
    }else{
        axios.post('/',{
            type:"contact_submit",
            email:email,
            name:username,
            mobile:phone,
            msg:message
        })
        .then(res => {
         
         if(res.data.status === 'success'){
          toast.success(res.data.msg)
          reset()
          sendMail();
          setInputVal({
            username:'',
            email:'',
            phone:'',
            message:''
          })
         
       }else if(res.data.status === 'error'){
          toast.error(res.data.msg)
       }
      })
      .catch(err => {
          console.log(err)
      })
    }
    
}


  return (
    <>
    <section className={`${styles.about_us} container`}>
        <section className={`${styles.call_back_section} ${styles.contact_bg_img}`}>
          <div className={`${styles.auto_container}`}>
            <div className={`${styles.outer_box}`}>
              <div className={`${styles.no_gutters} row`}>
                <div className={`${styles.text_column} col-xl-8 col-lg-12 col-md-12 col-sm-12 ${styles.order_2}`}>
                  <div className={styles.inner_column}>
                    <div className={styles.inner}>
                      <div className={styles.message}>
                        <strong>20 Years of Experience </strong><br/>
                        in Woodworks Business Services
                      </div>
                      <div className={styles.text}>
                      send us a email and we’ll get in touch shortly, or phone between 8:00AM to 9:00PM Monday to sunday- We would be delighted to speak.
                      </div>
                      <div className='row'>
                        <div className={`${styles.info_block} col-lg-6 col-md-6 col-sm-12`}>
                          <div className={styles.inner_box}>
                              <ul>
                                <li>
                                  <strong>Phone</strong>
                                </li>
                                <li>
                                  <Link href='tel:9591999452'>+91-9591999452 , 080-28602201 , 080-28608500</Link>
                                </li>
                              </ul>
                          </div>
                        </div>
                        <div className={`${styles.info_block} col-lg-6 col-md-6 col-sm-12`}>
                          <div className={styles.inner_box}>
                            <ul>
                              <li>
                                <strong>Email</strong>
                              </li>
                              <li>
                                <Link href='mailto:hello@calibreply.com'>hello@calibreply.com</Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className={`${styles.info_block} col-lg-6 col-md-6 col-sm-12`}>
                          <div className={styles.inner_box}>
                              <ul>
                                <li>
                                  <strong>Address</strong>
                                </li>
                                <li>
                                Sy No 39/1, Pattanagere Road, Near R V Engg College, Near Global Village Tech Park, R V College Road, Mysore Road, Bangalore, Karnataka 560059
                                </li>
                              </ul>
                          </div>
                        </div>
                        <div className={`${styles.info_block} col-lg-6 col-md-6 col-sm-12`}>
                          <div className={styles.inner_box2}>
                              <div className={`${styles.map_heading}`}>
                                <a href="https://goo.gl/maps/tvrEqgoUyBA8GtQc7"><strong style={{color: '#353535', cursor: 'pointer'}}><i class="fa fa-map-marker" aria-hidden="true"></i>    Find us here.</strong></a>
                              </div>
                              <iframe className={`${styles.map_iframe}`} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d972.1797594609122!2d77.50392546956537!3d12.925771006333978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e6790354393%3A0xec89c2a582cf99c8!2sEcogen%20Industries!5e0!3m2!1sen!2sin!4v1688121021789!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.form_column} col-xl-4 col-lg-12 col-md-12 col-sm-12`}>
                    <div className={styles.inner_column}>
                      <div className={styles.request_form}>
                        <h3>Request A Quote</h3>
                        <div className='row'>
                          <div className={`${styles.form_group} col-lg-12 col-md-12 col-sm-12`}>
                              <input type='text' id='name' name='username' value={inputVal.username} onChange={getData} placeholder='Name' required/>
                          </div>
                          <div className={`${styles.form_group} col-lg-12 col-md-12 col-sm-12`}>
                              <input type='email' id='email' name='email' value={inputVal.email} onChange={getData} placeholder='Email' required/>
                          </div>
                          <div className={`${styles.form_group} col-lg-12 col-md-12 col-sm-12`}>
                              <input type='text' id='phone' name='phone' value={inputVal.phone} onChange={getData} placeholder='Phone' required/>
                          </div>
                          <div className={`${styles.form_group} col-lg-12 col-md-12 col-sm-12`}>
                              <textarea name='message' id='msg' onChange={getData} value={inputVal.message} placeholder='Message' required></textarea>
                          </div>
                          <div onClick={form} className={`${styles.form_group} col-lg-12 col-md-12 col-sm-12`}>
                              <button type='submit' name='submit-form' className={`${styles.theme_btn} ${styles.btn_style_four}`}>
                                  <span className={styles.btn_title}>Submit Now</span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  <span></span>
                              </button>
                          </div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>

            </div>
          </div>
        </section>
    </section>
    </>
  )
}

export default Contact