document.addEventListener("DOMContentLoaded", () => {

const toyCollection = document.querySelector('#toy-collection')
const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false

// YOUR CODE HERE
fetch('http://localhost:3000/toys')
  .then(res => {return res.json()})
  .then((json) => {
    json.forEach(renderToys)
  })

addBtn.addEventListener('click', () => {
  // hide & seek with the form
  addToy = !addToy
  if (addToy) {
    toyForm.style.display = 'block'
    // submit listener here
  } else {
    toyForm.style.display = 'none'
  }
})

const newToyForm = document.querySelector('.add-toy-form')
newToyForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const newToyTitle = document.getElementsByName('name')
  const newToyImage = document.getElementsByName('image')
  fetch('http://localhost:3000/toys', {
    method: 'POST',
    headers: {"Content-type": "application/json"},
    body: JSON.stringify({ title: newToyTitle.value,
      image = newToyImage.value
    })
  }
  .then(res => res.json())
  .then(toys) => {
    renderToys(toys)
    newToyTitle.value = ""
    newToyImage.value = ""
  })
})

//saving everything into renderingToys
const renderToys = (toys) => {
  console.log(toys)
  //elements created
  const divToyCard = document.createElement('div')
  const cardHeading = document.createElement('h2')
  const cardImage = document.createElement('img')
  const cardParagraph = document.createElement('p')
  const cardButton = document.createElement('button')

  //classNames
  divToyCard.className = 'card'
  cardImage.className = 'toy-avatar'
  cardButton.className = 'like-btn'

  //innertexts

  cardHeading.innerText = toys.name
  cardImage.src = toys.image
  cardParagraph.innerText = toys.likes
  cardButton.innerText = "Like <3"


  //appending
  toyCollection.append(divToyCard)
  divToyCard.append(cardHeading, cardImage, cardParagraph, cardButton)
}


// OR HERE!

})
