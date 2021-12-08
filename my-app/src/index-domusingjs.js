//dom element using java script
function createElement() {
    const Heading = document.createElement('h1');
    Heading.innerHTML = 'Hello React!';
    const divElement = document.getElementById('root')
    divElement.appendChild(Heading)
}
createElement();