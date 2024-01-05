const notesContainer = document.querySelector('#notes-container')
const noteInput = document.querySelector('#note-content')
const addNoteBtn = document.querySelector('.add-note')

//funções
const addNote = () => {
  const noteObject = {
    id: generateId(),
    content: noteInput.value,
    fixed: false
  }

  const noteElement = createNote(noteObject.id, noteObject.content)

  notesContainer.appendChild(noteElement)
}

const generateId = () => Math.floor(Math.random() * 5000)

const createNote = (id, content, fixed) => {
  const element = document.createElement('div')

  element.classList.add('note')

  const textarea = document.createElement('textarea')

  textarea.value = content
  textarea.placeholder = 'Adicione algum texto...'

  element.appendChild(textarea)

  return element
}

//eventos
addNoteBtn.addEventListener('click', () => addNote())