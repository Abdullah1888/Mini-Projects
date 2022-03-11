var card = document.getElementsByClassName('Card');
image_array= [
  'animal1.jpg',
  'animal2.jpg'  
]
for (var i = 0; i < card.length; i++)
{
    card[i].addEventListener('click', function(){
        selected_image = image_array[1];
        card.src = `./Images/${selected_image}`;
        
    }, false);
    
}

function getImages(index){
    
}
