// Declare variables

let button = document.getElementsByClassName("button-show-p");
let bttnId = document.getElementById("button1");
let bttn2 = document.querySelector('[data-button2]');
let p = document.getElementById("hideContent");
let childrenLenght = document.querySelector(".bio-container").children.length;
let toggleP = document.querySelectorAll(".toggle-function");
let svg = document.querySelectorAll("[data-svg]");

// Function 1
// bttnId.addEventListener('click', function() {
//         console.log("clicked! number of childrens is" + children);
//         if (p.style.display === 'none' || p.style.display === "") {
//             p.style.display = 'block';
//         } else {
//             p.style.display = 'none';
//         }
//         });

// Function 2
// Create a function where when the user clicks a button the content of that button will be shown, and the content of other buttons will be hide 
// for (let i = 0; i < childrenLenght; i++) {
//     button[i].addEventListener('click', function() {
//         console.log('clicked button ' + (i + 1));
//         for (let j = 0; j < childrenLenght; j++) {
//             if (j != i) {
//                 toggleP[j].classList.add("p-hide");
//             }
//         }
//         toggleP[i].classList.remove("p-hide");
//     });
// }

// Function 3
// Create a function where when the user clicks a button the content will be displayed and vice versa
for (let i = 0; i < childrenLenght; i++) {
    button[i].addEventListener('click', function() {
        console.log('button ' + (i + 1) + ' clicked!');
        toggleP[i].classList.toggle("p-hide");
        svg[i].classList.toggle("svg-rotate");
    });
}

bttn2.addEventListener('click', function() {
    console.log('helloooo');
});