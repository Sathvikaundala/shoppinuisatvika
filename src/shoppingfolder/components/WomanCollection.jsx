import React from 'react'

const WomanCollection = (props) => {
    const{title,image1,image2,image3,image4,image5,image6}=props.ladiesFashion
  return (
   <div className='collectionSection'>
      

    <div className='bannerBox'>
        <img src="assets/LadiesBanner.gif" alt="error loading image"></img>

    </div>

      <h2>{title}</h2>
      <div className='menImages'>
        <img src={image1} alt=""></img>
       
        <img src={image2} alt=""></img>
        
        <img src={image3} alt=""></img>
        
        <img src={image4} alt=""></img>
        
        <img src={image5} alt=""></img>
        
        <img src={image6} alt=""></img>
        
      </div>
    </div>
  )
}

export default WomanCollection