import Link from 'next/link'
import React from 'react'
import getUser from '../utils/getUser'

//FRONTEND
const Projects = ({repos, user}) => {
    const url = "https://github.com/"
    
    return(
        
        <>
        
        <div>
        <div className='text-white text-center py-3 my-7 rounded-lg'>
            <h1 className='font-bold font-righteous  text-5xl'>Projects</h1>
        </div>
         <div className="container mx-auto bg-white opacity-75 mt-8 mb-8 rounded-lg " >
            <div className='grid grid-cols-4 gap-4 justify-items-center'>
                <Link href='https://github.com/vituhonorato/pokenext'>
                 <a target="_blank">
                  <div className='py-2 px-2'>
                    <div className='text-center'> <h3 className='font-righteous py-1 text-xl'>PokeNext</h3></div>
                     <div><img className='rounded bg-white  ' src='/images/pokenext1.jpg' alt='Pokenext' height="400px" width="400px"/></div>
                    <div className='text-center'>
                     <h3 className='text-base font-normal'>Application made in Next JS listing all Pokémon and describing their characteristics</h3>
                    </div>
                  </div>
                 </a>
                </Link>
                <Link href='https://github.com/vituhonorato/minhas-series'>
                 <a target="_blank">
                  <div className='py-2 px-2'>
                    <div className='text-center'> <h3 className='font-righteous py-1 text-xl'>Minhas Séries</h3></div>
                     <div><img className='rounded bg-white  ' src='/images/minhasseries3.jpg' alt='Minhas Series' height="400px" width="400px"/></div>
                    <div className='text-center'>
                     <h3 className='text-base font-normal'>Application made in React JS to manage series watched on shared streamers</h3>
                    </div>
                  </div>
                 </a>
                </Link>
                <Link href='https://github.com/vituhonorato/remix-crud'>
                 <a target="_blank">
                  <div className='py-2 px-2'>
                    <div className='text-center'> <h3 className='font-righteous py-1 text-xl'>Crud Remix</h3></div>
                     <div><img className='rounded bg-white  ' src='/images/remixmain.jpg' alt='crud remix' height="400px" width="400px"/></div>
                    <div className='text-center'>
                     <h3 className='text-base font-normal'>Application made in Remix to generate comments </h3>
                    </div>
                  </div>
                 </a>
                </Link>
                <Link href='https://github.com/vituhonorato/PalpiteBox'>
                 <a target="_blank">
                  <div className='py-2 px-2'>
                    <div className='text-center'> <h3 className='font-righteous py-1 text-xl'>PalpiteBox</h3></div>
                     <div><img className='rounded bg-white  ' src='/images/palpitebox3.jpg' alt='palpitebox' height="400px" width="400px"/></div>
                    <div className='text-center'>
                     <h3 className='text-base font-normal'>Application Model tool to stimulate sales, giving 10% discount to each opinion on the product.</h3>
                    </div>
                  </div>
                 </a>
                </Link>
                <Link href='https://github.com/vituhonorato/app-angular-todo'>
                 <a target="_blank">
                  <div className='py-2 px-2'>
                    <div className='text-center'> <h3 className='font-righteous py-1 text-xl'>Angular To-Do</h3></div>
                     <div><img className='rounded bg-white  ' src='/images/angulartodo1.jpg' alt='angular to-do-list' height="400px" width="400px"/></div>
                    <div className='text-center'>
                     <h3 className='text-base font-normal'>Application made in Angular to manage TASKS</h3>
                    </div>
                  </div>
                 </a>
                </Link>
                <Link href='https://github.com/vituhonorato/crud-angular-spring'>
                 <a target="_blank">
                  <div className='py-2 px-2'>
                    <div className='text-center'> <h3 className='font-righteous py-1 text-xl'>Crud-Angular-Spring</h3></div>
                     <div><img className='rounded bg-white  ' src='/images/angularspring1.jpg' alt='crud-angular-spring' height="400px" width="400px"/></div>
                    <div className='text-center'>
                     <h3 className='text-base font-normal'>Application made in Java and Angular to manage completed courses</h3>
                    </div>
                  </div>
                 </a>
                </Link>
                <Link href='https://github.com/vituhonorato/noticias'>
                 <a target="_blank">
                  <div className='py-2 px-2'>
                    <div className='text-center'> <h3 className='font-righteous py-1 text-xl'>Notícias</h3></div>
                     <div><img className='rounded bg-white ' src='/images/noticia2.jpg' alt='noticias' height="400px" width="400px"/></div>
                    <div className='text-center'>
                     <h3 className='text-base font-normal'>Application made in Node.JS and EJS to generate a blog news</h3>
                    </div>
                  </div>
                 </a>
                </Link>
                <Link href='https://github.com/vituhonorato/costs'>
                 <a target="_blank">
                  <div className='py-2 px-2'>
                    <div className='text-center'> <h3 className='font-righteous py-1 text-xl'>Costs</h3></div>
                     <div><img className='rounded bg-white  ' src='/images/costs1.jpg' alt='costs' height="400px" width="400px"/></div>
                    <div className='text-center'>
                     <h3 className='text-base font-normal'>Application made in React JS to manage projects costs</h3>
                    </div>
                  </div>
                 </a>
                </Link>
                <Link href='https://github.com/vituhonorato/calculatorapp'>
                 <a target="_blank">
                  <div className='py-2 px-2'>
                    <div className='text-center'> <h3 className='font-righteous py-1 text-xl'>Calculator App</h3></div>
                     <div><img className='rounded bg-white  ' src='/images/calcreactnative.jpg' alt='calculator app' height="400px" width="400px"/></div>
                    <div className='text-center'>
                     <h3 className='text-base font-normal'>App of a simple calculator made in React Native  </h3>
                    </div>
                  </div>
                 </a>
                </Link>
                <Link href='https://github.com/vituhonorato/meuip'>
                 <a target="_blank">
                  <div className='py-2 px-2'>
                    <div className='text-center'> <h3 className='font-righteous py-1 text-xl'>Meu IP</h3></div>
                     <div><img className='rounded bg-white  ' src='/images/meuipreactnative.jpg' alt='meu ip' height="400px" width="400px"/></div>
                    <div className='text-center'>
                     <h3 className='text-base font-normal'>A simple App made in React Native to show your own IP</h3>
                    </div>
                  </div>
                 </a>
                </Link>
       
            </div>
            
            
   
          </div>
        </div>
        
        
        </>
    )
}
//BACKEND
export async function getServerSideProps(context){
    
    //backend importado de de utils/getUser
    const {repos, user} = await getUser('vituhonorato') 


    return {
        props: {
            currentDate: new Date().toString(),
            repos,
            user
            
            
           
        }
    }
}
export default Projects