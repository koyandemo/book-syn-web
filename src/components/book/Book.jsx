import './Book.css'
// import { AiFillStar } from 'react-icons/ai'
import { A } from 'solid-start'

const Book = ({ data }) => {
  return (
    <div className='book'>
      <A href={`/books/${data?.attributes?.slug}`}>
        <img
          src={data?.attributes?.cover?.data?.attributes?.url}
          className='book-img'
        ></img>
        <div className='book-info'>
          <div className='book-rating'>
            {/* <AiFillStar className='book-rating-star'></AiFillStar> */}
            <h5 className='book-rating-info'>{data?.attributes?.rating}</h5>
          </div>
          <h5 className='book-title'>{
            data?.attributes?.name.length < 15 ? data?.attributes?.name : data?.attributes?.name?.slice(0, 15).concat(' ...')
          }</h5>
        </div>
      </A>
    </div>
  )
}
export default Book
