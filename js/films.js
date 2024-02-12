const ul = document.querySelector('ul')


const fetchUsers =  async ()=>{
   // fetch (`https://reqres.in/api/users?page=1`)
    //.then(response => response.json())
    //.then(data => console.log(data.data))
    const response = await fetch('https://reqres.in/api/users?page=2');
    const result = await response.json();
    renderData(result.data)
    
}

fetchUsers()

function renderData(users){
    users.forEach(user =>{
        //Creating Elements

        const li = document.createElement("li");

        const userId = document.createElement("span");
        const userFirstname = document.createElement("span");
        const userLastname = document.createElement("span");
        const userEmail = document.createElement("span");
        const userAvatar = document.createElement("span");
        const image = document.createElement('img')

        //ADDING THE CLASS
        li.classList.add('userItem')
        userId.classList.add('user-id')
        userFirstname.classList.add('user-firstname')
        userLastname.classList.add('user-lastname')
        userEmail.classList.add('user-email')
        userAvatar.classList.add('user-avatar')

        //Appending elements

        ul.append(li)
        li.append(userId, userFirstname, userLastname, userEmail, userAvatar)
        userAvatar.append(image)

        //Adding content:

        userId.textContent = user.id;
        userFirstname.textContent = user.first_name
        userLastname.textContent = user.last_name
        userEmail.textContent = user.email
        image.src = user.avatar
    });
}