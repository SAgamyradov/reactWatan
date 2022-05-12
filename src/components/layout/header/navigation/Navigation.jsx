import React from 'react'
import { Link } from 'react-router-dom'
import { list } from './list'
import burcLogo from '../../../../assets/images/surat/4.png'
 
const Navigation = () =>{
    return <ul className='list-none flex justify-items-center'>
        {list.map((title, idx) => (
        <li key={title} className='inline-block px-4'>
            {idx !== 2 ? 
            <Link to={`/${title.toLowerCase()}`}
            className='block text-white text-2xl text-center opacity-80 hover:opacity-20 transition-opacity duration-300 ease-in-out'>
            {title}
            </Link>: (
                <img src={burcLogo} alt='' width={80} draggable={false} className='block mx-5 animate-pulse'></img>
            )}
        </li>

        ))}
    </ul>
}
export default Navigation