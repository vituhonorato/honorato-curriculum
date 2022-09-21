
import React from 'react'

const Index = (props) => {
    return(
        <>
        <div>
            <h1>Welcome!</h1>
            <div>{props.currentDate}</div>
            <pre>{props.repos.map(repo => {
                return(
                    <div key={repo.id}>
                        <h3>{repo.full_name}</h3>
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
    //turn API in JSON
    const originalRepos = await resRepos.json()

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
            repos
            
            
           
        }
    }
}
export default Index