const dropArea = document.querySelector(".drop-area");
const button = dropArea.querySelector("button");
const input = dropArea.querySelector("#input-file");
let archivos;

button.addEventListener("click", (e) => {
  input.click();
});

input.addEventListener("change", (e) => {
  archivos = input.files;
  dropArea.classList.add("active");
  processFile(archivos);
  dropArea.classList.add("active");
});

dropArea.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropArea.classList.add("active");
});

dropArea.addEventListener("dragleave", (e) => {
  e.preventDefault();
  dropArea.classList.remove("active");
});

dropArea.addEventListener("drop", (e) => {
  e.preventDefault();
  archivos = e.dataTransfer.files;
  processFile(archivos);
  dropArea.classList.remove("active");
});

function processFile(file) {
  const fileReader = new FileReader();
  fileReader.addEventListener("load", (e) => {
    const archivoNuevo = `
    <div id="${1}" class="file-container">
     <img src="imgdocument.png" alt="${file.name}" width="50">
     <div class="status>
       <span>${file.name}</span>
       <span class="status-text">
       ${file[0].name}
       </span>
       </div>
    </div>
    `;
    const archivoAnterior = document.querySelector("#preview").innerHTML;
    document.querySelector("#preview").innerHTML = archivoNuevo + archivoAnterior;
  });
  fileReader.readAsDataURL(file[0]);
}
