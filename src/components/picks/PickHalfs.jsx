import './PickHalfs.css';
import PickHalf from './PickHalf';
import SkeletonHalf from '../skeleton/SkeletonHalf';
import { counts } from '../../utils/initData';
import { createEffect, createSignal, Suspense } from 'solid-js';
import { getBat } from '../../api/homepage';
import TextComponent from '../text/TextComponent';
import { A } from 'solid-start'
import { BsList } from 'solid-icons/bs';
import { createThemeContext } from '../../context/createThemeContext';


const PickHalfs = ({ title}) => {

  const { themeColor } = createThemeContext()
  const [pickData,setPickData] = createSignal(null);

  createEffect(() => {
    fetchPickData();
 
  })

   const fetchPickData = async () => {
     const response = await getBat()
     if(response.status === 200){
     setPickData(response?.data?.data?.books);
     }
   }


  return (
    <div className='pickhalfs'>
      <Suspense>
        <div class='picks-title-warp'>
          <TextComponent transfrom='capitalize' size='lg' label={title} />
          <A
            href={`/books`}
            style={{
              color: themeColor().colorTheme === 'white' ? 'white' : 'black',
            }}
          >
            <BsList fill={themeColor.colorTheme} size={20} />
          </A>
        </div>
        <ul className='pickhalfs-list'>
          {pickData() !== null
            ? pickData()?.map((item) => {
                return <PickHalf data={item}></PickHalf>
              })
            : counts.map((c) => <SkeletonHalf key={c} />)}
        </ul>
      </Suspense>
    </div>
  )
};

export default PickHalfs;