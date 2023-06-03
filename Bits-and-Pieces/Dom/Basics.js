/*
console.log(document.domain)
console.log(document.URL)

console.log(document.title)
document.title= "Document Object Model"
console.log(document.title);
console.log(document.head);
console.log(document.body);

console.log(document.all);
console.log(document.all[4]);
*/

// Two ways to add elments in body

//const body= document.body;

//body.append('Hello everyone');
//body.appendChild("Hello everyone");    (it will not add strings)

//const div= document.createElement('div');

// Two ways to add text into element

// div.innerText="javascript"
//div.textContent='Java'

//body.append(div)
//body.appendChild(div)

// const div=document.querySelector('div')

// console.log(div.innerText) // it gives the text visible on UI
// console.log(div.textContent) // it  gives the text written inside the div

// const body= document.body;

// let div= document.createElement('div');

// // let strong= document.createElement('strong')

// // strong.innerText="My fav lang is Javascript"
// // div.append(strong)

//                            div.innerHTML="<strong> My fav lang is Javascript</strong>"

// body.append(div)

// const div = document.querySelector('div')

// const spanOne = document.getElementById("one");
// const spanTwo = document.getElementById("two");
// // console.log(spanTwo);

// // how to remove elements

// // spanTwo.remove();
// div.removeChild(spanTwo)

// // div.append(spanTwo);

                 // attributes methods

// console.log(spanOne.getAttribute("name"));
// spanOne.setAttribute("name", "subject");

// console.log(spanOne.id);
// spanOne.className = "language";

// spanOne.removeAttribute("class");


                   /// add and remove classes

//  spanTwo.classList.add('lang','com')  ;
//  spanTwo.classList.remove('com');


//spanOne.classList.toggle('new-cls' ,true);

// spanOne.style.color='tomato';
// spanTwo.style.backgroundColor='green';



///////////////////////////// dom selectors ////////////////
/*
1. document.getElementsByTagName()

2. document.getElementById() 

3. document.getElementsByClassName()

4. document.getElementsByName()

5. document.querySelector()  
                                  // css selectors input
6. document.querySelectorAll()

 */


      // get element by id

//console.log(document.getElementById('header'))

// let headerTitle= document.getElementById('headerTitle')

// headerTitle.innerText='smp aj'

       // get elments by className

  //  const listitems = document.getElementsByClassName('list-group-item')

//  for (let i= 0; i < listitems.length; i++) {
      
//     listitems[i].style.backgroundColor='tomato'
//  }

//  for( itm of listitems){
//     itm.style.backgroundColor = 'aquamarine'
//  }


          // get elements by tag name

// const listitems = document.getElementsByTagName('li')

// listitems[3].style.backgroundColor= 'aqua'

// const buttons= document.getElementsByTagName('button')
// console.log(buttons)


          // get elements using query selector

// const header= document.querySelector('#header')
// const searchInput = document.querySelector(".card");

// console.log(header)
// console.log(searchInput);


// let listitems = document.querySelector('li') {it will  give the first occurence only from all li}
// listitems.style.backgroundColor='tomato'


        //querySelectorAll

//         let listitems = document.querySelectorAll('li')
// console.log(listitems)



























