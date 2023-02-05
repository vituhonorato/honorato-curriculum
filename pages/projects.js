import Link from 'next/link'
import React from 'react'
import getUser from '../utils/getUser'

//FRONTEND
const Projects = ({repos, user}) => {
    const url = "https://github.com/"
    
    return(
        
        <>
        
        <div>
         <div className="container mx-auto bg-neutral-50 opacity-75 mt-8 mb-8 rounded-lg " >
            
       
            
            
            
   
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
export default Projects