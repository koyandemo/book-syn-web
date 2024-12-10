import {A } from 'solid-start'
import { AiFillStar } from 'solid-icons/ai';
import { prefixImg } from '../../utils/initData';
import TextComponent from '../text/TextComponent';
import './PickHalf.css';

const PickHalf = ({ data }) => {

  return (
    <div className='pickhalf'>
      <A href={`/books/${data?.slug}`}>
        <div class='pickhalf-media'>
          <img
            src={prefixImg(data?.cover, 'book')}
            // onError={({ currentTarget }) => {
            //   currentTarget.onerror = null // prevents looping
            //   currentTarget.src = `https://devwaiyan.github.io/book-syn.github.io/images/${data?.cover}`
            // }}
            className='pickhalf-img'
          ></img>
        </div>
        <div className='pickhalf-info'>
          <div className='pickhalf-rating'>
            <AiFillStar
              fill='#FFD700'
              className='pick-rating-star'
            ></AiFillStar>
            <TextComponent size='xs' label={data?.rating} classes='pb-unset' />
          </div>
          <h5 className='pickhalf-title'>
            {data?.name.length < 8
              ? data?.name
              : data?.name?.slice(0, 8).concat(' ...')}
          </h5>
        </div>
      </A>
    </div>
  )
}

export default PickHalf
