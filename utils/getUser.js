const getUser = async(username) => {
     //catch API
    const resRepos = await fetch(`https://api.github.com/users/${username}/repos?sort=update`)
     const resUser = await fetch('https://api.github.com/users/'+ username)
     
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
       
             
             repos,
             user
             
             
       
     }
}

export default getUser