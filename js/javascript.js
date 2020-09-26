const username = `maychondouglas`;
const endpoint = `https://api.github.com/users/${username}/repos`;


async function obterDados(){
    try{
        await fetch(endpoint)
        .then(response => response.json())
        .then(data => {
            data.forEach(element => {
                console.log(element.name)
            });
        })
        
    }catch(err){
        console.log(err);
    }
    
}



