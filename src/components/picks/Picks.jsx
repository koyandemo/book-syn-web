import './Picks.css';
import Pick from './Pick';
import Skeleton from '../skeleton/Skeleton';
import { counts } from '../../utils/initData';
import { createEffect, createSignal } from 'solid-js';
import { getPickData } from '../../api/homepage';
import TextComponent from '../text/TextComponent';
import { A } from 'solid-start';
import { BsList } from 'solid-icons/bs';
import { createThemeContext } from '../../context/createThemeContext';



const Picks = ({ title, apiPath }) => {

    const { themeColor} = createThemeContext()
   const [pickData, setPickData] = createSignal(null)

   createEffect(() => {
     fetchPickData()
   })

   const fetchPickData = async () => {
    if(apiPath){
     const response = await getPickData(apiPath)
     if (response.status === 200) {
       setPickData(response?.data?.data?.books)
     }
   }
  }


  return (
    <div className='picks'>
      <div class='picks-title-warp'>
        <TextComponent transfrom='capitalize' size='lg' label={title} />
        <A href={`/books`}>
          <BsList fill={themeColor().colorTheme} size={20} />
        </A>
      </div>
      <div className='picks-list'>
        {pickData() !== null
          ? pickData()?.map((book) => {
              return <Pick data={book}></Pick>
            })
          : counts.map((c) => <Skeleton key={c} />)}
      </div>
    </div>
  )
};

export default Picks;