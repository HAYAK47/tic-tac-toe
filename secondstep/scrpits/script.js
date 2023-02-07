function init(){
const grid = document.querySelector('.grid')
const playerCount = document.getElementById('#playerCount')
const computerCount= document.getElementById('#computerCount')
    const width = 3
    const gridCellCount = width * width
    const cells = []
    const winningCondition= [[0,1,2],[3,4,5],[6,7,8],[0,3,6],
[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

    let playerOne = true
    let playertwo = false
    

//cells index
    function creatGrid(){
        for(let i = 1; i <= gridCellCount ; i++){
            const cell = document.createElement('div')
            cell.setAttribute('id',`id${i}`)
            cell.setAttribute('class','blank')
            cells.push(cell)
            grid.appendChild(cell)
        }

       
    }
   
    //player click cell
    // let count = 0
    // if(count < 10){
    function playerX(event){
        if(event.target.classList.contains('blank')){
        // if(playerOne == true){
        console.log(event.target.id)
        event.target.classList.add('X')
        event.target.classList.remove('blank')
        playerOne = false
        playertwo = true
        //console.log(cells[0].className == 'X')
        
    // cells.forEach(cell => {
    //     cell.addEventListener('click', playerO)})
        // }
        console.log(event.target.classList)
        Winning()
    }  } 
//} 

    function playerO(event){
        if(event.target.classList.contains('blank')){
    //  if(playertwo == true){
        console.log(event.target.id)
        event.target.classList.add('O')
        event.target.classList.remove('blank')
        playertwo= false
        playerOne = true

    
    // } 

    // count ++
    // console.log(count)
    console.log(event.target.classList)
    Winning()
}}

function startGame(event){
    console.log(event.target)
    if(playerOne == true){
        playerX(event)
    }else{
        playerO(event)
    }
    // Winning()
}
 

    function Winning(){
       for(let i = 1; i<=cells.length; i++){
    // if(cells[0].classList.contains('X') === true;
    //     (cells[1].classList.contains('X') === true)
    //     cells[2].classList.contains('X') === true;{
        console.log("hi")
        console.log(cells[1].classList)
        if(cells[1].classList === cells[2].classList === cells[3].classList){
            console.log("the winner is")
            console.log(cells[1].classList)
        }           

                }      
       
      
    }

    creatGrid()
    cells.forEach(cell => {
        cell.addEventListener('click', startGame)
    })


   

}
window.addEventListener('DOMContentLoaded', init)



//computer play
//  function playerO(event){
//     if (playerX)    
//   } else {
//   playerX()}