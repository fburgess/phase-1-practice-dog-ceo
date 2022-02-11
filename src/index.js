console.log('%c HI', 'color: firebrick')
function manDom(){
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then (function(response){
        console.log(response)
        return response.json();
    })
    .then(function (dogData){
        console.log(dogData);
    })
}