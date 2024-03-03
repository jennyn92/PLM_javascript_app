function addStyleContainer(){
    var existingStyleContainer = document.querySelector('.style-container');
    
    if (existingStyleContainer) {
        // Clone the entire .style-container and its contents
        var newStyleContainer = existingStyleContainer.cloneNode(true);

        // Append the newStyleContainer to the styleContainerWrapper
        document.getElementById("styleContainerWrapper").appendChild(newStyleContainer);
    }
}
//     if(existingStyleContainer){
//         var newStyleContainer = document.createElement('div')
//         newStyleContainer.innerHTML = existingStyleContainer.firstElementChild.innerHTML;
        
//         document.getElementById("styleContainerWrapper").appendChild(newStyleContainer);
//     }
// }

