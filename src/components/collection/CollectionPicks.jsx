import { A } from 'solid-start'
import TextComponent from '../text/TextComponent'
import { BsList } from 'solid-icons/bs'
import CollectionPick from './CollectionPick'
import './CollectionPicks.css'
import { createThemeContext } from '../../context/createThemeContext'

const CollectionPicks = ({ title, data }) => {
 
  const {themeColor} = createThemeContext();

  return (
    <div className='collection-picks'>
      <div className='collection-picks-title-warp'>
        <TextComponent transfrom='capitalize' size='lg' label={title} />
        <A href={`/collections/${data?.slug}`}>
          <BsList fill={themeColor().colorTheme} size={20} />
        </A>
      </div>

      <div className='collection-picks-list'>
        {data?.books?.map((book) => {
          return <CollectionPick key={book.id} data={book} />
        })}
      </div>
    </div>
  )
}

export default CollectionPicks
