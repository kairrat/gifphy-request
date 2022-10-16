
let button = document.querySelector('.btn_search');

button.addEventListener("click",() => {
    sendApiRequest()
})



async   function sendApiRequest()   {    
    let input =  document.querySelector(".search").value
    let response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=PIx9dTI3zYARjcMAmXy3CD8dp4jGA4bc&q=${input}`)
    console.log(response)
    let gifs = await response.json()
    console.log(gifs)
    useApiData(gifs)
    
};


function useApiData(gifs){
    document.querySelector(".js-container").innerHTML = `<img src = "${gifs.data[0].images.original.url}">`
    
}