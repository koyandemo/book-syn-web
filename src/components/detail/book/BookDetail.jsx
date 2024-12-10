import { A, Link, Meta, Title, useLocation } from 'solid-start'
import axios from 'axios'
import { AiFillStar } from 'solid-icons/ai'
import { createEffect, createSignal } from 'solid-js'
import { getRelatedBooksByGenres } from '../../../api/book'
import { counts, FB_STORAGE_LINK, prefixImg } from '../../../utils/initData'
import RelatedPicks from '../../picks/RelatedPicks'
import Skeleton from '../../skeleton/Skeleton'
import TextComponent from '../../text/TextComponent'
import './BookDetail.css'

const BookDetail = ({ data }) => {
  const location = useLocation();
  const [downloadLoading, setDownloadLoading] = createSignal(false)
  const [downloadProgress, setDownloadProgress] = createSignal(0)
  const [relatedBooks, setRelatedBooks] = createSignal(null)

  createEffect(() => {
    fetchRelatedBookByGenres()
  })

  const fetchRelatedBookByGenres = async () => {
    const response = await getRelatedBooksByGenres(
      data.id,
      data.genres.join(',')
    )
    setRelatedBooks(response?.data?.data)
  }

  const handlerDownLoadBook = () => {
    if(!downloadLoading()){
    setDownloadLoading(true)
    setTimeout(() => {
      const options = {
        responseType: 'arraybuffer',
        onDownloadProgress: function (progressEvent) {
          const precentComplete = Math.floor(
            (progressEvent.loaded / progressEvent.total) * 100
          )
          setDownloadProgress(precentComplete)
          // setProgressWidth(Math.floor((490 * precentComplete) / 100))
        },
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/pdf',
        },
      }
      // console.log(data.link,'48');
      // fetch(data.link)
      //   .then((response) => response.blob())
      //   .then((blob) => {
      //     const url = window.URL.createObjectURL(blob)
      //     const link = document.createElement('a')
      //     link.href = url
      //     link.setAttribute('download', `${data?.name}.pdf`)
      //     document.body.appendChild(link)
      //     link.click()
      //     document.body.removeChild(link)
      //     setDownloadLoading(false)
      //     setTimeout(() => {
      //       gtag('event', 'Downloads', {
      //         event_category: 'DownLoad',
      //         event_label: `${data?.name}`,
      //       })
      //     }, [1000])
      //   })
      //   .catch((error) => console.log(error))

      axios
        .get(`${FB_STORAGE_LINK}${data.link}`, options)
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]))
          const link = document.createElement('a')
          link.href = url
          link.setAttribute('download', `${data?.name}.pdf`)
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          setDownloadLoading(false)
          // setTimeout(() => {
          //   gtag('event', 'Downloads', {
          //     event_category: 'DownLoad',
          //     event_label: `${data?.name}`,
          //   })
          // }, [1000])
        })
        .catch((error) => console.log(error))
    },1000)
  }else{
    return;
  }
  }

  const handlerReadNow = (slug) => {
    // A(`/books/reading/${slug}`)
    window.open(`/books/reading/${slug}`, '_blank')
  }

  return (
    <div class='book-detail'>
      <Title>{data?.name}</Title>
      {/* <Meta name='robots' content='index, follow' /> */}
      <Meta property='og:type' content='programming books' />
      <Meta
        property='og:url'
        content={`https://indexsyn.com${location.pathname}`}
      />
      <Meta property='og:title' content={data?.name} />
      <Meta property='og:description' content={data?.overview} />
      <Meta property='og:image' content={prefixImg(data?.cover, 'book')} />
      <Meta property='twitter:card' content='summary_large_image' />
      <Meta
        property='twitter:url'
        content={`https://indexsyn.com${location.pathname}`}
      />
      <Meta property='twitter:title' content={data?.name} />
      <Meta property='twitter:description' content={data?.overview} />
      <Meta property='twitter:image' content={prefixImg(data?.cover, 'book')} />
      <Meta
        name='keywords'
        content={`${
          data.name
        },${data.name.toUpperCase()},${data.name.toLowerCase()},${data.name
          .replace(' ', '')
          .toLowerCase()},${data.name.replace(' ', '').toUpperCase()},${
          data.slug
        }`}
      />
      <Meta name='description' content={data?.overview} />
      <Link rel='canonical' href={`https://indexsyn.com${location.pathname}`} />
      {/* <script>
          {`window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
            ecommerce: {
            detail :{products: [{name: ${data.name},id:70,price:12,category:"Posters"}]}
          }        
         })`}
        </script>
        <script>
          {`
          (function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N5DPB3FL')
          `}
        </script> */}

      {/* <Link rel='manifest' href='/manifest.webmanifest' /> */}
      <div class='book-detail-imgw'>
        <div class='book-detail-imgw-media'>
          <img
            class='book-detail-imgw-img'
            alt={data?.name}
            src={prefixImg(data?.cover, 'book')}
          ></img>
          {data?.link && (
            <div class='book-detail-actions'>
              <button class='bs-btn' onclick={() => handlerReadNow(data?.slug)}>
                Read Now
              </button>
              <button class={`bs-btn ${downloadLoading() ? "btn-disabled" : ""}`} onclick={() => handlerDownLoadBook()}>
                {downloadLoading() ? 'Downloading ...' : ' Download'}
              </button>
            </div>
          )}
        </div>
        <div class='book-detail-imgw-info'>
          <TextComponent transfrom='capitalize' size='xl' label={data?.name} />
          <div class='book-detail-imgw-rating'>
            <AiFillStar fill='#FFD700' />
            <TextComponent
              transfrom='capitalize'
              size='sm'
              classes='pb-unset'
              label={data?.rating}
            />
          </div>
          <div class='book-detail-imgw-overview'>
            <TextComponent
              transfrom='capitalize'
              size='lg'
              label={'Overview'}
            />
            <div class='book-detail-overview' innerHTML={data?.overview} />
          </div>
          <ul class='book-detail-imgw-infos'>
            <li class='book-detail-imgw-infos-item'>
              <span class='book-detail-imgw-infos-item-key'>published</span>
              <span>:</span>
              <span class='book-detail-imgw-infos-item-value'>
                {data?.release_date}
              </span>
            </li>
            <li class='book-detail-imgw-infos-item'>
              <span class='book-detail-imgw-infos-item-key'>pages</span>
              <span>:</span>
              <span class='book-detail-imgw-infos-item-value'>
                {data?.pages}
              </span>
            </li>
            <li class='book-detail-imgw-infos-item'>
              <span class='book-detail-imgw-infos-item-key'>categories</span>
              <span>:</span>
              <div class='book-detail-imgw-infos-item-value-warp'>
                {data?.genres?.map((genre) => (
                  <A href={`/books?genre=${genre}`}>
                      <span class='book-detail-imgw-infos-item-value under-line'>
                        {genre.replaceAll('-', ' ')}
                      </span>
                      ,
                  </A>
                ))}
              </div>
            </li>
          </ul>
          <div class='book-detail-imgw-authors'>
            <TextComponent transfrom='capitalize' size='sm' label={'Author'} />
            <div class='book-detail-imgw-authors-items'>
              {data?.authors?.map((author) => (
                <div>
                  {author.status ? (
                    <A href={`/author/${author.slug}`}>
                      <h5 class='book-detail-imgw-author under-line'>
                        {author.name},
                      </h5>
                    </A>
                  ) : (
                    <h5 class='book-detail-imgw-author'>{author.name},</h5>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <div class='book-detail-actions'>
        <div
          style={{
            marginTop: 20,
            display: 'flex',
            gap: '5px',
            justifyContent: 'center',
          }}
        >
          {colors.length > 0 &&
            colors.map((color, id) => (
              <div style={{ position: 'relative' }}>
                <div
                  onClick={() => copyToClipBoard(color)}
                  key={id}
                  style={{
                    backgroundColor: color,
                    width: 30,
                    height: 30,
                    cursor: 'pointer',
                  }}
                />
                {isCopy && color === currentColor && (
                  <p
                    style={{
                      fontSize: '8px',
                      width: '30px',
                      height: '10px',
                      position: 'absolute',
                      left: '0px',
                      top: '-20px',
                      textAlign: 'center',
                      backgroundColor: '#49DAF1',
                    }}
                  >
                    copied!
                  </p>
                )}
              </div>
            ))}
        </div>
      </div> */}
      <div>
        <TextComponent
          transfrom='capitalize'
          size='sm'
          label={'Availables on'}
        />
        <div class='book-detail-availables'>
          {data.availables?.map((item) => (
            <a href={item.link} target='_blank'>
              <img
                class='book-detail-available-logo'
                src={`/logo/${item.name}.png`}
              ></img>
            </a>
          ))}
        </div>
      </div>
      {/* <div class='book-detail-ads'>
        <img src='https://www.aashirvadcinemas.in/images/advertise0209.jpg'></img>
      </div> */}
      {/* <p class='book-detail-info'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt tempore
        nisi aliquam, nobis labore eos quod unde ab laborum aut voluptatem
        tenetur corrupti quas cupiditate rem odio velit saepe? Sed fugit,
        dignissimos commodi quo eius blanditiis odit laudantium magnam
        distinctio itaque vitae. Aliquid, ab facilis tempora ea, sint in dolore
        assumenda hic eaque, repellendus ut culpa reiciendis? Culpa consequuntur
        voluptate quam corporis nemo neque molestiae dicta totam libero nulla
        vitae unde molestias praesentium fugit omnis, blanditiis, rem repellat
        illo. Quam, eius ad? Sint laborum reiciendis aspernatur praesentium
        quisquam fuga vitae inventore repudiandae amet assumenda esse dolor
        ducimus ullam nulla quis, nesciunt distinctio ab dicta porro quam, atque
        enim. Voluptates deserunt quisquam blanditiis sed, incidunt aliquid
        officiis ullam quidem magni nihil mollitia eaque obcaecati maxime
        ducimus doloremque, aut quasi amet veniam. Beatae consequatur impedit
        animi repudiandae ipsam excepturi aliquam, quaerat, earum, cupiditate
        libero laborum magnam porro. Numquam nobis saepe molestias delectus?
      </p> */}
      {relatedBooks() ? (
        <RelatedPicks title={'Related Books'} data={relatedBooks()} />
      ) : (
        <div className='book-detail-related-list'>
          {counts.map((c) => (
            <Skeleton key={c} />
          ))}
        </div>
      )}
    </div>
  )
}

export default BookDetail
