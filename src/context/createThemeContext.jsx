import { createContext, createEffect, createSignal, useContext } from 'solid-js'

const ThemeContext = createContext()

export const ThemeProvider = (props) => {
  const [themeColor, setThemeColor] = createSignal({
    bgTheme: '',
    colorTheme: '',
  })

  // const [bookMarks, setBookMarks] = createSignal([]);
  // const [bookMark, setBookMark] = createSignal(null)
 
  createEffect(() => {
    const lsBgTheme = localStorage?.getItem('bsyn-theme')
    // const lsBookMarks = localStorage?.getItem('bookMarks')
    //   ? JSON.parse(localStorage?.getItem('bookMarks'))
    //   : []


    if (lsBgTheme) {
      const bgTheme = lsBgTheme === 'black' ? 'black' : 'white'
      const colorTheme = lsBgTheme === 'black' ? '#708090' : 'black'
      setThemeColor({
        bgTheme: bgTheme,
        colorTheme: colorTheme,
      })
    }

    // if(lsBookMarks){
    //   setBookMarks(lsBookMarks);
    // }

  })

  createEffect(() => {
     document.documentElement.style.setProperty('--bgTheme', themeColor().bgTheme)
     document.documentElement.style.setProperty('--colorTheme', themeColor().colorTheme)
  })

  return (
    <ThemeContext.Provider value={{ setThemeColor, themeColor}}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export function createThemeContext() {
  return useContext(ThemeContext)
}


 // const [themeColor, setThemeColor] = createSignal({
  //   bgTheme: 'white',
  //   colorTheme: 'black',
  // })
  // setThemeColor({
  //   bgTheme:
  //     localStorage?.getItem('bsyn-theme') === 'black' ? 'black' : 'white',
  //   colorTheme:
  //     localStorage?.getItem('bsyn-theme') === 'black' ? '#708090' : 'black',
  // })