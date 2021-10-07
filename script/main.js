const albumDOM= document.querySelector('.album')


// fetch api

fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
.then((response) => response.json())
.then(function getAlbum(album){

        let albumContent= album.map(item =>{

            return `  
            <div class="col-lg-3 col-md-4 col-6">
                <a href=${item.thumbnailUrl} class="d-block">
                <img class="img-fluid img-thumbnail" src=${item.url} alt="">
                </a>
                    <p style="text-align: left; padding: 8px;">${item.id}. ${item.title}</p>
            </div>
            `
        })

        albumDOM.innerHTML= albumContent.join("")

})

    
