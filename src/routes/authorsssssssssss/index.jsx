import { createEffect, createSignal } from 'solid-js'
import { getAuthors } from '../../api/author'
import AuthorPick from '../../components/author/AuthorPick'
import ErrorHandlingPage from '../../components/errorhandling/ErrorHandlingPage'
import Filter from '../../components/filter/Filter'
import Pagination from '../../components/pagination/Pagination'
import Skeleton from '../../components/skeleton/Skeleton'
import { countList, limit } from '../../utils/initData'
import '../../css/AuthorListPage.css'
import { Title } from 'solid-start'


const AuthorListPage = () => {
  const [authorDatas, setAuthorDatas] = createSignal([])
  const [loading, setLoading] = createSignal(true)
  const [totalPage, setTotalPage] = createSignal(0)

  const [filterData, setFilterData] = createSignal({
    page: 1,
    limit: limit,
    sorting: 'asc',
    date: '',
  })
  const [errorData, setErrorData] = createSignal({
    status: 0,
    message: '',
  })

  createEffect(() => {
    fetchAuthors()
  })

  const fetchAuthors = async () => {
    try {
      setLoading(true)
      const response = await getAuthors(filterData())
      setTotalPage(response?.data?.total)
      setAuthorDatas(response.data.data)
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

  return (
    <div class='author-list-page'>
      <Title>indexsyn@authors</Title>
      <Filter
        setFilterData={setFilterData}
        filterData={filterData()}
        componentType={'author'}
        isAuthorComponent={true}
      />
      <div class='author-list-container'>
        {!loading() && authorDatas().length > 0 ? (
          <div class='author-list-items'>
            {authorDatas().map((data) => (
              <AuthorPick data={data} />
            ))}
          </div>
        ) : (
          <>
            {loading() && authorDatas().length > 0 ? (
              <div class='author-list-items'>
                {countList.map((c) => (
                  <Skeleton key={c} />
                ))}
              </div>
            ) : (
              <div>
                {errorData().status ? (
                  <ErrorHandlingPage
                    status={errorData().status}
                    page='authors'
                  />
                ) : (
                  <>
                    {!loading() && authorDatas().length <= 0 && (
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
        {totalPage() && authorDatas().length > 0 && (
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

export default AuthorListPage
