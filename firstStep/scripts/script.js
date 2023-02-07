function init(){
//array cell
const grid = document.querySelectorAll('.grid')
const restart = document.querySelector('.reset')
// const btnOne= document.querySelector('#btn-one')
// const btnTwo= document.querySelector('#btn-two')
// const btnThree= document.querySelector('#btn-three')
// const btnFour= document.querySelector('#btn-four')
// const btnFive= document.querySelector('#btn-five')
// const btnSix= document.querySelector('#btn-six')
// const btnSeven= document.querySelector('#btn-seven')
// const btnEight= document.querySelector('#btn-eight')
// const btnNine= document.querySelector('#btn-nine')
const div = document.querySelectorAll('.sqr')
const winning = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],
[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

// let cell = []
//const width = 3
//const gridCellCount = width * width
playerMove=false
const playerChoice = 'X'
const computerChoice = 'O'
let playerPosition = 0
let computerPosition = 0 
let score = 0

//esraa
const grid = document.querySelector('.grid')
    const width = 3
    const gridCellCount = width * width
    const cells = []



//esraa

    function creatGrid(){
        for(let i = 1; i <= gridCellCount ; i++){
            const cell = document.createElement('div')
            cell.setAttribute('id',`e${i}`)
            cells.push(cell)
            grid.appendChild(cell)
        }
    }







//index for each cell
// function cellCount(){
//  for(let i = 0; i <  gridCellCount ; i++){
//   const cell = document.createElement('div')
//  cells.setAttribute('id',`e${i}`)
//    cell.push(cells)
// grid.appendChaid(cells)
  
//   }
// }

//cells clickable 

grid.forEach(cell => {
  cell.addEventListener('click', handleclick)
})
function handleclick(e){

  console.log('clicked')
}
//reset buttun 
restart.forEach(buttun => {
  buttun.addEventListener('click', restartClick)
})
function restartClick(e){
  console.log('clicked')
}

function startGame(){
  const index = this.getAttribute('index')
  if(cell[index] != "" || !playerMove){
    return
  }


}

//click div
// function clickCell(event){
//     console.log('clicked!')
//     // div.classList.toggle('pulse')
// }
// btnOne.addEventListener('click', clickCell)
// btnTwo.addEventListener('click', clickCell)
// btnThree.addEventListener('click', clickCell)
// btnFour.addEventListener('click', clickCell)
// btnFive.addEventListener('click', clickCell)
// btnSix.addEventListener('click', clickCell)
// btnSeven.addEventListener('click', clickCell)
// btnEight.addEventListener('click', clickCell)
// btnNine.addEventListener('click', clickCell)

}
window.addEventListener('DOMContentLoaded', init)
