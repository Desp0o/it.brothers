import React from 'react'

import arrowIcon from "../../images/arrowIcon.webp"

import "./FirstSection.css"
import FirstSvg from '../../svgs/firstSvg'

export default function FirstSection() {
  return (
    <>
        <div className='first_section'>
          <FirstSvg />
            <div className='first_section_inner'>

              <div className='square1' />

              <div className='mainTitle_and_btn'>
                <h1 className='main_title'>IT <span>BROTHERS</span></h1>

                <div className='main_btn'>
                    <p>EXPLORE NOW</p>
                    <img src={arrowIcon} alt='arow' />
                </div>
              </div>

              <div className='despo' />

            </div>
        </div>
    </>
  )
}
