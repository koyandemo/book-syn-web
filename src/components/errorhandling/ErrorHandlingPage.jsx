import { A } from 'solid-start'
import { AiOutlineAppstore, AiOutlineAppstoreAdd } from 'solid-icons/ai'
import { BsPeople } from 'solid-icons/bs'
import { VsHome } from 'solid-icons/vs'
import { createThemeContext } from '../../context/createThemeContext'
import './ErrorHandlingPage.css'

const ErrorHandlingPage = ({status, page }) => {
  const { themeColor } = createThemeContext()

  return (
    <div class='error-handling'>
      <p class='error-handling-title'>{status}</p>
      <p class='error-handling-content'>{status === 404 ? 'Sorry, page not found !' : 'Internal Server Error !'}</p>
      <div class='error-handling-actions'>
        <A href='/'>
          <VsHome fill={themeColor().colorTheme} size={30} />
        </A>
        {page === 'collections' && (
          <A href='/collections'>
            <AiOutlineAppstoreAdd fill={themeColor().colorTheme} size={30} />
          </A>
        )}
        {page === 'books' && (
          <A href='/books'>
            <AiOutlineAppstore fill={themeColor().colorTheme} size={30} />
          </A>
        )}
        {page === 'authors' && (
          <A href='/authors'>
            <BsPeople fill={themeColor().colorTheme} size={30} />
          </A>
        )}
      </div>
    </div>
  )
}

export default ErrorHandlingPage
