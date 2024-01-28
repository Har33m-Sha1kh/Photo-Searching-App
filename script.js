//cashing the dom data.results[0].urls.thumb
var query=document.querySelector('#query'),
    count=document.querySelector('#count'),
    search=document.querySelector('#search'),
    main=document.querySelector('main');   



// after search..
search.addEventListener('click',()=>{
    main.innerHTML=' ';
    fetchData(query.value,count.value);
})  




let fetchData=(Q,C)=>{

    fetch(`https://api.unsplash.com/search/photos?query=${Q}&client_id=arWRz6Y-kBHGWYDZJmmZEwma_-jAyV4oCbWAJfalUvs`)
    .then(response=>response.json())
    .then(data=>{

       let array=data.results;
       let arr= array.slice(0,C);//required data
       

 // inserting data.......
     arr.forEach((e) => {

    let dsc=e.description==null ?"Just catch up the unique moments": e.description ;

    let figure=document.createElement('figure');

       figure.innerHTML=`<img class='img' src="${e.urls.thumb}" width="300px">

            <figcaption>
                <p>${dsc}</p>
                <br>
                <div class="like"><span class="red_text">Likes</span> &nbsp;&nbsp;<span class="likes">${e.likes}</span> </div>
            </figcaption>`;

            main.appendChild(figure);
     });

    })
    .catch(error=>console.error(error))
}

