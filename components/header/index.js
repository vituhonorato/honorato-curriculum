import React from 'react';
import Link from 'next/link';


const Header = () => {
return(
  <React.Fragment>
    <div className= 'bg-orange-600  p-4 drop-shadow-lg opacity-75'>
   
  </div>
  <div className= 'bg-orange-600 p-4 drop-shadow-lg text-center opacity-75' >
            <Link href="/" >
                <a className='px-2 text-xl font-semibold hover:underline text-gray-50'>Home</a>
            </Link>
            
            <Link href="/projects" >
                <a className='px-2 text-xl font-semibold hover:underline text-gray-50'>Projects</a>
            </Link>
            
            <Link href="/repositorios" >
                <a className='px-2 text-xl font-semibold hover:underline text-gray-50'>Repositories</a>
            </Link>

  </div>
  </React.Fragment>
)
}
export default Header