const API = 'http://localhost:3000/toys'

class ToyAdapter {
  static getToys() {
    return fetch(API)
      .then(res => res.json())
  }
  static postToys(data){
    return fetch(API, {
    method: "POST",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  }
  static updateToy(id, numLikes){
    return fetch(`${API}/${id}`, {
    method: "PATCH",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify({likes: numLikes + 1})
    })
    .then(res => res.json())
  }
}


// let adapter = new ToyAdapter()
//
// adapter.getToys()
