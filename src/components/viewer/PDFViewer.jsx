import {createEffect, createSignal } from 'solid-js'
import { usePDFSlick } from '@pdfslick/solid'
import Thumbsbar from './Thumbsbar'
import Toolbar from './Toolbar'
import './PDFViewer.css'


const PDFViewerApp = ({pdfFilePath}) => {
  const [loading,setLoading] = createSignal(false);
  const {
    viewerRef,
    thumbsRef,
    pdfSlickStore: store,
    PDFSlickViewer,
  } = usePDFSlick(pdfFilePath)
  const [isThumbsbarOpen, setIsThumbsbarOpen] = createSignal(true)

  createEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    },3000)
  })

  return (
    <div>
      {!loading() ? 
    <div class='pdf-viewer pdfSlick'>
      <Toolbar {...{ store, setIsThumbsbarOpen, isThumbsbarOpen }} />
      <div class='pdf-viewer-container'>
        <Thumbsbar {...{ store, isThumbsbarOpen, thumbsRef }} />
        <div class='pdf-viewer-index'>
          <PDFSlickViewer {...{ store, viewerRef }} />
        </div>
      </div>
    </div>
    :
    <p>loading ...</p>  
    }
    </div>
  )
}

export default PDFViewerApp

// import { usePDFSlick } from '@pdfslick/solid'

// const PDFViewer = ({
//   pdfFilePath = 'https://firebasestorage.googleapis.com/v0/b/bs-app-52af1.appspot.com/o/books%2Fmedia%2Fclean-code-a-handbook-of-agile-software-Craftsmanship.pdf?alt=media',
// }) => {
//   const {
//     viewerRef,
//     pdfSlickStore: store,
//     PDFSlickViewer,
//     thumbsRef,
//     usePDFSlick,
//     PDFSlickThumbnails
//   } = usePDFSlick(pdfFilePath, { scaleValue: 'page-fit' })

//   return (
//     <div class='pdfSlick'>
//       <div class='flex-1 relative h-full'>
//        <PDFSlickThumbnails {...{store,thumbsRef}} />
//         <PDFSlickViewer {...{ store, viewerRef }} />
//       </div>
//     </div>
//   )
// }

// export default PDFViewer
