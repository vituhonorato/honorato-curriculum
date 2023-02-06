
import Link from 'next/link'
import React from 'react'
import getUser from '../utils/getUser'

//FRONTEND
const Index = ({repos, user}) => {
    //const url = "https://github.com/"
    
    return(
        
        <>
       
        <div>
         <div className="container mx-auto bg-white opacity-75 mt-8 mb-8 rounded-lg " >
            <div className=''>
                <div className="grid grid-flow-col auto-cols-max justify-end py-3 px-3  space-x-1">
                    <div className='pt-2 hover:opacity-75'>
                        <Link href="https://github.com/vituhonorato" >
                            <a target="_blank">
                                <img src='/images/github.png' alt='github' height="60px" width="60px"/>
                            </a>
                           
                        </Link>
                    </div>
                    <div className='pt-3 pr-1'>
                    
                    <Link href="https://www.linkedin.com/in/jvmh/" target="_blank">
                        <a target="_blank">
                            <img className='hover:opacity-75' src='/images/linkedin.png' alt='linkedin' height="50px" width="50px"/>
                        </a>
                    
                    </Link>
                   </div> 
                   <div className='pt-3 hover:opacity-75'>
                    
                    <Link href="https://api.whatsapp.com/send?phone=5571987840407&text=Hi%20There,%20how%20can%20i%20help?" target="_blank">
                        <a target="_blank">
                            <img src='/images/whatsapp.png' alt='whatsapp' height="50px" width="50px"/>
                        </a>
                    
                    </Link>
                   </div>
                
                 </div>
                </div>
                <div className='grid grid-cols-1 gap-4 flex'>
                    <div>
                        <h1 className="text-4xl pt-3  text-center">Hi There, I'm  Victor Honorato</h1><br/>
                        <h2 className='font-bold font-righteous  text-5xl  text-center'>Web Developer</h2>
                    </div>

                    <div className='grid justify-items-center'>
                        <img className='rounded-full bg-white  ' src='/images/cartoonperfil1.png' alt='github' height="400px" width="400px"/>
                        
                    </div>

                    <div></div>

                
                    <div></div>
                    
                    <div className='text-center text-xl font-semibold'>
                    Full-Stack WEB Developer. Always
                            looking for knowledge and
                            experiences that will add to my
                            personal development and
                            contribution to the developer
                            community!
                            My goal is to participate in scalable
                            corporate projects, contributing to
                            the company's growth and at the
                            same time gaining know-how in the
                            programming area.
                    </div>
                    {/* <div className='text-center'> 
                        <p>
                        Public repos: {user.public_repos} 
                        </p>
                        <p>
                        Followers: {user.followers} <br/> Following: {user.following }
                        </p>
                    </div> */}
                    <div className='text-center font-normal font-righteous  text-2xl '>
                        <h2>My stacks</h2>
                    </div>

                    <div className="flex flex-row  justify-center ">
                        <div ><img src='/images/html.png' alt='html' height="50px" width="50px"/></div>
                        <div><img src='/images/css.png' alt='css' height="50px" width="50px"/></div>
                        <div><img src='/images/js.png' alt='js' height="50px" width="50px"/></div>
                        <div><img src='/images/typescript.png' alt='typescript' height="50px" width="50px"/></div>
                        <div><img src='/images/react.png' alt='react' height="50px" width="50px"/></div>
                        <div><img src='/images/angular.png' alt='angular' height="50px" width="50px"/></div>
                        <div className='py-4'><img src='/images/tailwind.png' alt='tailwind' height="50px" width="50px"/></div>
                        <div><img src='/images/node-js.png' alt='node' height="50px" width="50px"/></div>
                        <div><img src='/images/nest.png' alt='nest' height="50px" width="50px"/></div>
                        <div><img src='/images/graphql.png' alt='graphql' height="50px" width="50px"/></div>
                        <div><img src='/images/rest.png' alt='rest' height="50px" width="50px"/></div>
                        <div><img src='/images/postgresql.png' alt='postgresql' height="50px" width="50px"/></div>
                        
                    </div>
                
            </div>
            
            
            
            {/* <h2 className='font-medium text-center text-2xl'>My Repositories</h2>
            <div>{repos.map(repo => {
                return(
                <Link href={url + repo.full_name } >
                    <a target="_blank">
                    <div className='rounded bg-gray-200 m-8 p-4 hover:shadow-xl opacity-75' key={repo.id}>
                        <h3 className='font-bold'>{repo.full_name}</h3>
                        <p>Language: {repo.language}</p>
                    </div>

                    </a>
                  
                    </Link>
                )
              })}
            </div> */}
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
export default Index