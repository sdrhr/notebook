// script.js
document.getElementById('addNoteButton').addEventListener('click', function() {
    const noteText = document.getElementById('noteText').value;
  
    if (noteText.trim() === '') {
      alert('Please enter a note.');
      return;
    }
  
    const noteElement = document.createElement('div');
    noteElement.className = 'note';
    noteElement.textContent = noteText;
  
    document.getElementById('notesContainer').appendChild(noteElement);
    document.getElementById('noteText').value = '';
  });
  