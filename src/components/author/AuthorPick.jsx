import { A } from 'solid-start'
import { imgError, prefixImg } from '../../utils/initData'
import TextComponent from '../text/TextComponent'
import './AuthorPick.css'

const AuthorPick = ({ data }) => {

  return (
    <div className='author-pick'>
      {data.id !== 0 ? (
        <A href={`/author/${data?.slug}`}>
          <div class='author-pick-media'>
            <img
              className='author-pick-img'
              src={prefixImg(data?.profile, 'author')}
              onError={imgError}
            ></img>
          </div>
          <TextComponent
            size='sm'
            transform=''
            label={
              data?.name?.length < 20
                ? data?.name
                : data?.name?.slice(0, 20).concat(' ...')
            }
          />
        </A>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  )
}

export default AuthorPick
