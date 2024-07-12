
document.addEventListener('DOMContentLoaded', function () {
    loadNotes();
  });
  
  document.getElementById('addNoteButton').addEventListener('click', function () {
    const noteText = document.getElementById('noteText').value;
  
    if (noteText.trim() === '') {
      alert('Please enter a note.');
      return;
    }
  
    const note = {
      id: Date.now(),
      text: noteText,
    };
  
    saveNoteToLocalStorage(note);
    addNoteToDOM(note);
    document.getElementById('noteText').value = '';
  });
  
  function saveNoteToLocalStorage(note) {
    let notes = localStorage.getItem('notes');
    if (notes === null) {
      notes = [];
    } else {
      notes = JSON.parse(notes);
    }
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
  }
  
  function loadNotes() {
    let notes = localStorage.getItem('notes');
    if (notes !== null) {
      notes = JSON.parse(notes);
      notes.forEach(addNoteToDOM);
    }
  }
  
  function addNoteToDOM(note) {
    const notesContainer = document.getElementById('notesContainer');
    const noteElement = document.createElement('div');
    noteElement.className = 'note';
    noteElement.setAttribute('data-id', note.id);
  
    const noteTextElement = document.createElement('p');
    noteTextElement.textContent = note.text;
  
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
      deleteNoteFromLocalStorage(note.id);
      notesContainer.removeChild(noteElement);
    });
  
    noteElement.appendChild(noteTextElement);
    noteElement.appendChild(deleteButton);
    notesContainer.appendChild(noteElement);
  }
  
  function deleteNoteFromLocalStorage(noteId) {
    let notes = localStorage.getItem('notes');
    if (notes !== null) {
      notes = JSON.parse(notes);
      notes = notes.filter(note => note.id !== noteId);
      localStorage.setItem('notes', JSON.stringify(notes));
    }
  }
  
