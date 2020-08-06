/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios';

axios.get('https://api.github.com/users/purplehays09')
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/


/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
  .then(response => {
    cardMaker(response.data)
  })
  .catch(error => {
    debugger 
    console.log(error)
  })
/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan','dustinmyers','justsml','luishrd','bigknell'];

followersArray.forEach(user => {
  
  const nameCombo = 'https://api.github.com/users/' + user;

  axios.get(nameCombo)
    .then(response => {
      cardMaker(response.data)
    })
    .catch(error => {
      debugger
      console.log(error)
    })
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

const cards = document.querySelector('.cards')

function cardMaker(gitObj){
  // make variables for the elements
  const card = document.createElement('div')
  const portrait = document.createElement('img')
  const cardInfo = document.createElement('div')
  const nameTitle = document.createElement('h3')
  const userName = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const link = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  // add classes and content
  card.classList.add('card')
  portrait.src = gitObj.avatar_url;
  cardInfo.classList.add('card-info')
  nameTitle.classList.add('name')
  userName.classList.add('username')
  userName.textContent = gitObj.login
  location.textContent = `Location: ${gitObj.location}`
  profile.textContent = `Profile: `
  link.href = gitObj.html_url 
  link.textContent = gitObj.html_url
  followers.textContent = `Followers: ${gitObj.followers}`
  following.textContent = `Followers: ${gitObj.following}`
  bio.textContent = `Bio: ${gitObj.bio}`

  // create the elements on the page
  cards.appendChild(card)
  card.appendChild(portrait)
  card.appendChild(cardInfo)
  cardInfo.appendChild(nameTitle)
  cardInfo.appendChild(userName)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)
  profile.appendChild(link)

  // create the listener

  return card

}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
