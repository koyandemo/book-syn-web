import { useParams,useLocation, Meta, Link} from 'solid-start'
import { createEffect, createSignal } from 'solid-js'
import { getCollectionDetail } from '../../api/collection'
import ErrorHandlingPage from '../../components/errorhandling/ErrorHandlingPage'
import Pick from '../../components/picks/Pick'
import SkeletonCollectionDetail from '../../components/skeleton/SkeletonCollectionDetail'
import TextComponent from '../../components/text/TextComponent'
import '../../css/CollectionDetailPage.css'
import { FB_STORAGE_LINK } from '../../utils/initData'

const CollectionDetailPage = () => {
   const params = useParams()
   const location = useLocation();
  const [collectionData, setCollectionData] = createSignal(null)
  const [errorData, setErrorData] = createSignal({
    status: 0,
    message: '',
  })

  createEffect(() => {
    if (params.slug) {
      fetchCollectionDetail(params.slug)
    }
  })

  const fetchCollectionDetail = async (slug) => {
    try {
      const response = await getCollectionDetail(slug)
      setCollectionData(response?.data?.data)
      document.title = response?.data?.data.name
    } catch (err) {
      setErrorData({ status: err.response.status, message: '' })
      console.error(err)
    }
  }

  return (
    <div class='collection-detail-page'>
      {collectionData() ? (
        <div class='collection-detail-container'>
          <Meta property='og:type' content='programming books' />
          <Meta
            property='og:url'
            content={`https://indexsyn.com${location.pathname}`}
          />
          <Meta property='og:title' content={collectionData()?.name} />
          <Meta property='og:image' content={collectionData().cover} />
          <Meta property='twitter:card' content='summary_large_image' />
          <Meta
            property='twitter:url'
            content={`https://indexsyn.com${location.pathname}`}
          />
          <Meta property='twitter:title' content={collectionData()?.name} />
          <Meta property='twitter:image' content={collectionData().cover} />
          <Meta
            name='keywords'
            content={`${
              collectionData().name
            },${collectionData().name.toUpperCase()},${collectionData().name.toLowerCase()},${collectionData()
              .name.replace(' ', '')
              .toLowerCase()},${collectionData()
              .name.replace(' ', '')
              .toUpperCase()},${collectionData().slug}`}
          />
          <Link
            rel='canonical'
            href={`https://indexsyn.com${location.pathname}`}
          />
          <div class='collection-detail-banner'>
            {/* <img src={`${FB_STORAGE_LINK}${collectionData().cover}`}></img> */}
            <div
              className='collection-detail-banner-cover'
              style={{ background: collectionData().colorCode }}
            >
              <img
                className='collection-detail-banner-cover-logo'
                src='/favicon.ico'
              ></img>
              <p className='collection-detail-banner-cover-txt'>
                {collectionData().name.split('C')[0]}
              </p>
            </div>
            <TextComponent
              transfrom='capitalize'
              size='lg'
              label={collectionData().name}
            />
          </div>
          <div class='collection-detail-items'>
            {collectionData().books.map((data) => (
              <Pick data={data} />
            ))}
          </div>
        </div>
      ) : errorData().status ? (
        <ErrorHandlingPage status={errorData().status} page='collections' />
      ) : (
        <SkeletonCollectionDetail />
      )}
    </div>
  )
}

export default CollectionDetailPage
