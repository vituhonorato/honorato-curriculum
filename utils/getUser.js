const getUser = async(username) => {
    try{
     //catch API
    const resRepos = await fetch(`https://api.github.com/users/${username}/repos`)
     const resUser = await fetch('https://api.github.com/users/'+ username)
     
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
       
             
             repos,
             user
             
             
       
     }
    }catch{
        const test = null
        const user = null
        const repos = test
        return {
       
             
            repos,
            user
            
            
      
    }
        
    }
}

export default getUser