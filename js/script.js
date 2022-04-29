// console.log('Hello World!') // testing line


// PRE-SELECTORS
// DOM Manipulation - Select HTML Elements
const imgEle = document.querySelector('img')
const turnOn = document.querySelector('#turn-on')
const turnOff = document.querySelector('#turn-off')

// On/Off Images
const onLightbulb = 'img/lightbulbOn.png'
const offLightbulb = 'img/lightbulbOff.png'


// EVENT LISTENER - DA BOMB.... KAAAAAABOOOOOOMMMMMMMMMMMMMMMMMMM!
turnOn.addEventListener('click', function() {
    console.log('Hello Mama!') // testing line
    imgEle.setAttribute('src', onLightbulb) // function setAttribute - for new element that you select... attribute key and value
})

turnOff.addEventListener('click', function() {
    console.log('Hello Dada!') // testing line
    imgEle.setAttribute('src', offLightbulb) // function setAttribute - for new element that you select
})

