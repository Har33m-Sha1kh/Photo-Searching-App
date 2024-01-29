//cashing the dom data.results[0].urls.thumb
var query=document.querySelector('#query'),
    count=document.querySelector('#count'),
    search=document.querySelector('#search'),
    main=document.querySelector('main');  


// after search
search.addEventListener('click',()=>{
    main.innerHTML=' ';
    fetchData(query.value,count.value);
})  

async function fetchData(Q,C){     
    try{
        const response=await  fetch(`https://api.unsplash.com/search/photos?per_page=1000&query=${Q}&client_id=arWRz6Y-kBHGWYDZJmmZEwma_-jAyV4oCbWAJfalUvs`);
        const data=await response.json();
       
           console.log(data);
           let array=data.results;
           let arr= array.slice(0,C);//required data
        
     // inserting data.......
            arr.forEach((e) => {
                console.log(e.alt_discription);
    
              let dsc=e.description==null ? e.alt_description
              : e.description ;
    
              let figure=document.createElement('figure');
    
              figure.innerHTML=`<img title='${dsc}' class='img' src="${e.urls.thumb}" width="300px">
                <figcaption>
                    <div class="like"><span class="red_text">Likes</span> &nbsp;&nbsp;<span class="likes">${e.likes}</span> </div>
                </figcaption>`;
    
                main.appendChild(figure);
    
                
             });    

    }catch(error){
        console.error(error)
    }

}
