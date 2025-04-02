import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { AboutBanner, AboutMain, CarouselTestimonial, Footer, Navbar, Swiper } from 'components'
import Navbar1 from 'components/Navbar1'
import Navbar2 from 'components/Navbar2'
import Link from 'next/link'
import { FaRupeeSign, FaShoppingCart, FaHeart } from 'react-icons/fa';
import axios from '../../axios'
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'
import logo from '../../images/logo.webp'
// import axe from '../../images/c axe.jpg'



const About = () => {

  const [navbar1, setNavbar] = useState([])
  useEffect(() => {
      axios.post('/',{
          type:"getAllCategory"
      })
      .then(res => {
      //  console.log(res.data)
       setNavbar(res.data.category)
      })
      .catch(err => {
        console.log(err)
        })
  },[])


  const [getCart, setGetCart] = useState([])
  useEffect(() => {
    axios.post('/',{
        type:"getMyCart",
        ip:localStorage.getItem('ip_address'),
        uid:localStorage.getItem('uid')?localStorage.getItem('uid'): null,
    })
    .then(res => {
    //  console.log(res.data)
     setGetCart(res.data)
    })
    .catch(err => {
      console.log(err)
      })
    },[])

    const [uid , setUid] = useState(null)
    useEffect(()=>{
      setUid(localStorage.getItem('uid'))
    },[uid])


    useEffect(()=>{
        let setIp = JSON.parse(localStorage.getItem("ip_address"));
        if (setIp === null) {
          var min = 100000;
          var max = 999999;
          var num = Math.floor(Math.random() * (max - min + 1)) + min;
          localStorage.setItem("ip_address", JSON.stringify(num));     
      }
    },[])

  

  return (
    <>
     <Head>
      <title>About</title>
  <meta name="description" content="Free Web tutorials"/>
  <meta name="keywords" content="HTML, CSS, JavaScript"/>
  <meta name="author" content="John Doe"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    </Head>
    <header>
        <Link href='/' className='logo'>
            <Image width='150' alt='' src={logo} height={50}/>
        </Link>

        <input type='checkbox' id='menu-bar'/>
        <label htmlFor='menu-bar'><GiHamburgerMenu/></label>

        <nav className='navbar'>
            <ul>
                
                <li><Link href='/' >Home</Link></li>
               
                    <li><Link href='#' >Products</Link>
                    <ul >
                    {navbar1.length > 0 && navbar1.map((navData,i)=>
                        <li key={i}><Link href={`/product/${navData.id}`}>{navData.heading}</Link>
                            <ul>
                                {navData.subcategory && navData.subcategory.map((sub,i)=>
                                 <li key={i}>
                                    <Link href={`/product/${sub.id}`}>{sub.heading}</Link>
                                </li>
                                )}
                            </ul>
                        </li>
                        )}
                    </ul>
                </li>
                <li><Link href='/tools'>Tools</Link></li>
                <li><Link href='/gallery'>Gallery</Link></li>
                <li><Link href='/about' className='active'>About Us</Link></li>
                <li><Link href='/testimonials'>Testimonials</Link></li>
                <li><Link href='/'>Blog</Link></li>
                <li><Link href='/contact'>Contact Us</Link></li>
                <li>{uid ? <Link href='/profile'>Profile</Link> : <Link href='/login'>Login</Link>}</li>
               
             
            </ul>
            <ul className='menu menu-main header-menu' >
                <li>
                  <Link href='/cart'> 
                     <span><i><FaShoppingCart/></i></span>
                     <span id="cartcount" className="counter-cart">{getCart.count}</span>
                 </Link>
                </li>
                <li>
                  <Link href='/wishlist'> 
                     <span><i><FaHeart/></i></span>
                 </Link>
                </li>
            </ul>
        </nav>
    </header>
   <section id='page' className='page_title'>
            <div className='auto_container'>
                <h1>About Us</h1>
                <ul className='bread_crumb clearfix'>
                   <li>
                    <Link href='/'>Home</Link>
                    </li> 
                    <li>
                        About Us
                    </li>
                </ul>
            </div>
    </section>
        <AboutMain/>
        {/* <CarouselTestimonial/> */}
        <Swiper/>
        <Footer/>
    </>
    
  )
}

export default About