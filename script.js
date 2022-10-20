
let button = document.querySelector('.btn_search');
button.addEventListener("click",() => {
    document.querySelector('.js-container').innerHTML = '';
    sendRequest();
});
let myInput = document.querySelector('#input');
myInput.addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
      document.querySelector('.btn_search').click();
      sendRequest();
}})


 async  function sendRequest(){
    let limit = 12;
    let input = document.querySelector('.search').value;
    let url = `https://api.giphy.com/v1/gifs/search?api_key=PIx9dTI3zYARjcMAmXy3CD8dp4jGA4bc&q=${input}&limit=${limit}`;

    let response = await fetch(url);    
    const result= await response.json();
    getRequest(result);

};

 function getRequest(result) {
        
        result.data.forEach((dataItem) => {
            const div = document.querySelector('.js-container');
            const show = document.createElement('div');
            show.classList.add('js-box');
            div.appendChild(show);
            show.style.background = `url(${dataItem.images.original.url}) no-repeat`;
           
        });    
 }
