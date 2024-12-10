import { A } from '@solidjs/router';
import { imgError, prefixImg } from '../../../utils/initData';
import Pick from '../../picks/Pick'
import TextComponent from '../../text/TextComponent'
import './AuthorDetail.css'

const AuthorDetail = ({ data }) => {

  return (
    <div className='author-detail'>
      <div className='author-detail-imgw'>
        <img
          className='author-detail-imgw-img'
          src={prefixImg(data?.profile, 'author')}
          onError={imgError}
        ></img>
        <div className='author-detail-imgw-container'>
          <TextComponent transfrom='capitalize' size='xl' label={data?.name} />
          {/* <ul className='author-detail-imgw-infos'>
            <li className='author-detail-imgw-infos-item'>
              <span className='author-detail-imgw-infos-item-key'>
                birthday
              </span>
              <span>:</span>
              <span className='author-detail-imgw-infos-item-value'>
                &nbsp;{data?.birthday}
              </span>
            </li>
          </ul> */}
          <div class='author-detail-imgw-infos'>
            <div className='author-detail-imgw-overview'>
              <TextComponent
                transfrom='capitalize'
                size='lg'
                label={'Biography'}
              />

              <p>
                {data?.bio}
                &nbsp;
                <a href={data?.bio_link} target={'_blank'}>
                  see more
                </a>
              </p>
            </div>
            <div class='author-detail-imgw-socials'>
              {data?.socials?.map((social) => (
                <A href={social.link} target='_blank'>
                  <img
                    class='author-detail-imgw-socilas-social'
                    src={`/logo/${social.name}.png`}
                  ></img>
                </A>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div class='author-detail-container'>
        <TextComponent
          transfrom='capitalize'
          size='lg'
          label={`${data?.name}'s books`}
        />
        <div class='author-detail-book-list'>
          {data?.books.map((data) => (
            <Pick data={data} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AuthorDetail
