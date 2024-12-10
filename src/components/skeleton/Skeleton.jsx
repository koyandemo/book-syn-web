import './Skeleton.css'

const Skeleton = () => {

 return (
  <div className='skeleton rounded-sm'>
   <div className='skeleton-text'></div>
   <div className='skeleton-des-warp'>
    <div className='skeleton-des'></div>
    <div className='skeleton-des'></div>
   </div>
   <div className='skeleton-icon-warp'>
    <div className='skeleton-icon'></div>
    <div className='skeleton-date'></div>
   </div>
  </div>
 )

};

export default Skeleton;