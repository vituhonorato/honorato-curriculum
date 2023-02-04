
import Link from 'next/link'
import React from 'react'
import getUser from '../utils/getUser'

//FRONTEND
const Index = ({repos, user}) => {
    const url = "https://github.com/"
    
    return(
        
        <>
        {repos && user && <div>
         <div className="container mx-auto " >
            <div className='grid grid-cols-4 gap-4'>
                <div>
                    <h1 className="text-3xl ">Hi There, I'm  Victor Honorato</h1><br/><h2 className='font-bold  text-5xl'>Web Developer</h2>
                </div>

                 <div className="grid grid-rows-3 grid-flow-col gap-4">
                    <div className='row-span-3'>
                        <Link href="https://github.com/vituhonorato" >
                            <a target="_blank">
                                <img src='/images/github.png' alt='github' height="60px" width="60px"/>
                            </a>
                           
                        </Link>
                    </div>
                    <div className='col-span-9'>
                    
                    <Link href="https://www.linkedin.com/in/jvmh/" target="_blank">
                        <a target="_blank">
                            <img src='/images/linkedin.png' alt='linkedin' height="50px" width="50px"/>
                        </a>
                    
                    </Link>
                </div>
                   <div>
                 </div>
                  
                </div>

                <div>3</div>

                <div>
                <p>
                         Public repos: {user.public_repos} 
                       </p>
                       <p>
                             Followers: {user.followers} <br/> Following: {user.following }
                        </p>
                </div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                
            </div>
            
            
            
            <h2 className='font-medium text-center text-2xl'>My Repositories</h2>
            <div>{repos.map(repo => {
                return(
                <Link href={url + repo.full_name } >
                    <a target="_blank">
                    <div className='rounded bg-gray-200 m-8 p-4 hover:shadow-xl' key={repo.id}>
                        <h3 className='font-bold'>{repo.full_name}</h3>
                        <p>Language: {repo.language}</p>
                    </div>

                    </a>
                  
                    </Link>
                )
              })}
            </div>
          </div>
        </div>}
        { !repos && !user && <h1>ola</h1>}
        
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
export default Index