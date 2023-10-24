
import Link from 'next/link'
import React from 'react'
import getUser from '../utils/getUser'

//FRONTEND
const Home = ({repos, user}) => {
    //const url = "https://github.com/"
    
    return(
        
        <>
       
        <div className=''>
        <div className="grid grid-flow-col auto-cols-max justify-end py-3 px-3  space-x-1">
                    <div className='pt-3 px-1 opacity-75  hover:opacity-100'>
                        <Link href="https://github.com/vituhonorato" >
                            <a target="_blank">
                                <img className=' flex w-6 h-6 md:w-10 md:h-10 lg:w-14 lg:h-14  bg-white rounded-full' src='/images/github.png' alt='github' height="" width=""/>
                            </a>
                           
                        </Link>
                    </div>
                    <div className='pt-3 px-1 pr-1'>
                    
                    <Link href="https://www.linkedin.com/in/jvmh/" target="_blank">
                        <a target="_blank">
                            <img className='flex w-6 h-6 md:w-10 md:h-10 lg:w-14 lg:h-14 opacity-75  hover:opacity-100' src='/images/linkedin.png' alt='linkedin' height="" width=""/>
                        </a>
                    
                    </Link>
                   </div> 
                   <div className='pt-3 px-1 opacity-75  hover:opacity-100'>
                    
                    <Link href="https://api.whatsapp.com/send?phone=5571987840407&text=Hi%20There,%20how%20can%20i%20help?" target="_blank">
                        <a target="_blank">
                            <img className='flex w-6 h-6 md:w-10 md:h-10 lg:w-14 lg:h-14' src='/images/whatsapp.png' alt='whatsapp' height="" width=""/>
                        </a>
                    
                    </Link>
                   </div>
                   
                
                 </div>
         <div className="container h-screen mx-auto bg-transparent opacity-75 mt-8 mb-8 rounded-lg  " >
            
                <div className='grid grid-cols-1 gap-4 flex justify-content  flex-col space-y-40  '>
                    <div>
                        <h1 className="text-xl md:text-2xl lg:text-3xl pt-3 text-white  text-center"><span className='font-bold'>Hi There</span>, I'm João Victor Marques Honorato</h1><br/>
                        <h2 className='font-bold font-righteous text-white text-xl md:text-2xl  lg:text-4xl  text-center'>Web Developer</h2>
                    </div>

                   
                    
                    <div className='text-center text-white px-3 text-base  md:text-lg  lg:text-xl font-semibold'>
                    I am a Fullstack WEB developer who is always looking for new knowledge and experiences to enhance my career and contribute to the developer community. I am always open to challenges and willing to learn new technologies to create efficient and elegant solutions. My goal is to become an increasingly complete professional and able to offer solutions that meet the needs of customers and end users.
                    </div>
                    {/* <div className='text-center'> 
                        <p>
                        Public repos: {user.public_repos} 
                        </p>
                        <p>
                        Followers: {user.followers} <br/> Following: {user.following }
                        </p>
                    </div> */}
                    <div>
                        <div className='text-center text-white font-normal font-righteous py-3 text-2xl '>
                        <h2>My stacks</h2>
                    </div>

                    <div className="flex flex-row  justify-center  ">
                        <div className='flex w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12 ' ><img className='grayscale' src='/images/html.png' alt='html' height="" width=""/></div>
                        <div className='flex w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12'><img className='grayscale' src='/images/css.png' alt='css' height="" width=""/></div>
                        <div className='flex w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12'><img className='grayscale' src='/images/js.png' alt='js' height="" width=""/></div>
                        <div className='flex w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12'><img className='grayscale' src='/images/typescript.png' alt='typescript' height="" width=""/></div>
                        <div className='flex w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12'><img className='grayscale' src='/images/react.png' alt='react' height="" width=""/></div>
                        <div className='flex w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12'><img className='grayscale' src='/images/angular.png' alt='angular' height="" width=""/></div>
                        <div className='flex p-1 w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12'><img className='grayscale' src='/images/tailwind.png' alt='tailwind' height="" width=""/></div>
                        <div className='flex w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12'><img className='grayscale' src='/images/node-js.png' alt='node' height="" width=""/></div>
                        <div className='flex w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12'><img className='grayscale' src='/images/nest.png' alt='nest' height="" width=""/></div>
                        <div className='flex w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12'><img className='grayscale' src='/images/graphql.png' alt='graphql' height="" width=""/></div>
                        <div className='flex w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12'><img className=' bg-white rounded-full py-1' src='/images/rest.png' alt='rest' height="" width=""/></div>
                        <div className='flex w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12'><img className='grayscale' src='/images/postgresql.png' alt='postgresql' height="" width=""/></div>
                        
                    </div>
                    </div>
                    
                
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
export default Home