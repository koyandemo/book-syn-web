import './RelatedPicks.css'
import Pick from './Pick'
import TextComponent from '../text/TextComponent'

const RelatedPicks = ({ title,data}) => {

  return (
    <div className='related-picks'>
      <div class='related-picks-title-warp'>
        <TextComponent transfrom='capitalize' size='lg' label={title} />
      </div>
      <div className='related-picks-list'>
        {data.map((book) => (
          <Pick data={book}></Pick>
        ))}
      </div>
    </div>
  )
}

export default RelatedPicks
