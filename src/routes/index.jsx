import CollectionPicks from '../components/collection/CollectionPicks'
import AuthorPicks from '../components/author/AuthorPicks'
import PickHalfs from '../components/picks/PickHalfs'
import Picks from '../components/picks/Picks'
import '../css/HomePage.css'
import { getCollections } from '../api/collection'
import { createEffect, createSignal } from 'solid-js'
import SkeletonCollection from '../components/skeleton/SkeletonCollection'
import { countCollections } from '../utils/initData'
import { Meta, Title } from 'solid-start'


const Home = () => {
  const [collectionData1, setCollectionData1] = createSignal(null)
  const [collectionData2, setCollectionData2] = createSignal(null)

  createEffect(() => {
    fetchCollections()
  })

  const fetchCollections = async () => {
    const response = await getCollections()
    setCollectionData1(response?.data?.data[0])
    setCollectionData2(response?.data?.data[1])
  }

  return (
    <div className='home'>
      {/* <Title>indexsyn - Programming Books</Title> */}
      <link rel='icon' href='/favicon.ico' />
      <Meta property='og:type' content='programming books' />
      <Meta property='og:url' content='https://indexsyn.com/' />
      <Meta property='og:title' content='indexsyn (programming books)' />
      <Meta data-rh='true' property='og:image' content='/logo/indexsyn.png' />
      {/* <Meta property='og:description' content='Programming books club' /> */}

      <Meta property='twitter:card' content='summary_large_image' />
      <Meta property='twitter:url' content='https://indexsyn.com/' />
      <Meta property='twitter:title' content='indexsyn (programming books)' />
      {/* <Meta property='twitter:description' content='Programming books club' /> */}
      <Meta
        data-rh='true'
        property='twitter:image:src'
        content='/logo/indexsyn.png'
      />
      <div className='home-board'>
        <PickHalfs title={'Best All Time'} apiPath='/bat' />
        {collectionData1() ? (
          <CollectionPicks
            title={'Design Pattern Collections'}
            data={collectionData1()}
          />
        ) : (
          <div class='home-collection-picks'>
            {countCollections.map((c) => (
              <SkeletonCollection key={c} />
            ))}
          </div>
        )}
        <Picks title={'Top Picks for you'} apiPath='/topPick' />
        {/* <Picks title={'Trending '} apiPath='/trending' /> */}
        <Picks title={'Most views'} apiPath='/mostView' />
        {collectionData2() ? (
          <CollectionPicks
            title={'Project Management Collections'}
            data={collectionData2()}
          />
        ) : (
          <div class='home-collection-picks'>
            {countCollections.map((c) => (
              <SkeletonCollection key={c} />
            ))}
          </div>
        )}
        {/* <AuthorPicks title={'Authors'} apiPath='/authors' /> */}
        {/* <Picks title={'Suggest'} apiPath='/suggest' />
        <Picks title={'Recommended'} apiPath='/recommend' /> */}
      </div>
      {/* <Footer />  */}
    </div>
  )
}

export default Home
