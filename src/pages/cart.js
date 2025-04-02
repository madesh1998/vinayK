import { Cart1, Footer, Navbar } from 'components'
import Navbar1 from 'components/Navbar1'
import Navbar2 from 'components/Navbar2'
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'

const Cart = ({data}) => {


  // const [cartItem, setCartItem] = useState([])
  // console.log('render');
  // useEffect(() => {
  //   let unmounted = false;
  //   if (!unmounted) {
  //     fetchData()
  //   }
  
  //   return () => { unmounted = true };
  // }, [])

  // const fetchData = useCallback(
  //   () => {
  //     fetch("https://calibreply.jurysoftprojects.com/backend/api/api.php", {
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //       },
  //       method: "POST",
  //       body: JSON.stringify({type: "getMyCart", ip: localStorage.getItem('ip_address'), uid:localStorage.getItem('uid')? localStorage.getItem('uid'): null})
  //     })
  //     .then((response) => response.json())
  //     .then((data) => setCartItem(data.data));
  //   },
  //   [],
  // )
  
 
  

  return (
    <>
    <Navbar2/>
    <section id='page' className='page_title'>
            <div className='auto_container'>
                <h1>Shopping cart</h1>
                <ul className='bread_crumb clearfix'>
                   <li>
                    <Link href='/'>Home</Link>
                    </li> 
                    <li>
                        View Cart
                    </li>
                </ul>
            </div>
    </section>
    <Cart1/>
    <Footer/>
    </>
  )
}

export default Cart


// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://calibreply.jurysoftprojects.com/backend/api/api.php` , {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({type: "getMyCart", ip:547510, uid:null})
//     })


//   const data = await res.json()
  
//   console.log(data)
//   return { props: {data: data.data } }
// }