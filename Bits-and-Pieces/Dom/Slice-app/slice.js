    
const container = document.getElementById("container");
const boxcontainer = document.getElementById("box-container");
const  button = document.getElementById('button')
 



button.addEventListener('click', ()=>{
    boxcontainer.classList.toggle('big');
   container.classList.toggle('back')

})

function createboxes(){

for(i=0; i<4 ; i++){
    for(j=0 ; j<4 ; j++){
         let singlebox= document.createElement('div')

         singlebox.classList='box';
         singlebox.style.backgroundPosition = `${-j*125}px ${-i*125}px`

         boxcontainer.append(singlebox)
    }
}

}

createboxes()



