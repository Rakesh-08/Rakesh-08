const body = document.body ;
const images = document.querySelectorAll('.slide');
const rightArrow = document.getElementById("right-arrow");
const leftArrow = document.getElementById('left-arrow');


rightArrow.addEventListener('click' , nextImage);
leftArrow.addEventListener("click", previousImage);

let ImageIndex =0;

function nextImage(){

    ImageIndex++;
   

    if(ImageIndex > images.length -1){
        ImageIndex=0
    }
     setBackgroundImg();
    setActiveImage();

}

setBackgroundImg();

function previousImage() {
    ImageIndex-- ;

    if (ImageIndex<0){
        ImageIndex= images.length -1
    }

    setActiveImage();
    setBackgroundImg();
}

function setActiveImage(){
   images.forEach(img=>
    img.classList.remove('active'));

    images[ImageIndex].classList.add('active')
}
 

function setBackgroundImg(){
    body.style.backgroundImage=
    images[ImageIndex].style.backgroundImage
}


