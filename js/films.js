const ul = document.querySelector('ul')


const fetchUsers =  async ()=>{
    const response = await fetch('https://swapi.dev/api/films/');
    const result = await response.json();
    renderData(result.results)
    console.log(result.results)
}

fetchUsers()

function renderData(films){
    films.forEach(film =>{
        //Creating Elements

        const li = document.createElement("li");

        const filmTitle = document.createElement("span");
        const episodeID = document.createElement("span");
        const releaseYear = document.createElement("span");
        const theDirector = document.createElement("span");
        const theProducer = document.createElement("span");
        //const image = document.createElement('img')

        //ADDING THE CLASS
        li.classList.add('filmItem')
        filmTitle.classList.add('item-1')
        episodeID.classList.add('item-2')
        releaseYear.classList.add('item-3')
        theDirector.classList.add('item-4')
        theProducer.classList.add('item-5')
        
        

        //Appending elements

        ul.append(li)
        li.append(filmTitle, episodeID, releaseYear, theDirector, theProducer)
        //image.append(img(/assets/films_images/episode_1.jpeg))

        //Adding content:

        filmTitle.textContent = film.title;
        episodeID.textContent = film.episode_id
        releaseYear.textContent = film.release_date
        theDirector.textContent = film.director
        theProducer.textContent = film.producer
        
    });
}