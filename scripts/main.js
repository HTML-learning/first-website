let myImage = document.querySelector('img');

myImage.onclick = function(){
    if (myImage.getAttribute('src') === '/images/fire-fox.png') {
        myImage.setAttribute('src', '/images/fire-fox2.png');
    } else {
        myImage.setAttribute('src', '/images/fire-fox.png');
    }
}

let myButton = document.querySelector('button');

let myHeading = document.querySelector('h1');

if (localStorage.getItem('name')) {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

function setUserName(){
    myName = prompt('Please enter your name.');
    if (!myName){
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

myButton.onclick = function(){
    setUserName();
}