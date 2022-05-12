import React from 'react'
import BgImage from '../../assets/images/surat/alabay.jpeg'
import Header from './header/Header'
import SocialMedia from './SocialMedia'

const Layout = ({children}) => {
    return(
     <div className='p-12  relative bg-cover h-screen bg-no-repeat'
        style= {{
            backgroundImage: `url(${BgImage})`,
            
            
        }} 
        > 
        
        <div className='gradient' />
        <div className='relative z-1' />
        <Header />    
        <SocialMedia />
            {children}
    
    </div>
    )
}
export default Layout