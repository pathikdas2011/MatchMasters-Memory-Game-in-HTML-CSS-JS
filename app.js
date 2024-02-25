const cardArray = [
    {
        name: 'fries',
        img:'images/fries.png',
    },

    {
        name: 'chesseburger',
        img:'images/cheeseburger.png',
    },

    {
        name: 'hotdog',
        img:'images/hotdog.png',
    },

    {
        name: 'ice-cream',
        img:'images/ice-cream.png',
    },

    {
        name: 'milkshake',
        img:'images/milkshake.png',
    },

    {
        name: 'pizza',
        img:'images/pizza.png',
    },

    {
        name: 'fries',
        img:'images/fries.png',
    },

    {
        name: 'chesseburger',
        img:'images/cheeseburger.png',
    },

    {
        name: 'hotdog',
        img:'images/hotdog.png',
    },

    {
        name: 'ice-cream',
        img:'images/ice-cream.png',
    },

    {
        name: 'milkshake',
        img:'images/milkshake.png',
    },

    {
        name: 'pizza',
        img:'images/pizza.png',
    },


]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')

let cardsChosen = []
let cardsChosenIds = []
let cardWon = []


function createBoard(){
    for (let i = 0 ; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function checkmatch(){

    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for match!')

    if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')

        alert('You have clicked the same image!')
    }

    if (cardsChosen[0] == cardsChosen[1]){
        alert('You found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        
        cardWon.push(cardsChosen)
    } 
    else{
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('Sorry Try again!')
    }
    
    cardsChosen = []
    cardsChosenIds = []
    resultDisplay.textContent = cardWon.length
    if(cardWon.length == cardArray.length/2){
        resultDisplay.textContent = 'Congratulation you found them all!'
    }
}

function flipCard(){
  //  console.log(cardArray)
    let cardId = this.getAttribute('data-id')
  //  console.log(cardArray[cardId].name)
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds )
   // console.log('clicked', cardId)
   // console.log(cardsChosen)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length === 2) {
        setTimeout( checkmatch , 500)
    }
}
