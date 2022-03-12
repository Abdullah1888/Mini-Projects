//Make sure that the document is fully loaded.
if(document.readyState == 'loading'){
  window.addEventListener('load', ready)
 
}else{
  ready()
}
let clickedTwo = false; 
let firstCardIndex = 0;
var secondCardIndex = 0;
function ready(){
  var card = document.getElementsByClassName("Card");
image_array= [
  'https://images.pexels.com/photos/39317/chihuahua-dog-puppy-cute-39317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  'https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'  
]

for (let i = 0; i < card.length; i++){
    const cardItem = card[i]
    
    cardItem.addEventListener('click', function(){
      const selected_image = image_array[Math.floor(i/2)];
      cardItem.src = selected_image;
      if(clickedTwo){ 
        if(image_array[i] == image_array[firstCardIndex]){ 
          setTimeout( () => {
            cardItem.src = "";
            card[firstCardIndex].src = "";
          }, 2000);
          clickedTwo = false;
        }
      }else{
        clickedTwo = true;
        firstCardIndex = i;
      }
    }); 
}
}


function getImages(index){
    
}
