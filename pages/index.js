
import React from 'react'

const Index = (props)=>{
    return(
        <>
        <div>
            <h1>Welcome!</h1>
            <div>{props.currentDate}</div>
            <pre>{props.repos.map(repo => {
                return(
                    <div>
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
    const repos = await resRepos.json()
    return {
        props: {
            currentDate: new Date().toString(),
            repos
           
        }
    }
}
export default Index