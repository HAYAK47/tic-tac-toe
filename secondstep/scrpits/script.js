function init(){
const grid = document.querySelector('.grid')
const playerCount = document.getElementById('#playerCount')
const computerCount= document.getElementById('#computerCount')
    const width = 3
    const gridCellCount = width * width
    const cells = []
    const winningCondition= [[0,1,2],[3,4,5],[6,7,8],[0,3,6],
[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

    let playerTurn = true
    


//cells index
    function creatGrid(){
        for(let i = 1; i <= gridCellCount ; i++){
            const cell = document.createElement('div')
            cell.setAttribute('id',`id${i}`)
            cells.push(cell)
            grid.appendChild(cell)
        }
       
    }
    //player click cell
    function playerX(event){
        if(playerTurn == true){
        console.log(event.target.id)
        event.target.classList.add('X')
        playerTurn = false
    }else {
        console.log(event.target.id)
        event.target.classList.add('O')
        playerTurn = true
    } }

    function Winning(){
       
        if('X' == div[0] && 'X' == div[1] && 'X' == div[2] )
        console.log('playerX win')
    }





//computer play
//  function playerO(event){
//     if (playerX)    
//   } else {
//   playerX()}

    creatGrid()
    Winning()
    cells.forEach(cell => {
        cell.addEventListener('click', playerX)
        // cell.addEventListener('click', playerO)
    })

}
window.addEventListener('DOMContentLoaded', init)