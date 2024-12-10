import React from 'react'
import './GridBanner.css'

const GridBanner = ({data}) => {
  return (
    <div className='grid-banners'>
      
      <div className='grid-banners-1'>
        {
        data?.slice(0,4).map((banner,i) => (
            <img
            key={i}
          className={`grid-banners-1-img-${i+1}`}
          src={banner?.attributes?.book?.data?.attributes?.cover?.data?.attributes?.url}
        ></img> 
        ))
      }
      </div>
      <div className='grid-banners-2'>
         {
        data?.slice(4,8).map((banner,i) => (
            <img
            key={i}
          className={`grid-banners-2-img-${i+1}`}
          src={banner?.attributes?.book?.data?.attributes?.cover?.data?.attributes?.url}
        ></img> 
        ))
      }
      </div>
    </div>
  )
}

export default GridBanner
