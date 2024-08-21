export const getNotesHTML = (arr) =>
  arr.map((note) => {
    return `<li class="note-item" id="${note.id}">
            <div class="note-header">
              <h3 class="note-title">${note.title}</h3>
              <p class="note-date">${note.date}</p>
            </div>
            <p class="note-body">
            ${note.body}
            </p>
            <div class="note-controls">
              <button class="btn btn-delete" id="delete-btn">DELETE</button>
            </div>
          </li>`;
  });
