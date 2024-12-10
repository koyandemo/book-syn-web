// import { IoMdCloseCircleOutline } from 'react-icons/io'
import './DownloadPopup.css';

export default function DownloadPopup({ downloadClosePopup, progressWidth, handlerClosePopup }) {
 return (
  <div className='download-popup-container'>
   <div className='download-popup'>
    <div className='download-popup-card'>
     {/* {downloadClosePopup && <IoMdCloseCircleOutline className='dowload-popup-close' onClick={handlerClosePopup}></IoMdCloseCircleOutline>} */}
     <img className='download-popup-img' src="https://www.literacyideas.com/wp-content/uploads/2021/08/1_img_6107cb72d2d9b.jpg"></img>
     <div className='download-progress'>
      <div className='download-progress-bar' style={{ width: `${progressWidth}px` }}></div>
     </div>
    </div>
   </div>
  </div>
 )
}
