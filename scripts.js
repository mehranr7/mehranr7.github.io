var modal = document.getElementById("modal");
var modalImage = document.getElementById("modal-image");
var close = document.getElementsByClassName("close")[0];

function openModal(link, alt){
    modalImage.src = link;
    modalImage.alt = alt;
    modal.style.display = "flex";
    setTimeout(function(){
        modal.style.opacity = 1;
    }, 100);
}

function closeModal(){
    modal.style.opacity = 0;
    setTimeout(function(){
        modal.style.display = "none";
    }, 1100);
}

// Get all elements with the onclick attribute
const elementsWithOnClick = document.querySelectorAll('[onclick]'); 

// Add a class to each element
elementsWithOnClick.forEach(function(element){
  element.style.cursor = "pointer";
});