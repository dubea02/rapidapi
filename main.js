const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '9da5e4ac7fmshabae1e5d26ce93dp155ce2jsnd44d3e28a51a',
		'X-RapidAPI-Host': 'youtube-search-results.p.rapidapi.com'
	}
};


let params=' '
const callParams=()=> {

    params=userInput.value
    fetch('https://youtube-search-results.p.rapidapi.com/youtube-search/?q= $(params)', options)
	.then(response => response.json())
	.then(response => console.log(response))
    .catch(err => console.error(err));
userInput.value='';
}

const userInput=document.querySelector('input') ;
const btn = document.querySelector('button') ;

btn.addEventListener('click',callParams)
    //console.log(userInput.value)
    //userInput.value='';

