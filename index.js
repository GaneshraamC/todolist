// Load existing notes from cookies on page load
window.onload = function() {
    loadNotes();
  };

let form = document.getElementById("form");
let tabtext = document.getElementById("tabtext");
let msg = document.getElementById("msg")
let posts = document.getElementById("posts")

// Button click submit

form.addEventListener("submit", (cli) => {

    cli.preventDefault();
    console.log("Button clicked");
    formValidation();
});

// form validation--for success and error

let formValidation = () => {
    if (tabtext.value === "") {
        msg.innerHTML = "post cannot  be empty here"
        console.log("failure");
    }
    else {
        console.log("success");
        msg.innerHTML = " "
        getData();
    }
};


// Accept and store the data

let emptyObj = {};

let getData = () => {
    emptyObj["text"] = tabtext.value;
    console.log(emptyObj);
    createNotes();
};

// Load existing notes from localStorage
let loadNotes = () => {
    let storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
        posts.innerHTML = storedNotes;
    }
};

// Save notes to localStorage
let saveNotes = () => {
    localStorage.setItem('notes', posts.innerHTML);
};

// create a post

let createNotes = () => {
    posts.innerHTML +=
        `<div>
    <p>${emptyObj.text}</p>
    <span class="options">
      <i onClick="editNotes(this)" class="fas fa-edit"></i>
      <i onClick="deleteNotes(this)" class="fas fa-trash-alt"></i>
    </span>
  </div>` ;

    // reset the form
    
    tabtext.value = "";
    saveNotes();
}

// Delete the notes

let deleteNotes = (del) =>
{
    del.parentElement.parentElement.remove();
    saveNotes();
}

// Update the notes

let editNotes = (edit) =>
{
    tabtext.value = edit.parentElement.previousElementSibling.innerHTML;
    edit.parentElement.parentElement.remove();
    saveNotes();
}

