import React from 'react'
import Home_innerpage from '../Innerpages/Home_innerpage'
import Home_innerpagetwo from '../Innerpages/Home_innerpagetwo'
import Home_innerpagethree from '../Innerpages/Home_innerpagethree'
import Home_innerpagefour from '../Innerpages/Home_innerpagefour'
import Home_innerpagefive from '../Innerpages/Home_innerpagefive'
import Footer from '../Components/Footer'


const Home=()=> {
  return (
    <div>
      <Home_innerpage/>
      <Home_innerpagetwo/>
      <Home_innerpagethree/>
      <Home_innerpagefour/>
      <Home_innerpagefive/>
      <Footer/>

    </div>
  )
}

export default Home 