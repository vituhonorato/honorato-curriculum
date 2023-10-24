import Link from 'next/link'
import React from 'react'

const Index = ({repos, user}) => {
    
    const url = "https://github.com/"
    return(
        <>
        {repos && user &&
        <div className='container mx-auto' >
            <div className='text-white text-center py-3 my-7 rounded-lg'>
                <h1 className='font-bold font-righteous px-3 text-xl md:text-3xl  lg:text-4xl '>My Repositories</h1>
            </div>
            
             <div className='grid grid-cols-1 gap-4 justify-items-center'>
             
                <div className='sm:grid grid-cols-1 gap-4 text-center    lg:flex flex-row  justify-center  text-center'>
                     <div className='text-white text-center text:xl md:text-2xl lg:text-3xl font-bold font-righteous '>Public Repos:
                      <p className='text-tahiti text-4xl md:text-6xl lg:text-8xl'>{user.public_repos} </p>
                     </div>
                     <div className='text-white text-center text-center text:xl md:text-2xl lg:text-3xl font-bold font-righteous'>Followers: 
                      <p className='text-tahiti text-4xl md:text-6xl lg:text-8xl' >{user.followers}
                      </p>
                     </div>
                      <div className='text-white text-center text-center text:xl md:text-2xl lg:text-3xl font-bold font-righteous'>
                            Following: 
                      <p className='text-tahiti text-4xl md:text-6xl lg:text-8xl'>{user.following }
                      </p>
                    </div>
                </div>
                <Link href="https://github.com/vituhonorato" >
                  <a target="_blank">
                   <div className='grid justify-items-center opacity-80 hover:opacity-100'><img src='/images/githubcat.png' alt='github' height="600px" width="600px"/></div>
                 </a>
                </Link>
                
             </div>
            
            
            
            <div>{repos.map(repo => {
                return(
                    <Link href={url + repo.full_name } >
                      <a target="_blank">
                        <div className='rounded bg-white m-8 p-4 hover:shadow-xl opacity-75 hover:opacity-100 ' key={repo.id}>
                            <h3 className='font-bold'>{repo.full_name}</h3>
                            <p>Language: {repo.language}</p>
                        </div>
                       </a>
                 
                    </Link>
                )
            })}</div>
            
        </div> }
        {!repos && !user && 
        <div className='max-h-screen'>
            <h1 className='  font-bold text-center text-white text-3xl my-10'>Ops!</h1>
            <div className='grid justify-items-center my-10'>
                <img src='/images/githubcat.png' alt='github' height="600px" width="600px"/>
            </div>

             <div class=" bg-red border border-red-400 text-white text-center px-4  py-3 my-10 rounded relative" role="alert">
               <strong class="font-bold text-2xl ">Warning!   </strong>
                <span class="block sm:inline">    If you are seeing this page it is because the Github API failed.</span>
                <Link href='/'>
                   <a>
                    <div className=' grid justify-items-center  '>
                    <svg fill="#000000" width="50px" height="50px" viewBox="0 0 200 200" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><title/><path d="M160,89.75H56l53-53a9.67,9.67,0,0,0,0-14,9.67,9.67,0,0,0-14,0l-56,56a30.18,30.18,0,0,0-8.5,18.5c0,1-.5,1.5-.5,2.5a6.34,6.34,0,0,0,.5,3,31.47,31.47,0,0,0,8.5,18.5l56,56a9.9,9.9,0,0,0,14-14l-52.5-53.5H160a10,10,0,0,0,0-20Z"/></svg>
                    </div>
                  </a>
             </Link>
             </div>
            
        </div>}
        
        </>
    )
}
export async function getServerSideProps(context){
    try{
    //catch API
    const resRepos = await fetch('https://api.github.com/users/vituhonorato/repos')
    const resUser = await fetch('https://api.github.com/users/vituhonorato')
    
    //turn API in JSON
    const originalRepos = await resRepos.json()
    const user = await resUser.json()

    //repositories list
    const dontShowRepos = ['vituhonorato/NewJava', 'vituhonorato/angular-routes','vituhonorato/java-test','vituhonorato/java_test', 'vituhonorato/javascript-questoes','vituhonorato/start-angular','vituhonorato/debounce-search', 'vituhonorato/vituhonorato','vituhonorato/teste','vituhonorato/GraphQL_Tutorial','vituhonorato/FlexBox1','vituhonorato/climatequery','vituhonorato/calculator-cookie','vituhonorato/dbfirebase','vituhonorato/deepeningonjavascript','vituhonorato/gzip-compression','vituhonorato/calculator-session','vituhonorato/gallery-with-sass' ]

    //dont show forks repositories
    const isNotFork = repo => !repo.fork

    //dont show selected repositories
    const dontShowFilter = repo => dontShowRepos.indexOf(repo.full_name) === -1
    //filter datas to send to the front end
    const extractData = repo => ({
        id: repo.id,
        full_name: repo.full_name,
        language: repo.language,
        stargazers_count: repo.stargazers_count
    })
    
    

    //Filter
    const repos = originalRepos.filter(dontShowFilter).filter(isNotFork).map(extractData)

    return {
        props: {
            currentDate: new Date().toString(),
            repos,
            user
            
            
           
        }
    }
} catch{
     const repos = null
     const user = null
     return {
       props:{
         repos,
       user
       }
       
     }

    

}
}
export default Index