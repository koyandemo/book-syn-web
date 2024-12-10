import Book from '../book/Book'
import Skeleton from '../skeleton/Skeleton'
import './Collections.css'
import { counts } from '../../../utils/initData'

const Collections = ({ data }) => {

  return (
    <div className='collections'>
      {
        data.length > 0 ? data?.map((book) => (
          <Book key={book?.id} data={book}/>
        ))
          :
          counts.map((c) => (
            <Skeleton key={c} />
          ))
      }
    </div>
  )
}

export default Collections
