document.addEventListener("DOMContentLoaded", () => {

const toyCollection = document.querySelector('#toy-collection')
const addBtn = document.querySelector('#new-toy-btn')
const toyForm = document.querySelector('.container')
let addToy = false
// YOUR CODE HERE
  ToyAdapter.getToys()
  .then((json) => {
    json.forEach(renderToys)
    console.log(document.querySelector(".like-btn"));

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
  const newToyTitle = document.querySelector("input[name='name']")
  const newToyImage = document.querySelector("input[name='image']")
  // console.log(newToyTitle)
  ToyAdapter.postToys({name: newToyTitle.value,
    image: newToyImage.value,
    likes: 0
  })
  .then(toys => {
    renderToys(toys)
    newToyTitle.value = ""
    newToyImage.value = ""
  })
})

//saving everything into renderingToys
const renderToys = (toy) => {
  // console.log(toy)
  //elements created
  const divToyCard = document.createElement('div')
  const cardHeading = document.createElement('h2')
  const cardImage = document.createElement('img')
  const cardParagraph = document.createElement('p')
  const cardButton = document.createElement('button')

  //classNames
  divToyCard.className = 'card'
  divToyCard.dataset.id = toy.id
  // divToyCard.setAttribute("data-id", toy.id)
  cardImage.className = 'toy-avatar'
  cardButton.className = 'like-btn'

  //innertexts

  cardHeading.innerText = toy.name
  cardImage.src = toy.image
  cardParagraph.innerText = toy.likes
  cardButton.innerText = "Like <3"

  //appending
  toyCollection.append(divToyCard)
  divToyCard.append(cardHeading, cardImage, cardParagraph, cardButton)

  //event for cardButton
  cardButton.addEventListener("click", (event) => {
    console.log(event.target);
    ToyAdapter.updateToy(toy.id, toy.likes)
    .then(res => {
      toy.likes = res.likes
      cardParagraph.innerText = res.likes
    })
  })
}


// OR HERE!
})
