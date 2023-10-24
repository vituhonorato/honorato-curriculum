import React from 'react';
import Link from 'next/link';


const Header = () => {
return(
  <React.Fragment>
    <div className= 'bg-gray  p-4 drop-shadow-lg opacity-75 '>
   
  </div>
  <div className= 'bg-gray p-4 drop-shadow-lg text-center opacity-75 ' >
            <Link href="/" >
                <a className='px-2 text-xl font-semibold hover:underline text-white'>Home</a>
            </Link>
              
            <Link href="/repos" >
                <a className='px-2 text-xl font-semibold hover:underline text-white'>Repositories</a>
            </Link>

  </div>
  </React.Fragment>
)
}
export default Header