
const url = "https://api.thedogapi.com/v1/images/search";
const main = document.querySelector('main');
const btnSearch = document.querySelector('#btnSearch');

btnSearch.addEventListener("click", vaChercher);
function vaChercher()
{
    fetch(url).then(res=>{
        if(res.ok){
            res.json()
                .then(data=>{
                    console.log(data[0]);
                    main.innerHTML = `<img src="${data[0].url}" alt="image aléatoire d'animal">`;
                })
                .catch(err=>console.log(err.statusText))
        }
    })
}