import { useParams } from 'solid-start'
import { createEffect, createSignal } from 'solid-js'
import { getAuthor } from '../../api/author'
import AuthorDetail from '../../components/detail/author/AuthorDetail'
import ErrorHandlingPage from '../../components/errorhandling/ErrorHandlingPage'
import SkeletonDetail from '../../components/skeleton/SkeletonDetail'
import '../../css/AuthorDetailPage.css'

const AuthorDetailPage = () => {
  const { slug } = useParams()
  const [authorData, setAuthorData] = createSignal(null)
  const [errorData, setErrorData] = createSignal({
    status: 0,
    message: '',
  })

  createEffect(() => {
    fetchAuthorDetail(slug)
  })

  const fetchAuthorDetail = async (slug) => {
    try {
      const response = await getAuthor(slug)
      setAuthorData(response?.data?.data)
      document.title = response?.data?.data.name
    } catch (err) {
      setErrorData({ status: err.response.status, message: '' })
      console.error(err)
    }
  }

  return (
    <div class='author-detail-page'>
      {authorData() ? (
        <AuthorDetail data={authorData()} />
      ) : errorData().status ? (
        <ErrorHandlingPage status={errorData().status} page='authors' />
      ) : (
        <SkeletonDetail />
      )}
    </div>
  )
}

export default AuthorDetailPage
