import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import LogoImage from '../../../assets/images/surat/2.png'
const Logo = () =>{
    return(
    <Link to='/'>
        {/* <img alt="" src={LogoImage} width='125' draggable={false} /> */}
    </Link>
    )
}
export default Logo