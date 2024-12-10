import { A } from 'solid-start'
import { prefixImg } from '../../utils/initData';
import './CollectionPick.css'

const CollectionPick = ({ data }) => {
  
  return (
    <div className='collection-pick'>
      {data.id !== 0 ? (
        <A href={`/books/${data?.slug}`}>
          <img
            className='collection-pick-img'
            src={prefixImg(data?.cover, 'book')}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null // prevents looping
              currentTarget.src = `/logo/booklogo.jpg`
            }}
          ></img>
        </A>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  )
}

export default CollectionPick
