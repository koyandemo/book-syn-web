import { createEffect, createSignal } from 'solid-js'
import { FaSolidAngleRight,FaSolidAngleLeft } from 'solid-icons/fa'
import './Pagination.css'

const Pagination = ({
 limit,
 total,
 currentPage,
  callBack,
}) => {
  let totalPage = Math.ceil(total/limit);
  const [cPage, setCPage] = createSignal(currentPage)
  const [pages, setPages] = createSignal(null)
  const [loading,setLoading] = createSignal(false);


  const handleLoading = () => {
    window.scrollTo(0,0);
     setLoading(true)
     setTimeout(() => {
       setLoading(false)
     }, 5000)
  }

  createEffect(() => {
    setPages(pagesToShow())
  })

  const pagesToShow = () => {
    const pages = []

    
    if (cPage() <= 2 && totalPage >=4) {
      pages.push(1)
      pages.push(2)
      pages.push(3)
      pages.push('...')
      pages.push(totalPage)
    }
    else if(totalPage <=3){
       for(let i=1;i<=totalPage;i++){
          pages.push(i);
       }
    }
    //When second last or last page is selected
    else if (cPage() > totalPage - 2) {
      pages.push(1)
      pages.push('...')
      pages.push(totalPage - 2)
      pages.push(totalPage - 1)
      pages.push(totalPage)
    } 
    else {
      pages.push(1)
      if (cPage() - 2 > 1) {
        pages.push('...')
      }
      pages.push(cPage() - 1)
      pages.push(cPage())
      pages.push(cPage() + 1)
      if (cPage() + 2 < totalPage) {
        pages.push('...')
      }
      pages.push(totalPage)
    }
    return pages
  }

  const handlerPageActive = (e) => {
    if(!loading()){
    if (e.target.value) {
      handleLoading();
      callBack(e.target.value)
      setCPage(e.target.value)
      pagesToShow()
    }
  }else{
    return;
  }
  }

  const handlerPrevious = () => {
    if(!loading()){
    if (cPage() === 1) {
      return
    } else {
     const value = cPage() - 1;
     callBack(value);
     handleLoading();
      setCPage(value);
    }
  }else{
    return;
  }
  }

  const handlerNext = () => {
    if(!loading()){
    if (cPage() === totalPage) {
      return
    } else {
      const value = cPage() + 1
      handleLoading();
      callBack(value)
      setCPage(value)
    }
  }else{
    return;
  }
  }

  return (
    <div class='pagination-container'>
      <ul class='pagination-items'>
        {
          <>
            <li class={`pagination-item-action ${loading() ? "btn-disabled" : ""}`} onclick={handlerPrevious}>
              <FaSolidAngleLeft size={20} />
            </li>
            {pages()?.map((page) => (
              <li
                class={`pagination-item ${
                  cPage() === page ? 'pagination-item-active' : ''
                } ${loading() ? "btn-disabled" : ""}`}
                value={page}
                name={page}
                onclick={handlerPageActive}
              >
                {page}
              </li>
            ))}
            <li class={`pagination-item-action ${loading() ? "btn-disabled" : ""}`} onclick={handlerNext}>
              <FaSolidAngleRight size={20} />
            </li>
          </>
        }
      </ul>
    </div>
  )
}

export default Pagination
