
import Link from 'next/link'
import React from 'react'
import getUser from '../utils/getUser'

//FRONTEND
const Index = ({repos, user}) => {
    const url = "https://github.com/"
    return(
        <>
        <div>
         <div className="container mx-auto " >
            <div className='grid grid-cols-4 gap-4'>
                <div><h1 className="text-3xl ">Hi There, I'm  Victor Honorato</h1></div>
                <div><p>Github stats: Public repos: {user.public_repos} / Seguidores: {user.followers} / Seguindo: {user.following }</p></div>
                <div></div>
                <div>4</div>
                <div><h2 className='font-bold  text-5xl'>Web Developer</h2></div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                
            </div>
            
            
            
            <h2 className='font-medium text-center text-2xl'>My Repositories</h2>
            <div>{repos.map(repo => {
                return(
                <Link href={url + repo.full_name } >
                    <div className='rounded bg-gray-200 m-8 p-4 hover:shadow-xl' key={repo.id}>
                        <h3 className='font-bold'>{repo.full_name}</h3>
                        <p>Language: {repo.language}</p>
                    </div>
                    </Link>
                )
            })}</div>
            
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