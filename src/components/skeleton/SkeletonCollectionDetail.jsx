import { counts } from '../../utils/initData'
import Skeleton from './Skeleton'
import './SkeletonCollectionDetail.css'

const SkeletonCollectionDetail = () => {
  return (
    <div class='skeleton-collection-detail-container'>
      <div class='skeleton-collection-detail-banner'>
        <div class='skeleton-collection-detail-banner-cover'></div>
        <div class='skeleton-collection-detail-txt'></div>
      </div>
      <div class='skeleton-collection-detail-items'>
        {counts.map((_) => (
          <Skeleton />
        ))}
      </div>
    </div>
  )
}

export default SkeletonCollectionDetail
