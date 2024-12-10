// import { MdOutlineGridView } from 'react-icons/md'
import { A } from 'solid-start'
import { BsList } from 'solid-icons/bs'
import { createEffect, createSignal } from 'solid-js'
import { getPickData } from '../../api/homepage'
import { createThemeContext } from '../../context/createThemeContext'
import { counts } from '../../utils/initData'
import Skeleton from '../skeleton/Skeleton'
import TextComponent from '../text/TextComponent'
import AuthorPick from './AuthorPick'
import './AuthorPicks.css'


const Authors = ({ title, apiPath }) => {
  const {themeColor} = createThemeContext();
  const [authorData, setAuthorData] = createSignal(null)

  createEffect(() => {
    fetchAuthorData()
  })

  const fetchAuthorData = async () => {
    if (apiPath) {
      const response = await getPickData(apiPath)
      if (response.status === 200) {
        setAuthorData(response?.data?.data)
      }
    }
  }



  return (
    <div className='author-picks'>
      <div className='author-picks-title-warp'>
        <TextComponent transfrom='capitalize' size='lg' label={title} />
        {/* <A href={`/authors`}>
          <BsList fill={themeColor().colorTheme} size={20} />
        </A> */}
      </div>
      <div className='author-picks-list'>
        {authorData()?.length > 0
          ? authorData().map((author, i) => {
              return <AuthorPick key={i} data={author} />
            })
          : counts.map((c) => <Skeleton key={c} />)}
      </div>
    </div>
  )
}

export default Authors
