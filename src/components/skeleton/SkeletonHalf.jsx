import './SkeletonHalf.css'

const SkeletonHalf = () => {

 return (
  <div className='skeleton-half rounded-sm'>
   <div className='skeleton-half-text'></div>
   <div className='skeleton-half-des-warp'>
    <div className='skeleton-half-des'></div>
    <div className='skeleton-half-des'></div>
   </div>
   <div className='skeleton-half-icon-warp'>
    <div className='skeleton-half-icon'></div>
    <div className='skeleton-half-date'></div>
   </div>
  </div>
 )

};

export default SkeletonHalf;