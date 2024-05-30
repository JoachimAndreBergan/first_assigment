const ul = document.querySelector('ul')


const fetchUsers =  async ()=>{
    const response = await fetch('https://swapi.dev/api/starships/');
    const result = await response.json();
    renderData(result.results)
    console.log(result.results)
}

fetchUsers()

function renderData(starships){
    films.forEach(starship => {
        //Creating Elements

        const li = document.createElement("li");

        const name = document.createElement("span");
        const passengers = document.createElement("span");
        const hyperdrive_rating = document.createElement("span");
        const starship_class = document.createElement("span");
        const crew = document.createElement("span");
        //const image = document.createElement('img')

        //ADDING THE CLASS
        li.classList.add('filmItem')
        name.classList.add('item-1')
        passengers.classList.add('item-2')
        hyperdrive_rating.classList.add('item-3')
        starship_class.classList.add('item-4')
        crew.classList.add('item-5')
         //Appending elements

         ul.append(li)
         li.append(name, passengers, hyperdrive_rating, starship_class, crew)
         //image.append(img(/assets/films_images/episode_1.jpeg))
 
         //Adding content:
 
         name.textContent = starship.name;
         passengers.textContent = starship.passengers
         hyperdrive_rating.textContent = starship.hyperdrive_rating
         starship_class.textContent = starship.starship_class
         crew.textContent = starship.crew
    })}