import Carousel from 'react-bootstrap/Carousel';

import React, { useEffect, useState } from 'react'
import axios from '../axios';
import Image from 'next/image';

const HeroBanner = ({data}) => {

    // const [banner, setBanner] = useState([])
    // useEffect(() => {
    //     axios.post('/',{
    //         type:"site_slider"
    //     })
    //     .then(res => {
    //     //  console.log(res.data)
    //     setBanner(res.data.data)
    //     })
    //     .catch(err => {
    //       console.log(err)
    //       })
    // },[])

  return (
    <>
<Carousel fade slide={true} interval={4000}>
    {data.length > 0 && data.map((banImg,i)=>
     <Carousel.Item key={i}>
     <Image
     style={{height:'500px'}}
       className="d-block w-100"
       src={`https://jurysoftprojects.com/calibreply/api/uploads/Slider/${banImg.image}`}
       alt={banImg.image}
       width={500}
       height={500}
       priority
     />
   </Carousel.Item>
    )}
    </Carousel>

    </>
  )
}

export default HeroBanner