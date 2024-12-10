import { createResource} from "solid-js"
import { Link, Meta, Title, useLocation, useParams, useRouteData } from "solid-start"
import { getBook } from "../../../api/book"
import { prefixImg } from "../../../utils/initData"

export function routeData({ params }) {
  const [data] = createResource(async () => {
    try {
      const response = await getBook(params.slug)
      return await response.data
    } catch (err) {
      return await err?.response?.data
    }
  })
  return { data }
}

const BookReaderPage = () => {
  const params = useParams()
  const location = useLocation();
    const { data } = useRouteData()
  // const [book,setBook] = createSignal(null);


  // createEffect(() => {
  //   fetchBookDetail(params.slug);
  // })
  
  // const fetchBookDetail = async(slug) => {
  //    const response = await getBook(params.slug)
  //    setBook(response?.data?.data);
  // }


  return (
    <div>
      {data()?.status === 200 && (
        <>
          <Title>{data().data?.name}</Title>
          <Meta property='og:type' content='programming books' />
          <Meta
            property='og:url'
            content={`https://indexsyn.com${location.pathname}`}
          />
          <Meta property='og:title' content={data().data?.name} />
          <Meta property='og:description' content={data().data?.overview} />
          <Meta
            property='og:image'
            content={prefixImg(data().data?.cover, 'book')}
          />
          <Meta property='twitter:card' content='summary_large_image' />
          <Meta
            property='twitter:url'
            content={`https://indexsyn.com${location.pathname}`}
          />
          <Meta property='twitter:title' content={data().data?.name} />
          <Meta
            property='twitter:description'
            content={data().data?.overview}
          />
          <Meta
            property='twitter:image'
            content={prefixImg(data().data?.cover, 'book')}
          />
          <Meta
            name='keywords'
            content={`${
              data().data.name
            },${data().data.name.toUpperCase()},${data().data.name.toLowerCase()},${data()
              .data.name.replace(' ', '')
              .toLowerCase()},${data()
              .data.name.replace(' ', '')
              .toUpperCase()},${data().data.slug}`}
          />
          <Meta name='description' content={data().data?.overview} />
          <Link
            rel='canonical'
            href={`https://indexsyn.com${location.pathname}`}
          />
        </>
      )}
      <iframe
        //src='http://127.0.0.1:3001/books/reading/clean-code'
        src={`https://pg-touch.surge.sh/books/reading/${params.slug}`}
        style='border: 0; width: 100%; height: 100vh'
      ></iframe>
    </div>
  )
}

export default BookReaderPage
























// createEffect(() => {
  //   window.addEventListener('message', function (event) {
  //     console.log('eh')
  //     if (event.origin === 'http://127.0.0.1:3000') {
  //       // Use event.data to access the shared data
  //       console.log(event.data)
  //     }
  //   })
  // })