import React from 'react'
import './Bannernav.scss'

const BannerNav = ({ currentItem, total }) => {
  return (
    <div className='bannerNav'>
        <span className='bannerCur'>{currentItem}</span>
        <hr className='bannerDivider'></hr>
        <span className='bannerTotal'>{total}</span>
    </div>
  )
}

export default BannerNav