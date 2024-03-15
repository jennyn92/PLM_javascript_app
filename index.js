function addStyleContainer(){
    var existingStyleContainer = document.querySelector('.style-container');
    
    if (existingStyleContainer) {
        // Clone the entire .style-container and its contents
        var newStyleContainer = existingStyleContainer.cloneNode(true);

        // Append the newStyleContainer to the styleContainerWrapper
        document.getElementById("styleContainerWrapper").appendChild(newStyleContainer);
    }
}

const dropArea = document.getElementById("drop-area");
const inputFile = document.getElementById("input-file");
const imageView = document.getElementById("img-view");

inputFile.addEventListener("change", uploadImage);

function uploadImage(){
    let imgLink = URL.createObjectURL(inputFile.files[0]);
    imageView.style.backgroundImage = `url(${imgLink})`;
    imageView.textContent= ""
}

//     if(existingStyleContainer){
//         var newStyleContainer = document.createElement('div')
//         newStyleContainer.innerHTML = existingStyleContainer.firstElementChild.innerHTML;
        
//         document.getElementById("styleContainerWrapper").appendChild(newStyleContainer);
//     }
// }

