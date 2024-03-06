import React from 'react'
import './BannerInfo.scss'

const BannerInfo = ({title, description}) => {
  return (
    <div className='bannerInfo'>
        <p className='title'>{title}</p>
        <p className='description'>{description}</p>
    </div>
  )
}

export default BannerInfo;