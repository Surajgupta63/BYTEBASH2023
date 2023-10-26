const form = document.querySelector("form"),
fileInput = document.querySelector(".file-input"),
progressArea = document.querySelector(".progress-area"),
uploadedArea = document.querySelector(".uploaded-area");

form.addEventListener("click", ()=>{
    fileInput.click();
})


fileInput.onchange = ({target})=>{
    let file = target.files[0];
    if(file){
        let fileName = file.name;
        uploadFile(fileName);
    }
}

function uploadFile(name){
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "UploadFiles/php/upload.php");
    xhr.upload.addEventListener("progress", ({loaded, total}) =>{
        let fileLoaded = Math.floor((loaded/total)*100);
        let fielTotal = Math.floor(total/1000);
        console.log(fileLoaded, fielTotal)
    });
    let formData = new FormData(form);
    xhr.send(formData);
}
