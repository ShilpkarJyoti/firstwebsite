
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import About from './assets/About'
import Home from './assets/Home'
import Header from './component/Header'
import Contact from './Contact'
import Service from './Service'
import Footer from './component/Footer'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyle'


const App =()=>{

  const theme ={
    colors: {
      heading: "black",
      text: "",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      btn: "rgba(98, 84,243,0.5)",
      hr: "#fffff",
      gradient:"linear-gradient(0deg,  rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow: "rgba(0,0,0,0.02) 0px 1px 3px 0px, rgba(27, 31, 35,0.15) 0px 0px 0px 1px",
      shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile:"768px", tab:"998px"},
  };

  return (
   <>
   <ThemeProvider  theme={theme}>
   <GlobalStyle/>
   <BrowserRouter>
   <Header/>
    <Routes>
      <Route path = "/" element={<Home/>}/>
      <Route path = "/About" element={<About/>}/>
      <Route path = "/Contact" element={<Contact/>}/>
      <Route path = "/Service" element={<Service/>}/>
    </Routes>
    <Footer/>
   </BrowserRouter>
   </ThemeProvider>
   </>
  )
}
export default App
