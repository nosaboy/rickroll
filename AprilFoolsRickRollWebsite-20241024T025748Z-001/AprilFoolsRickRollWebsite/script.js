
const visible = document.getElementById('example0'); // document = webpage
const hidden = document.getElementById('example1'); // you can access any element of the webpage by getting its id
let vid = document.getElementById("videorickroll");

// window.onclick = function() {

function opentab() {

    // Makes text appear after click
     visible.style.display = 'none';
     hidden.style.display = '';
     vid.play();

    // https://developer.mozilla.org/en-US/docs/Web/API/Window/open
    const window1 = window.open("child.html","_blank","width=400,height=300");
    window1.moveTo(Math.random() * 800, Math.random() * 600); // go to random coord [0,800]
    /*
    Freeze web:
    while(true){
        window1.moveTo(Math.random() * 800, Math.random() * 600);
    }
    */
    

    /*
    let i = 0;
    while(true){
        i = (i+5)%200;
        window1.moveTo(i,i);
    }
    */
    
}

document.addEventListener('click', opentab);

