const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")
const searchInput = document.querySelector("[data-search]")

let users = []

searchInput.addEventListener("input", e => {
  const value = e.target.value.toLowerCase()
  users.forEach(user => {
    const isVisible =
      user.name.toLowerCase().includes(value) 
    user.element.classList.toggle("hide", !isVisible)
  })
})

fetch("https://mockend.com/madaualiyu/3020/posts")
  .then(res => res.json())
  .then(data => {
    users = data.map(user => {
      const card = userCardTemplate.content.cloneNode(true).children[0]
      const header = card.querySelector("[data-header]")
      header.textContent = user.ingredient
      userCardContainer.append(card)
      return { name: user.ingredient, element: card }
    })
  })
