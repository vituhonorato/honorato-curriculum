const getUser = async(username) => {
    try{
     //catch API
    const resRepos = await fetch(`https://api.github.com/users/${username}/repos?sort=update`)
     const resUser = await fetch('https://api.github.com/users/'+ username)
     
     //turn API in JSON
     const originalRepos = await resRepos.json()
     const user = await resUser.json()
 
     //repositories list
     const dontShowRepos = ['vituhonorato/NewJava', 'vituhonorato/angular-routes','vituhonorato/java-test','vituhonorato/java_test', 'vituhonorato/javascript-questoes','vituhonorato/start-angular','vituhonorato/debounce-search', 'vituhonorato/vituhonorato','vituhonorato/teste', ]
     
 
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
        const test = ['']
        const user = [{ "public_repos": 78,
        "public_gists": 0,
        "followers": 152,
        "following": 55}]
        const repos = test
        return {
       
             
            repos,
            user
            
            
      
    }
        
    }
}

export default getUser