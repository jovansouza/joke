const joker = document.getElementById('p');
const btn = document.getElementById('btn');
const url = "https://v2.jokeapi.dev/joke/Programming,Dark,Pun,Spooky,Christmas?blacklistFlags=religious&type=single"


let getjoke = () => {

fetch(url)
.then(data => data.json())
.then( dados=> {joker.textContent = `${dados.joke}`})
 btn.addEventListener('click',getjoke);
}
getjoke()