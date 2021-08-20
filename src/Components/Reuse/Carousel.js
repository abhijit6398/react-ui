import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { imgData } from '../Resource/imgData'

export default function Carousel() {
    return (
        <div className="m-2">
            {/* <h1>Carousel</h1> */}
            <Slider autoplay autoplaySpeed={2000} dots initialSlide={2} infinite>
                {
                    imgData.map((item ,index)=>(
                         <div key={index} >
                             <img src={item}  alt="" style={{width:"100vw",height:"50vh"}}/>
                         </div>
                    ))
                }
            </Slider>
        </div>
    )
}
