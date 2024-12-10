import TextComponent from "../../components/text/TextComponent";
import "../../css/BlogsPage.css";

const BlogsPage = () => {
 return (
   <div class='blogs-page'>
     <div class='blogs'>
       <div class='blog'>
         <img
           class='blog-img'
           src='https://untree.co/demos/blogy/images/img_6_horizontal.jpg'
         ></img>
         <div class='blog-infos'>
           <TextComponent
             transfrom='capitalize'
             size='sm'
             label={'Startup vs corporate: What job suits you best?'}
           />
           {/* <button class='bs-btn w-50'>visit</button>  */}
           {/* <a href="/">visit</a> */}
           {/* <p class="">visit</p> */}
         </div>
       </div>

       <div class='blog'>
         <img
           class='blog-img'
           src='https://untree.co/demos/blogy/images/img_4_horizontal.jpg'
         ></img>
         <div class='blog-infos'>
           <TextComponent
             transfrom='capitalize'
             size='sm'
             label={'Startup vs corporate: What job suits you best?'}
           />
           {/* <button class='bs-btn w-50'>visit</button>  */}
           {/* <a href="/">visit</a> */}
         </div>
       </div>

       <div class='blog'>
         <img
           class='blog-img'
           src='https://untree.co/demos/blogy/images/img_1_horizontal.jpg'
         ></img>
         <div class='blog-infos'>
           <TextComponent
             transfrom='capitalize'
             size='sm'
             label={'Startup vs corporate: What job suits you best?'}
           />
           {/* <button class='bs-btn w-50'>visit</button>  */}
           {/* <a href="/">visit</a> */}
         </div>
       </div>

       <div class='blog'>
         <img
           class='blog-img'
           src='https://untree.co/demos/blogy/images/img_3_horizontal.jpg'
         ></img>
         <div class='blog-infos'>
           <TextComponent
             transfrom='capitalize'
             size='sm'
             label={'Startup vs corporate: What job suits you best?'}
           />
           {/* <button class='bs-btn w-50'>visit</button>  */}
           {/* <a href="/">visit</a> */}
         </div>
       </div>

       <div class='blog'>
         <img
           class='blog-img'
           src='https://untree.co/demos/blogy/images/img_2_horizontal.jpg'
         ></img>
         <div class='blog-infos'>
           <TextComponent
             transfrom='capitalize'
             size='sm'
             label={'Startup vs corporate: What job suits you best?'}
           />
           {/* <button class='bs-btn w-50'>visit</button>  */}
           {/* <a href="/">visit</a> */}
         </div>
       </div>

       <div class='blog'>
         <img
           class='blog-img'
           src='https://untree.co/demos/blogy/images/img_5_horizontal.jpg'
         ></img>
         <div class='blog-infos'>
           <TextComponent
             transfrom='capitalize'
             size='sm'
             label={'Startup vs corporate: What job suits you best?'}
           />
           {/* <button class='bs-btn w-50'>visit</button>  */}
           {/* <a href="/">visit</a> */}
         </div>
       </div>

     </div>
   </div>
 )
};

export default BlogsPage;