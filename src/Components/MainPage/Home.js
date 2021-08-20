import React from 'react'
import Category from './../Reuse/Category';
import Carousel from './../Reuse/Carousel';
import Deals from './../Reuse/Deals'


export default function Home() {
    return (
        <div>
            <Category/>
            <Carousel/>
            <Deals/>
        </div>
    )
}
