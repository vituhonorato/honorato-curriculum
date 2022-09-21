
import React from 'react'

const Index = ({repos, user}) => {
    return(
        <>
        <div className='container mx-auto' >
            <h1 className='text-5xl'>Olá, eu sou João Victor Honorato</h1>
            <p>Github stats: public repos: {user.public_repos} / public_gists: {user.public_gists}</p>
            <h2 className='font-bold text-3xl'>Meus repositorios</h2>
            <pre>{repos.map(repo => {
                return(
                    <div className='rounded bg-gray-200 m-8 p-4 hover:shadow-xl' key={repo.id}>
                        <h3 className='font-bold'>{repo.full_name}</h3>
                        <p>Language: {repo.language} / stars: {repo.stargazers_count}</p>
                    </div>
                )
            })}</pre>
            
        </div>
        </>
    )
}
export async function getServerSideProps(context){
    //catch API
    const resRepos = await fetch('https://api.github.com/users/vituhonorato/repos?sort=update')
    const resUser = await fetch('https://api.github.com/users/vituhonorato')
    
    //turn API in JSON
    const originalRepos = await resRepos.json()
    const user = await resUser.json()

    //repositories list
    const dontShowRepos = ['']

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
    const repos = originalRepos.filter(dontShowFilter).map(extractData)

    return {
        props: {
            currentDate: new Date().toString(),
            repos,
            user
            
            
           
        }
    }
}
export default Index