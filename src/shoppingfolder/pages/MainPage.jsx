import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'
import {Gents,Ladies} from '../Data'
import { useState } from 'react'
import WomanCollection from '../components/WomanCollection'



const MainPage = () => {
  
  const[gentsFashion,setGentsFashion]=useState(Gents)
  const[ladiesFashion,setLadiesFashion]=useState(Ladies)
  console.log(Ladies)
  return (
    
    <div>
        <Header/>
        <Banner/>
        <Collections gentsFashion={gentsFashion} />
        <WomanCollection ladiesFashion={ladiesFashion}/>
        
        <Footer/>
    </div>
  )
}

export default MainPage