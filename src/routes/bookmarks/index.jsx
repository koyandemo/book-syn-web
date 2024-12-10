import '../../css/BookMarkPage.css'
import { prefixImg, READER_LINK } from '../../utils/initData'
import TextComponent from '../../components/text/TextComponent'
import { createEffect, createSignal } from 'solid-js'
import { useNavigate } from 'solid-start'

const BookMarkPage = () => {
  const navigate = useNavigate()
  const [bookMark,setBookMarks] = createSignal(null);

  createEffect(() => {

   const lsBookMarks = localStorage?.getItem('bookMarks')
     ? JSON.parse(localStorage?.getItem('bookMarks'))
     : []

    if (lsBookMarks.length <= 0) {
      navigate("/books")
    }else{
     setBookMarks(lsBookMarks);
    }
  })

  return (
    <div class='book-mark-page'>
      <div class='book-mark-container'>
        {bookMark()?.map((data) => (
          <div class='book-mark-card'>
            <img
              class='book-mark-card-img'
              src={prefixImg(data?.cover, 'book')}
            ></img>
            <div class='book-mark-card-infos'>
              <TextComponent
                transfrom='capitalize'
                size='sm'
                label={
                  data?.name?.length > 30
                    ? data?.name.slice(0, 30).concat('...')
                    : data?.name
                }
              />
              <div class='book-mark-card-info'>
                <div class='book-mark-card-info-item'>
                  <span class='book-mark-card-info-item-key'>
                    Start Reading
                  </span>
                  <span>:</span>
                  <span class='book-mark-card-info-item-value'>
                    {'2022-10-11'}
                  </span>
                </div>
                <div class='book-mark-card-info-item'>
                  <span class='book-mark-card-info-item-key'>Current Page</span>
                  <span>:</span>
                  <span class='book-mark-card-info-item-value'>
                    {data?.current_page}
                  </span>
                </div>
                <a
                  class='book-mark-card-action'
                  href={`${READER_LINK}${data?.slug}`}
                >
                  continuous reading
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookMarkPage
