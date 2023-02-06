import React from 'react';
import Link from 'next/link';


const Header = () => {
return(
  <React.Fragment>
    <div className= 'bg-midnight  p-4 drop-shadow-lg opacity-80'>
   
  </div>
  <div className= 'bg-midnight p-4 drop-shadow-lg text-center opacity-80' >
            <Link href="/" >
                <a className='px-2 text-xl font-semibold hover:underline text-white'>Home</a>
            </Link>
            
            <Link href="/projects" >
                <a className='px-2 text-xl font-semibold hover:underline text-white'>Projects</a>
            </Link>
            
            <Link href="/repositorios" >
                <a className='px-2 text-xl font-semibold hover:underline text-white'>Repositories</a>
            </Link>

  </div>
  </React.Fragment>
)
}
export default Header