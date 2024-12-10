import Skeleton from '../skeleton/Skeleton';
import Book from './Book'
import './Books.css'

const counts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const Books = ({ data,apiCalled }) => {
  return (
    <div className='books'>
      {
        data.length > 0 ? 
        data?.map((book) => (
          <Book key={book?.id} data={book}></Book>
        ))
          :
          apiCalled ? 
          <div className='not-found'>
            Data Not found !
          </div>  
          :
            counts.map((c) => (
              <Skeleton key={c} />
            ))
      }

    </div>
  )
}

export default Books
