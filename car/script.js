let left = document.querySelector(".left");
let right = document.querySelector(".right");
let img = document.querySelector(".frame").querySelectorAll("img");
ImgLength = Math.floor(img.length / 2);
MImgLength = Math.round(0 - img.length / 2);
buttons = document.querySelectorAll("button");

let newB = buttons[2];
let i = ImgLength;
console.log(MImgLength)

function toggleTransition(a) {
    if (a == true) {
        left.classList.add('active');
    }
    else {
        right.classList.add('active')
    }
    setTimeout(() => {
        left.classList.remove('active')
        right.classList.remove('active')

    }, 1000); 
}
let digit = 0;
let TransLate = 0;
function TL() {
    TransLate += 750;
    img.forEach(e => { e.style.translate = `${TransLate}px` })

}
function leftSlide() {
    if (digit <= ImgLength && digit > MImgLength) {
        TL();
        digit--;
    }
}

function rightSlide() {

    if (digit < ImgLength) {
        TransLate -= 750;
        img.forEach(e => { e.style.translate = `${TransLate}px` })
        digit++;

        console.log(digit);
    }
}
left.addEventListener("click", () => {
    toggleTransition(true);
    leftSlide();
    if (i > 0) {
        i--;
    }
    console.log(i);



    newB = buttons[i];
    bb()
    
})

right.addEventListener("click", () => {
    toggleTransition(false);

    rightSlide();
    if (i < buttons.length - 1) {
        i++;
    }
    console.log(i);


    newB = buttons[i];
    bb();
   
})

newB.style.background = "white"

console.log(newB)
buttons.forEach(e => { e.addEventListener("click", () => { newB = e; }) })
console.log(buttons);

function bb() {
    buttons.forEach(e => {
        e.style.background = "none"
        newB.style.background = "white";
    })
}
document.querySelector(".buttons").addEventListener("click", () => {
    bb();
    
}
)



const slideButtons = document.querySelectorAll("button");

const centerIndex = ImgLength; 

slideButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        i = index;

        digit = index - centerIndex; 
        
        TransLate = (centerIndex - index) * 750; 
        img.forEach(e => {
            e.style.translate = `${TransLate}px`;
        });
    });
});