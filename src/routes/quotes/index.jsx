import '../../css/QuotesPage.css'
import { HiSolidArrowPath } from 'solid-icons/hi'
import QuoteDatas from '../../api/booksynquotes.json'
import { createEffect, createSignal } from 'solid-js';

const quoteDatas = QuoteDatas.data;

const Quotes = () => {

  const [data,setData] = createSignal({quote : "",author : ""});

  createEffect(() => {
   generateQuote();
   
  //  window.addEventListener('keypress',(e) => {
  //   if(e.keyCode === 32){
  //     generateQuote();
  //   }
  //  })
  })



 const generateQuote = () => {
    const totalLength = quoteDatas.length;
    const randomNumber =  Math.floor(Math.random() * totalLength) + 1;
    const quoteData = quoteDatas[randomNumber];
    setData({quote : quoteData.quote,author : quoteData.author})

  }
 
  
 return (
   <div class='quotes'>
     <div class='quotes-infos'>
       <p class='quotes-infos-quote'>{data()?.quote}</p>
       <p class='quotes-infos-author'>{data()?.author}</p>
     </div>
     <div class='quotes-action'>
       <button class='bs-btn' onClick={generateQuote}>
         <HiSolidArrowPath size={20} />
       </button>
     </div>
     {/* <img
       className="quotes-img"
       src='https://www.springboard.com/blog/wp-content/uploads/2018/08/Quote5.png'
       alt=''
     /> */}
   </div>
 )
};

export default Quotes;