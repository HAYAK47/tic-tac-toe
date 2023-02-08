function init() {
    const grid = document.querySelector('.grid')
    const winnerTag = document.querySelector('#winning')
    const reset = document.querySelector('.reset')
    const sound = document.querySelector('#clap')
    const pop = document.querySelector('.overlay')
    const sound2 = document.querySelector('#pink')
    // const textPop = document.querySelector('.endText')
   

    const width = 3
    const gridCellCount = width * width
    const cells = []
    let playerOne = true
    let playertwo = false
    let resetCount = 0
    let winStatus = false
    let soundStatus = true


    //cells index, add id push them
    function creatGrid() {
        for (let i = 1; i <= gridCellCount; i++) {
            const cell = document.createElement('div')
            cell.setAttribute('id', `id${i}`)
            cell.setAttribute('class', 'blank')
            cells.push(cell)
            grid.appendChild(cell)
        }
    }


    function handleMouseEnter(event) {
        event.target.style.width = '300px'
        console.log('mouse is entering', event.target)
        event.target.style.backgroundColor = "red"
        sound.src = 'sounds/pink.mp3'
        sound.play()
    }
    cells.forEach(cell => {
        cell.addEventListener('mouseEnter', handleMouseEnter)
    })


    //player click cell
    function playerX(event) {
        if(winStatus){
            return
        }
        if (event.target.classList.contains('blank')) {
            // if(playerOne == true){
            // console.log(event.target.id)
            event.target.classList.add('X')
            event.target.classList.remove('blank')
            playerOne = false
            playertwo = true

            Winning()
        }
    }

    function playerO(event) {
        if(winStatus){
            return
        }
        if (event.target.classList.contains('blank')) {
            //  if(playertwo == true){
            // console.log(event.target.id)
            event.target.classList.add('O')
            event.target.classList.remove('blank')
            playertwo = false
            playerOne = true

            Winning()
        }
    }

    // 

    function startGame(event) {
        console.log(winStatus)
        // if (resetCount < 9) {
            // console.log(event.target)
            if (playerOne == true) {
                playerX(event)
            } else {
                playerO(event)
            // }
            resetCount++
            console.log(resetCount)
            // Winning()
        }
    }

    function popUp() {
        document.body.appendChild(pop) }

function backgroundSound(){
    if(winStatus === true){
        sound.play()
    }}


    function Winning() {
        for (let i = 0; i <= cells.length; i++) {
            //player X win
            if (cells[0].classList.contains('X') && cells[1].classList.contains('X') && cells[2].classList.contains('X')) {
                winnerTag.innerHTML = 'Winner Is X'
                winStatus = true
                soundStatus = false
                sound.src = 'sounds/clapping.mp3'
                sound.play()
                popUp()
                // cells.forEach(cell => {
                //     cell.removeEventListener('click', startGame)

                // })
            }
            else if (cells[3].classList.contains('X') && cells[4].classList.contains('X') && cells[5].classList.contains('X')) {
                winnerTag.innerHTML = 'Winner Is X'
                winStatus = true
                soundStatus = false
                sound.src = 'sounds/clapping.mp3'
                sound.play()
                popUp()
                // cells.forEach(cell => {
                //     cell.removeEventListener('click', startGame)

                // })
            }
            else if (cells[6].classList.contains('X') && cells[7].classList.contains('X') && cells[8].classList.contains('X')) {
                winnerTag.innerHTML = 'Winner Is X'
                winStatus = true
                soundStatus = false
                sound.src = 'sounds/clapping.mp3'
                sound.play()
                popUp()
                // cells.forEach(cell => {
                //     cell.removeEventListener('click', startGame)

                // })
            }
            else if (cells[0].classList.contains('X') && cells[3].classList.contains('X') && cells[6].classList.contains('X')) {
                winnerTag.innerHTML = 'Winner Is X'
                winStatus = true
                soundStatus = false
                sound.src = 'sounds/clapping.mp3'
                sound.play()
                popUp()
                // cells.forEach(cell => {
                //     cell.removeEventListener('click', startGame)

                // })
            }
            else if (cells[1].classList.contains('X') && cells[4].classList.contains('X') && cells[7].classList.contains('X')) {
                winnerTag.innerHTML = 'Winner Is X'
                winStatus = true
                soundStatus = false
                sound.src = 'sounds/clapping.mp3'
                sound.play()
                popUp()
                // cells.forEach(cell => {
                //     cell.removeEventListener('click', startGame)

                // })
            }
            else if (cells[2].classList.contains('X') && cells[5].classList.contains('X') && cells[8].classList.contains('X')) {
                winnerTag.innerHTML = 'Winner Is X'
                winStatus = true
                soundStatus = false
                sound.src = 'sounds/clapping.mp3'
                sound.play()
                popUp()
                // cells.forEach(cell => {
                //     cell.removeEventListener('click', startGame)

                // })
            }
            else if (cells[0].classList.contains('X') && cells[4].classList.contains('X') && cells[8].classList.contains('X')) {
                winnerTag.innerHTML = 'Winner Is X'
                winStatus = true
                soundStatus = false
                sound.src = 'sounds/clapping.mp3'
                sound.play()
                popUp()
                // cells.forEach(cell => {
                //     cell.removeEventListener('click', startGame)

                // })
            }
            else if (cells[2].classList.contains('X') && cells[4].classList.contains('X') && cells[6].classList.contains('X')) {
                winnerTag.innerHTML = 'Winner Is X'
                winStatus = true
                soundStatus = false
                sound.src = 'sounds/clapping.mp3'
                sound.play()
                popUp()
                // cells.forEach(cell => {
                //     cell.removeEventListener('click', startGame)

                // })
            }



            /// player O win
            else if (cells[0].classList.contains('O') && cells[1].classList.contains('O') && cells[2].classList.contains('O')) {
                winnerTag.innerHTML = 'Winner Is O'
                winStatus = true
                soundStatus = false
                sound.src = 'sounds/clapping.mp3'
                sound.play()
                popUp()
                // cells.forEach(cell => {
                //     cell.removeEventListener('click', startGame)

                // })
            }
            else if (cells[3].classList.contains('O') && cells[4].classList.contains('O') && cells[5].classList.contains('O')) {
                winnerTag.innerHTML = 'Winner Is O'
                winStatus = true
                soundStatus = false
                sound.src = 'sounds/clapping.mp3'
                sound.play()
                popUp()
                // cells.forEach(cell => {
                //     cell.removeEventListener('click', startGame)

                // })
            }
            else if (cells[6].classList.contains('O') && cells[7].classList.contains('O') && cells[8].classList.contains('O')) {
                winnerTag.innerHTML = 'Winner Is O'
                winStatus = true
                soundStatus = false
                sound.src = 'sounds/clapping.mp3'
                sound.play()
                popUp()
                // cells.forEach(cell => {
                //     cell.removeEventListener('click', startGame)

                // })
            }
            else if (cells[0].classList.contains('O') && cells[3].classList.contains('O') && cells[6].classList.contains('O')) {
                winnerTag.innerHTML = 'Winner Is O'
                winStatus = true
                soundStatus = false
                sound.src = 'sounds/clapping.mp3'
                sound.play()
                popUp()
                // cells.forEach(cell => {
                //     cell.removeEventListener('click', startGame)

                // })
            }
            else if (cells[1].classList.contains('O') && cells[4].classList.contains('O') && cells[7].classList.contains('O')) {
                winnerTag.innerHTML = 'Winner Is O'
                winStatus = true
                soundStatus = false
                sound.src = 'sounds/clapping.mp3'
                sound.play()
                popUp()
                // cells.forEach(cell => {
                //     cell.removeEventListener('click', startGame)

                // })
            }
            else if (cells[2].classList.contains('O') && cells[5].classList.contains('O') && cells[8].classList.contains('O')) {
                winnerTag.innerHTML = 'Winner Is O'
                winStatus = true
                soundStatus = false
                sound.src = 'sounds/clapping.mp3'
                sound.play()
                popUp()
                // cells.forEach(cell => {
                //     cell.removeEventListener('click', startGame)

                // })
            }
            else if (cells[0].classList.contains('O') && cells[4].classList.contains('O') && cells[8].classList.contains('O')) {
                winnerTag.innerHTML = 'Winner Is O'
                winStatus = true
                soundStatus = false
                sound.src = 'sounds/clapping.mp3'
                sound.play()
                popUp()
                // cells.forEach(cell => {
                //     cell.removeEventListener('click', startGame)

                // })
            }
            else if (cells[2].classList.contains('O') && cells[4].classList.contains('O') && cells[6].classList.contains('O')) {
                winnerTag.innerHTML = 'Winner Is O'
                winStatus = true
                soundStatus = false
                sound.src = 'sounds/clapping.mp3'
                sound.play()
                popUp()
                // cells.forEach(cell => {
                //     cell.removeEventListener('click', startGame)

                // })
            }


            //if no winner
            else if (cells[0].classList.contains('X') != cells[1].classList.contains('X') != cells[2].classList.contains('X')) {
                winnerTag.innerHTML = 'Try Your Best'
               
            } else if (cells[3].classList.contains('X') != cells[4].classList.contains('X') != cells[5].classList.contains('X')) {
                winnerTag.innerHTML = 'No Winner Yet!'
                // sound.src = 'sounds/pink.mp3'
                // sound.play()
            } else if (cells[6].classList.contains('X') != cells[7].classList.contains('X') != cells[8].classList.contains('X')) {
                winnerTag.innerHTML = 'Try harder'
                // sound.src = 'sounds/pink.mp3'
                // sound.play()
            }
            else if (cells[0].classList.contains('X') != cells[3].classList.contains('X') != cells[6].classList.contains('X')) {
                winnerTag.innerHTML = 'Maybe You will lose'
                // sound.src = 'sounds/pink.mp3'
                // sound.play()
            }
            else if (cells[1].classList.contains('X') != cells[4].classList.contains('X') != cells[7].classList.contains('X')) {
                winnerTag.innerHTML = 'Are You Loosing?'
                // sound.src = 'sounds/pink.mp3'
                // sound.play()
            }
            else if (cells[2].classList.contains('X') != cells[5].classList.contains('X') != cells[8].classList.contains('X')) {
                winnerTag.innerHTML = ' its a tie!'
                // sound.src = 'sounds/pink.mp3'
                // sound.play()
            }
            else if (cells[0].classList.contains('X') != cells[4].classList.contains('X') != cells[8].classList.contains('X')) {
                winnerTag.innerHTML = 'You loosing'
                // sound.src = 'sounds/pink.mp3'
                // sound.play()
            }
            else if (cells[2].classList.contains('X') != cells[4].classList.contains('X') != cells[6].classList.contains('X')) {
                winnerTag.innerHTML = 'No Winner'
                // sound.src = 'sounds/pink.mp3'
                // sound.play()
            }

        }
    }


    function resetButton() {
        // if(winStatus === true){
            winStatus=false
        cells.forEach(cell => {
            cell.classList.remove('X')
            cell.classList.add('blank')
            cell.classList.remove('O')
            cell.classList.add('blank')
        })

        console.log('remove')
    }
    backgroundSound()
    reset.addEventListener('click', resetButton)
    creatGrid()
    cells.forEach(cell => {
        cell.addEventListener('click', startGame)
    })
    resetButton()

}
window.addEventListener('DOMContentLoaded', init)

