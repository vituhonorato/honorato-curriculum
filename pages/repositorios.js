import Link from 'next/link'
import React from 'react'

const Index = ({repos, user}) => {
    
    const url = "https://github.com/"
    return(
        <>
        {repos && user &&
        <div className='container mx-auto' >
            <h1 className='text-5xl text-center pt-6'>My Repositories</h1>
             <div className='grid grid-cols-4 gap-4'>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div><img src='/images/githubcat.png' alt='github' height="600px" width="600px"/></div>
                <div>Github stats: Public repos: {user.public_repos} <br/>Followers: {user.followers} <br/> Following: {user.following }</div>
                <div><h2 className='font-bold text-3xl'>Meus repositorios</h2></div>
             </div>
            
            <div><p>Github stats: Public repos: {user.public_repos} / Followers: {user.followers} / Following: {user.following }</p></div>
            
            <div>{repos.map(repo => {
                return(
                    <Link href={url + repo.full_name } >
                      <a target="_blank">
                        <div className='rounded bg-gray-200 m-8 p-4 hover:shadow-xl opacity-75 hover:opacity-100 ' key={repo.id}>
                            <h3 className='font-bold'>{repo.full_name}</h3>
                            <p>Language: {repo.language}</p>
                        </div>
                       </a>
                 
                    </Link>
                )
            })}</div>
            
        </div> }
        {!repos && !user && <h1>Vazio</h1>}
        
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
}catch{

}
}
export default Index