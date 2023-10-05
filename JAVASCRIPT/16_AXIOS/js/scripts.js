// 1 - intalação
console.log(axios)

// 2 - primeiro request
const getData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users', 
    
    // 4 - definindo headers
    {
      headers: {
        "Content-Type": "application/json",
        custom: "header"
      }
    })

    console.log(response)

    return response.data
  }
  catch (error) {
    console.log(error)
  }
}

getData()

// 3 - imprimindo dados na tela
const container = document.querySelector('#users-container')

const printData = async () => {
  const data = await getData()

  console.log(data)

  data.forEach(user => {
    const div = document.createElement('div')
    const nameElement = document.createElement('h2')
    const emailElement = document.createElement('p')

    nameElement.textContent = user.name
    emailElement.textContent = user.email

    div.appendChild(nameElement)
    div.appendChild(emailElement)
    container.appendChild(div)
  })
}

printData()

// 5 - post 
const form = document.querySelector('#post-form')
const titleInput = document.querySelector('#title')
const bodyInput = document.querySelector('#body')

form.addEventListener('submit', e => {
  e.preventDefault()

  axios.post('https://jsonplaceholder.typicode.com/users', {
    title: titleInput.value,
    body: bodyInput.value,
    userId: 1
  })
})