

const textelement = document.getElementById('text');
const speedelement= document.getElementById('speed')

speedelement.addEventListener('change', (e)=>{
    time=500/ e.target.value
})

const someText = 'I am doing Javascript';

let index=1;
let time = 500/speedelement.value

function automaticText(){

    textelement.innerText=someText.slice(0,index)
index++;

if (index>someText.length){
    index=1
}


setTimeout(() => {
    automaticText();
}, time);



}

automaticText();




