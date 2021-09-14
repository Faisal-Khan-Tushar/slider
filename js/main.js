let images=[
  "images/pic-1.jpg", 
  "images/pic-2.jpg", 
  "images/pic-3.jpg", 
  "images/pic-4.jpg", 
  "images/pic-5.jpg", 
  "images/pic-6.jpg", 
]

const currentImage=document.getElementById('slider');
let currentIndexPointer=0;
setInterval(() => {
  if(currentIndexPointer>images.length-1)
  {
    currentIndexPointer=0;
  }
  const currentImageUrl=images[currentIndexPointer];
  currentImage.setAttribute('src',currentImageUrl);
  // console.log(currentImageUrl)
  currentIndexPointer++;
 
}, 1500);