import { createEffect, createSignal } from 'solid-js'
import { useParams } from 'solid-start'
import { getBookLinkBySlug } from '../../api/book'
import PDFViewerApp from './PDFViewer'
import './PDFViewerPage.css'
import ErrorHandlingPage from '../errorhandling/ErrorHandlingPage'
import { FB_STORAGE_LINK } from '../../utils/initData'

const PDFViewerPage = () => {
  const { slug } = useParams()
  const [pdfFilePath, setPdfFilePath] = createSignal('')
  const [errorData, setErrorData] = createSignal({
    status: 0,
    message: '',
  })
  const [loading, setLoading] = createSignal(true)

  const fetchBookLinkBySlug = async (slug) => {
    try {
      const response = await getBookLinkBySlug(slug)
      const link = FB_STORAGE_LINK +response?.data?.data?.link
      setPdfFilePath(link)
      document.title = response?.data?.data?.name
      setLoading(false);
    } catch (err) {
      setErrorData({ status: err.response.status, message: '' })
      setLoading(false);
      console.error(err)
    }
  }

  createEffect(() => {
    fetchBookLinkBySlug(slug)
  })

  return (
    <div class='pdf-viewer-page pdfSlick'>
      {loading() ? (
        <p>loading ...</p>
      ) : (
        <div>
          {errorData().status ? (
            <ErrorHandlingPage status={errorData().status} page={'books'} />
          ) : (
            <PDFViewerApp pdfFilePath={pdfFilePath()} />
          )}
        </div>
      )}
    </div>
  )
}

export default PDFViewerPage
