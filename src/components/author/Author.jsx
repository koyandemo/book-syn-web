import { A } from 'solid-start'
import './Author.css'

const Author = ({ data }) => {
  return (
    <div className='author'>
      <A to={`/authors/${data?.attributes?.slug}`}>
        <img
          src={data?.attributes?.profile?.data?.attributes?.url}
          className='author-img'
        ></img>
        <div className='author-info'>
          <h5 className='author-title'>{
            data?.attributes?.name.length < 15 ? data?.attributes?.name : data?.attributes?.name?.slice(0, 15).concat(' ...')
          }</h5>
        </div>
      </A>
    </div>
  )
}
export default Author
