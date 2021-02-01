let $start = document.querySelector('#start')
let $game = document.querySelector('#game')

$start.addEventListener('click', startGame)

function startGame () {
    $game.style.backgroundColor = '#fff'
    $start.classList.add('hide')
    renderBox()
}
function renderBox() {
    let box = document.createElement('div')

    box.style.height = box.style.width = '50px'
    box.style.position = 'absolute'
    box.style.backgroundColor = '#000'

    $game.insertAdjacentElement('afterbegin')

}