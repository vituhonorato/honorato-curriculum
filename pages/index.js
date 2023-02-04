
import React from 'react'
import getUser from '../utils/getUser'

//FRONTEND
const Index = ({repos, user}) => {
    return(
        <>
        <div className='container mx-auto' >
            <h1 className='text-5xl'>Olá, eu sou João Victor Honorato</h1>
            <p>Github stats: Public repos: {user.public_repos} / Seguidores: {user.followers} / Seguindo: {user.following}</p>
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