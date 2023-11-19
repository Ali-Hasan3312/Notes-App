const notesBtn = document.querySelector(".btn");
const notesContainer = document.querySelector(".notes-container");
const notes = document.querySelectorAll(".input-box");


function notesSave(){
    localStorage.setItem("notes", notesContainer.innerHTML);
}

notesBtn.addEventListener("click", ()=>{
      var inputBox = document.createElement("p");
      var img = document.createElement("img");
      inputBox.setAttribute("contenteditable", "true");
      inputBox.setAttribute("class", "input-box");
      img.src = "/images/delete.png";
      notesContainer.appendChild(inputBox)
      inputBox.appendChild(img);
      
});
notesContainer.addEventListener("click", function (e){
    if (e.target.tagName ==="IMG") {
        e.target.parentElement.remove();
        notesSave();
    }
    
});
