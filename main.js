import { getNotesHTML } from "./public/utils/utils";
import { Note } from "./public/utils/classNote";

const App = () => {
  const titleEl = document.getElementById("note-title");
  const bodyEl = document.getElementById("note-body");
  const submitBtnEl = document.getElementById("note-submit");
  const notesListEl = document.getElementById("notes-list");

  const notesArr = JSON.parse(localStorage.getItem("notes")) || [];

  notesArr && (notesListEl.innerHTML = getNotesHTML(notesArr.reverse()));

  submitBtnEl.addEventListener("click", (e) => {
    e.preventDefault();
    if (titleEl.value && bodyEl.value) {
      const note = new Note(titleEl.value, bodyEl.value);
      notesArr.push(note);
      localStorage.setItem("notes", JSON.stringify(notesArr.reverse()));
      notesListEl.innerHTML = getNotesHTML(notesArr);
      titleEl.value = bodyEl.value = "";
    }
  });

  notesListEl.addEventListener("click", (e) => {
    const target = e.target.textContent;
    const targetId = Number(e.target.closest("li").id);

    if (target === "DELETE") {
      const currentNoteIndex = notesArr
        .map((note) => note.id)
        .indexOf(targetId);
      notesArr.splice(currentNoteIndex, 1);
      localStorage.setItem("notes", JSON.stringify(notesArr.reverse()));
      notesListEl.innerHTML = getNotesHTML(notesArr);
    }
  });
};

App();
