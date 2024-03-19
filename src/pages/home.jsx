import React from 'react'
import Banner from '../components/Banner'
import NavBar from '../components/NavBar'
import Faisons from '../components/Faisons'
import Nous from '../components/Nous'
import Partenaires from '../components/Partenaires'
import Footer from '../components/Footer'

const home = () => {
  return (
    <div className='bg-primary overflow-x-hidden'>
        <NavBar className={`top-0 left-0 fixed `}/>
        <Banner/>
        <Nous/>
        <Partenaires/>
        <Faisons/>
        <Footer/>
    </div>
  )
}

export default home