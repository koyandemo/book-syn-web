import '../../css/BookListPage.css'
import Filter from '../../components/filter/Filter'
import Pick from '../../components/picks/Pick'
import { createEffect, createSignal } from 'solid-js'
import { getBooks } from '../../api/book'
import Pagination from '../../components/pagination/Pagination'
import { Link, Meta, Title, useLocation, useNavigate, useSearchParams } from 'solid-start'
import Skeleton from '../../components/skeleton/Skeleton'
import { countList, limit } from '../../utils/initData'
import ErrorHandlingPage from '../../components/errorhandling/ErrorHandlingPage'
import TextComponent from '../../components/text/TextComponent'



const BookListPage = () => {
  const location = useLocation();
  const naviage = useNavigate();
  const [searchParams] = useSearchParams()
  const [loading, setLoading] = createSignal(true)
  const [bookdatas, setBookDatas] = createSignal([])
  const [totalPage, setTotalPage] = createSignal(0)
  const [filterData, setFilterData] = createSignal({
    page: 1,
    limit: limit,
    sorting: 'asc',
    date: '',
    key: 's-asc',
    genre: searchParams?.genre ? searchParams?.genre : '',
  })
  const [errorData, setErrorData] = createSignal({
    status: 0,
    message: '',
  })


  createEffect(() => {
    fetchBooks()
  })

  const fetchBooks = async () => {
    try {
      if (filterData().genre) {
        setTotalPage(0)
      }
      setLoading(true)
      const response = await getBooks(filterData())
      setTotalPage(response?.data?.total)
      setBookDatas(response?.data?.data)
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    } catch (err) {
      setErrorData({ status: err.response.status, message: '' })
      setLoading(false)
    }
  }

  const handlePaginate = (currentPage) => {
    setFilterData({ ...filterData(), page: currentPage })
  }

  const handleReset = () => {
   if(filterData().genre !== ""){
     setFilterData({
       page: 1,
       limit: limit,
       sorting: 'asc',
       date: '',
       key: 's-asc',
       genre: '',
     })
     setTotalPage(0)
     naviage('/books')
   }
  }

  return (
    <div class='book-list-page'>
      <Title>indexsyn@books</Title>
      <Meta property='og:type' content='programming books' />
      <Meta property='og:url' content='https://indexsyn.com/' />
      <Meta property='og:title' content='indexsyn (programming book list)' />
      <Meta data-rh='true' property='og:image' content='/logo/indexsyn.png' />
      {/* <Meta property='og:description' content='Programming books club' /> */}

      <Meta property='twitter:card' content='summary_large_image' />
      <Meta property='twitter:url' content='https://indexsyn.com/' />
      <Meta
        property='twitter:title'
        content='indexsyn (programming book list)'
      />
      {/* <Meta property='twitter:description' content='Programming books club' /> */}
      <Meta
        data-rh='true'
        property='twitter:image:src'
        content='/logo/indexsyn.png'
      />
      <Link
        rel='canonical'
        href={`https://indexsyn.com${location.pathname}`}
      />
      <Filter
        setFilterData={setFilterData}
        filterData={filterData()}
        fReset={handleReset}
        componentType='book'
      />
      <div class='book-list-container'>
        {!loading() && bookdatas().length > 0 ? (
          <div class='book-list-items'>
            {bookdatas().map((data) => (
              <Pick data={data} />
            ))}
          </div>
        ) : (
          <>
            {loading() && bookdatas().length > 0 ? (
              <div class='book-list-items'>
                {countList.map((c) => (
                  <Skeleton key={c} />
                ))}
              </div>
            ) : (
              <div>
                {errorData().status ? (
                  <ErrorHandlingPage status={errorData().status} page='books' />
                ) : (
                  <>
                    {!loading() && bookdatas().length <= 0 && (
                      <TextComponent
                        transfrom='capitalize'
                        size='xl'
                        label={'Not Found !'}
                      />
                    )}
                  </>
                )}
              </div>
            )}
          </>
        )}
        {totalPage() && bookdatas().length >= 0 && (
          <Pagination
            limit={limit}
            currentPage={filterData().page}
            total={totalPage()}
            callBack={(value) => handlePaginate(value)}
          />
        )}
      </div>
      <div class='ad-right'></div>
    </div>
  )
}

export default BookListPage
