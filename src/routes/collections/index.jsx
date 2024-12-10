import { A, Link, Meta, Title, useLocation } from 'solid-start'
import { createEffect, createSignal } from 'solid-js'
import { getCollectionList } from '../../api/collection'
import ErrorHandlingPage from '../../components/errorhandling/ErrorHandlingPage'
import SkeletonCollection from '../../components/skeleton/SkeletonCollection'
import TextComponent from '../../components/text/TextComponent'
import { counts, FB_STORAGE_LINK } from '../../utils/initData'
import '../../css/CollectionListPage.css'

const CollectionListPage = () => {
  const location = useLocation();
  const [collectionList, setCollectionList] = createSignal(null)
  const [errorData, setErrorData] = createSignal({
    status: 0,
    message: '',
  })

  createEffect(() => {
    fetchCollectionList()
  })

  const fetchCollectionList = async () => {
    try {
      const response = await getCollectionList()
      console.log(response?.data?.data);
      setCollectionList(response?.data?.data)
    } catch (err) {
      setErrorData({ status: err.response.status, message: '' })
      console.error(err)
    }
  }

  return (
    <div class='collection-list-page'>
      <Title>indexsyn@collections</Title>
      <Meta property='og:type' content='programming books' />
      <Meta property='og:url' content='https://indexsyn.com/' />
      <Meta
        property='og:title'
        content='indexsyn (programming books collections)'
      />
      <Meta data-rh='true' property='og:image' content='/logo/indexsyn.png' />
      {/* <Meta property='og:description' content='Programming books club' /> */}

      <Meta property='twitter:card' content='summary_large_image' />
      <Meta property='twitter:url' content='https://indexsyn.com/' />
      <Meta
        property='twitter:title'
        content='indexsyn (programming books collections)'
      />
      {/* <Meta property='twitter:description' content='Programming books club' /> */}
      <Meta
        data-rh='true'
        property='twitter:image:src'
        content='/logo/indexsyn.png'
      />
      <Link rel='canonical' href={`https://indexsyn.com${location.pathname}`} />
      <div class='collection-list-container'>
        {collectionList() ? (
          <div class='collection-list-items'>
            {collectionList()?.map((item) => (
              <A href={`/collections/${item.slug}`}>
                <div class='collection-list-item'>
                  <div
                    className='collection-list-item-cover'
                    style={{ background: item.colorCode }}
                  >
                    <img
                      className='collection-list-item-cover-logo'
                      src='/favicon.ico'
                    ></img>
                    <p className='collection-list-item-cover-txt'>
                      {item.name.split('C')[0]}
                    </p>
                  </div>
                  {/* <img
                    class='collection-list-item-cover'
                    alt={`${item.cover}`}
                    src={`${FB_STORAGE_LINK}${item.cover}`}
                  ></img> */}
                  <TextComponent
                    size='sm'
                    transform='capitalize'
                    label={
                      item?.name?.length < 80
                        ? item?.name
                        : item?.name?.slice(0, 80).concat(' ...')
                    }
                  />
                </div>
              </A>
            ))}
          </div>
        ) : errorData().status ? (
          <ErrorHandlingPage status={errorData().status} />
        ) : (
          <div class='collection-list-items'>
            {counts.map((_) => (
              <SkeletonCollection />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default CollectionListPage
