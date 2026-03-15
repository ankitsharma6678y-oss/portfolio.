 const text = [
"Frontend Developer",
"Web Developer",
"JavaScript Learner"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type(){

const element = document.getElementById("typing");

if(i < text.length){

if(!isDeleting && j <= text[i].length){
current = text[i].substring(0,j++);
}

if(isDeleting && j >= 0){
current = text[i].substring(0,j--);
}

element.textContent = current;

if(j == text[i].length){
isDeleting = true;
}

if(isDeleting && j === 0){
isDeleting = false;
i++;

if(i === text.length){
i = 0;
}
}

}

setTimeout(type,100);

}

type();