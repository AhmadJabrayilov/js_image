let icon = document.getElementById("icon");

icon.onclick = function () {
  icon.previousElementSibling.click();
};
const fileZone = document.querySelector(".file-zone");
const gallery = document.querySelector(".gallery .row");

fileZone.addEventListener("dragover", (e) => e.preventDefault());

fileZone.addEventListener("drop", (e) => {
  e.preventDefault();

  const { dataTransfer } = e;

  let fileReader = new FileReader();

  fileReader.readAsDataURL(dataTransfer.files[0]);

  fileReader.onload = function () {
    console.log(fileReader.result);
    gallery.innerHTML += `
    <div class="col-md-3">
   
        <img src="${fileReader.result}" class="img-fluid col-12" alt="" />
        <button class="btn  dwn-btn">Download  <i id="icon" class="fa-solid fa-file-arrow-down downlad-icon"></i></button>
    </div>
    `;
  };
});
