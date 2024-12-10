import './Navbar.css'
import { BsPeople, BsSun, BsMoonStars, BsBookmarks,BsChatSquareQuote} from 'solid-icons/bs'
import { VsHome } from 'solid-icons/vs'
import { AiOutlineAppstore, AiOutlineAppstoreAdd } from 'solid-icons/ai'
import { A, useLocation } from 'solid-start'
import { createThemeContext } from '../../context/createThemeContext'



const Navbar = () => {
  const location = useLocation();
  const { themeColor, setThemeColor } = createThemeContext()

  const switchTheme = () => {
    localStorage.setItem(
      'bsyn-theme',
      themeColor().bgTheme === 'black' ? 'white' : 'black'
    )
     setThemeColor({
       bgTheme: themeColor().bgTheme === 'black' ? 'white' : 'black',
       colorTheme: themeColor().bgTheme === 'black' ? 'black' : '#708090',
     })
  }

  return (
    <nav class='nav'>
      <A href='/' class='logo'>
        <img
          class='nav-logo'
          alt='indexsyn'
          src={`/logo/logo-${
            themeColor().bgTheme === 'black' ? 'white' : 'black'
          }.png`}
        ></img>
      </A>
      <ul class='nav-links'>
        {/* <i class='uil uil-times navCloseBtn'></i> */}
        <li
          class={`nav-link ${
            location.pathname === '/' ? 'nav-link-active' : ''
          }`}
        >
          <A href='/'>
            <VsHome fill={themeColor().colorTheme} size={20} />
          </A>
        </li>
        <li
          class={`nav-link ${
            location.pathname.includes('/collections') ? 'nav-link-active' : ''
          }`}
        >
          <A href='/collections'>
            <AiOutlineAppstoreAdd fill={themeColor().colorTheme} size={20} />
          </A>
        </li>
        <li
          class={`nav-link ${
            location.pathname.includes('/books') ? 'nav-link-active' : ''
          }`}
        >
          <A href='/books'>
            <AiOutlineAppstore fill={themeColor().colorTheme} size={20} />
          </A>
        </li>
        <li
          class={`nav-link ${
            location.pathname.includes('/quotes') ? 'nav-link-active' : ''
          }`}
        >
          <A href='/quotes'>
           <BsChatSquareQuote fill={themeColor().colorTheme} size={20} />
          </A>
        </li>
        
        {/* <li
          class={`nav-link ${
            location.pathname.includes('/authors') ? 'nav-link-active' : ''
          }`}
        >
          <A href='/authors'>
            <BsPeople fill={themeColor().colorTheme} size={20} />
          </A>
        </li> */}
        {/* <li
          class={`nav-link ${
            location.pathname.includes('/bookmarks') ? 'nav-link-active' : ''
          }`}
        >
          <A href='/bookmarks'>
            <BsBookmarks fill={themeColor().colorTheme} size={20} />
          </A>
        </li> */}
        <li>
          {themeColor().bgTheme === 'white' ? (
            <BsSun
              style={{ cursor: 'pointer' }}
              fill={themeColor().colorTheme}
              size={20}
              onclick={switchTheme}
            />
          ) : (
            <BsMoonStars
              style={{ cursor: 'pointer' }}
              fill={themeColor().colorTheme}
              size={18}
              onclick={switchTheme}
            />
          )}
        </li>
      </ul>

      {/* <i class='uil uil-search search-icon' id='searchIcon'></i>
      <div class='search-box'>
        <BiRegularSearchAlt2
          fill='#ffffff'
          class='search-icon'
          id='searchIcon'
        />
        <input type='text' placeholder='Search here...' />
      </div> */}
    </nav>
  )
}

export default Navbar
