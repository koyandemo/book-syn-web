import { useLocation } from 'solid-start'
import Navbar from "../components/navbar/Navbar";



const WebLayout = (props) => {

 const location = useLocation();
 const isBookReadingRoute = location.pathname.includes('/books/reading/')
 const isQuotesRoute = location.pathname.includes('/quotes');
//  createEffect(() => {
//    var result = detect.parse(navigator.userAgent)
// console.log(
//   'You are using ' +
//     result.browser.family +
//     ' v' +
//     result.browser.version +
//     ' on ' +
//     result.os.family
// )
//  })


 return (
   <div className={`web-layout`}>
     {!isBookReadingRoute && <Navbar />}
     {props.children}
   </div>
 )

};


export default WebLayout;
