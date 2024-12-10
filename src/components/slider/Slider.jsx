import React from 'react'
import { useState } from 'react'
import Pick from '../picks/Pick'
import './Slider.css'

const Slider = ({ data }) => {
  return (
    <div className='slider'>
      <div className='scroll-holder'>
        <div className='scroll-tray'>
          <div className='div1'>
            <img src='https://www.themoviedb.org/t/p/w220_and_h330_face/djM2s4wSaATn4jVB33cV05PEbV7.jpg'></img>
          </div>
          <div className='div2'>
            <img src='https://www.themoviedb.org/t/p/w220_and_h330_face/59SVNwLfoMnZPPB6ukW6dlPxAdI.jpg'></img>
          </div>
          <div className='div3'>
            <img src='https://www.themoviedb.org/t/p/w220_and_h330_face/fenNPxVF5ERy0CSyVruuEg959Hg.jpg'></img>
          </div>
          <div className='div4'>
            <img src='https://www.themoviedb.org/t/p/w220_and_h330_face/bSqpOGzaKBdGkBLmcm1JJIVryYy.jpg'></img>
          </div>
          <div className='div5'>
            <img src='https://www.themoviedb.org/t/p/w220_and_h330_face/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg'></img>
          </div>
          <div className='div6'>
            <img src='https://www.themoviedb.org/t/p/w220_and_h330_face/y6b8OraLybW0O4VFIxnmkPl9ZJc.jpg'></img>
          </div>
          <div className='div7'>
            <img src='https://www.themoviedb.org/t/p/w220_and_h330_face/juvKmySdoCFmjuPeokOtEK3jGHx.jpg'></img>
          </div>
          <div className='div8'>
            <img src='https://www.themoviedb.org/t/p/w220_and_h330_face/yph9PAbmjYPvyvbeZvdYIhCZHEu.jpg'></img>
          </div>
          <div className='div9'>
            <img src='https://www.themoviedb.org/t/p/w220_and_h330_face/3G1wHQNITyfiABp2fgytpiFMHf9.jpg'></img>
          </div>
          <div className='div10'>
            <img src='https://www.themoviedb.org/t/p/w220_and_h330_face/xvjCiv1xNlK1kNnoe1nul899vIp.jpg'></img>
          </div>
        </div>
        <div className='scroll-tray-reverse'>
          <div>
            <img src='https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/qhaPuyznsxb13wSQbpqSDqtNuX8.jpg'></img>
          </div>
          <div>
            <img src='https://www.themoviedb.org/t/p/w220_and_h330_face/zI3E2a3WYma5w8emI35mgq5Iurx.jpg'></img>
          </div>
          <div>
            <img src='https://www.themoviedb.org/t/p/w220_and_h330_face/ixgnqO8xhFMb1zr8RRFsyeZ9CdD.jpg'></img>
          </div>
          <div>
            <img src='https://www.themoviedb.org/t/p/w220_and_h330_face/ywBt4WKADdMVgxTR1rS2uFwMYTH.jpg'></img>
          </div>
          <div>
            <img src='https://www.themoviedb.org/t/p/w220_and_h330_face/cXUqtadGsIcZDWUTrfnbDjAy8eN.jpg'></img>
          </div>
          <div>
            <img src='https://www.themoviedb.org/t/p/w220_and_h330_face/59SVNwLfoMnZPPB6ukW6dlPxAdI.jpg'></img>
          </div>
          <div>
            <img src='https://www.themoviedb.org/t/p/w220_and_h330_face/wEo5pzSZ3MF4EzNvY2R1OZNX266.jpg'></img>
          </div>
          <div>
            <img src='https://www.themoviedb.org/t/p/w220_and_h330_face/aLB7psB9N81n5GecHNOudXWW3AI.jpg'></img>
          </div>
          <div>
            <img src='https://www.themoviedb.org/t/p/w220_and_h330_face/dOtBvN4H7ICS2LabdNukRl4xYbC.jpg'></img>
          </div>
          <div>
            <img src='https://www.themoviedb.org/t/p/w355_and_h200_multi_faces/9cLZmntslJkvxFyW3IYjnfSsmhw.jpg'></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider
