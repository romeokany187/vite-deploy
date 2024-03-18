import React from 'react'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Nous from '../components/Nous'
import Faisons from '../components/Faisons'
import Partenaires from '../components/Partenaires'
import Footer from '../components/Footer'

const home = () => {
  return (
    <div className='bg-primary overflow-x-hidden'>
        <NavBar className="top-[0px] left-[0px] fixed" />
        <Banner/>
        <Nous/>
        <Faisons/>
        <Partenaires/>
        <Footer/>
    </div>
  )
}

export default home