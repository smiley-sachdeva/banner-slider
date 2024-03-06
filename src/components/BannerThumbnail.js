import React from 'react'
import './BannerThumbnail.scss'

const BannerThumbnail = ({img, onNext}) => {
  return (
    <div className='thumbnailSpinnerContainer'>
        <div className="spinner">
            <div className="bar barTop"></div>
            <div className="bar barRight"></div>
            <div className="bar barBottom"></div>
            <div className="bar barLeft"></div>
        </div>
        <div className='thumbnailContainer'>
            <div className='thumbnail'>
                <img src={img} alt='image 1'></img>
                <div className='nextBtn' onClick={onNext}>
                    NEXT
                </div>
            </div>                
        </div>            
    </div>       
  )
}
export default BannerThumbnail