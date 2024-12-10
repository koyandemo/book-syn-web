import { A } from 'solid-start'
import { AiFillStar } from 'solid-icons/ai'
import { imgError, prefixImg } from '../../utils/initData'
import TextComponent from '../text/TextComponent'
import './Pick.css'

const Pick = ({ data }) => {

  return (
    <div className='pick'>
      <a href={`/books/${data?.slug}`}>
          <div class='pick-media'>
            <img
              src={prefixImg(data?.cover, 'book')}
              className='pick-img'
              onError={({currentTarget}) => {
                currentTarget.onerror = null // prevents looping
                currentTarget.src = `/logo/booklogo.jpg`
              }}
            ></img>
          </div>
          <div className='pick-info'>
            <div className='pick-rating'>
              <AiFillStar
                fill='#FFD700'
                className='pick-rating-star'
              ></AiFillStar>
              <TextComponent
                size='xs'
                label={data?.rating}
                classes='pb-unset'
              />
            </div>
            <TextComponent
              size='sm'
              transform='lowercase'
              label={
                data?.name?.length < 14
                  ? data?.name
                  : data?.name?.slice(0, 14).concat(' ...')
              }
            />
          </div>
      </a>
    </div>
  )
}

export default Pick
