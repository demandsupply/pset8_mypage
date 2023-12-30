// Create a function that will show/hide content when the button is clicked

let button = document.getElementsByClassName("button-show-p");
let bttnId = document.getElementById("button1");
let p = document.getElementById("hideContent");
let children = document.querySelector(".bio-container").children.length;

// bttnId.addEventListener('click', function() {
//     console.log("clicked!");
//     if (p[0].classList == 'p-hide') {
//         console.log("hello");
//         p[0].classList.add('p-hide');
//         p[0].classList.remove('p-show');
//     } else {
//     p[0].classList.remove("p-hide");
//     p[0].classList.add("p-show");}
// });

bttnId.addEventListener('click', function() {
        console.log("clicked! number of childrens is" + children);
        if (p.style.display === 'none' || p.style.display === "") {
            p.style.display = 'block';
        } else {
            p.style.display = 'none';
        }

        });