// Create a function that will show/hide content when the button is clicked

let button = document.getElementsByClassName("button-show-p");
let bttnId = document.getElementById("button1");
let p = document.getElementById("hideContent");
let childrenLenght = document.querySelector(".bio-container").children.length;
let toggleP = document.querySelectorAll(".toggle-function");


// bttnId.addEventListener('click', function() {
//         console.log("clicked! number of childrens is" + children);
//         if (p.style.display === 'none' || p.style.display === "") {
//             p.style.display = 'block';
//         } else {
//             p.style.display = 'none';
//         }

//         });

// Create a function where when the user clicks a button the content of that button will be shown, and the content of other buttons will be hide 
for (let i = 0; i < childrenLenght; i++) {
    button[i].addEventListener('click', function() {
        console.log('clicked button ' + (i + 1));
        for (let j = 0; j < childrenLenght; j++) {
            if (j != i) {
                toggleP[j].classList.add("p-hide");
            }
        }
        toggleP[i].classList.remove("p-hide");
    });
}
