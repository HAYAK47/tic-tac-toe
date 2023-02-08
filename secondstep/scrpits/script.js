function init(){
const grid = document.querySelector('.grid')
const winnerTag = document.querySelector('#winning')
const reset = document.querySelector('.reset')

    const width = 3
    const gridCellCount = width * width
    const cells = []
    let playerOne = true
    let playertwo = false
    let resetCount = 0
    let winStatus = false
    

//cells index, add id push them
    function creatGrid(){
        for(let i = 1; i <= gridCellCount ; i++){
            const cell = document.createElement('div')
            cell.setAttribute('id',`id${i}`)
            cell.setAttribute('class','blank')
            cells.push(cell)
            grid.appendChild(cell)
        } }
   

        function handleMouseEnter(event){
            event.target.style.width = '300px'
            console.log('mouse is entering', event.target)
            event.target.style.backgroundColor= "red"
          }
          cells.forEach(cell => {
            cell.addEventListener('mouseEnter', handleMouseEnter)
        })
      

    //player click cell
    function playerX(event){
        if(event.target.classList.contains('blank')){
        // if(playerOne == true){
        // console.log(event.target.id)
        event.target.classList.add('X')
        event.target.classList.remove('blank')
        playerOne = false
        playertwo = true

        Winning()
    }}

    function playerO(event){
        if(event.target.classList.contains('blank')){
    //  if(playertwo == true){
        // console.log(event.target.id)
        event.target.classList.add('O')
        event.target.classList.remove('blank')
        playertwo= false
        playerOne = true
      
    Winning()
}}

// 

function startGame(event){
    if(resetCount<  9 ){
    // console.log(event.target)
    if(playerOne == true){
        playerX(event)
    }else{
        playerO(event)
    }
  resetCount++
 console.log(resetCount)
    // Winning()
}}


    function Winning(){
       for(let i = 0; i<=cells.length; i++){
    //player X win
        if(cells[0].classList.contains('X') && cells[1].classList.contains('X') && cells[2].classList.contains('X')){
            winnerTag.innerHTML='Winner Is X'
            winStatus = true}
        else if(cells[3].classList.contains('X') && cells[4].classList.contains('X') && cells[5].classList.contains('X')){
            winnerTag.innerHTML='Winner Is X'
            winStatus = true}
        else if(cells[6].classList.contains('X') && cells[7].classList.contains('X') && cells[8].classList.contains('X')){
            winnerTag.innerHTML='Winner Is X'
            winStatus = true}
       else if(cells[0].classList.contains('X') && cells[3].classList.contains('X') && cells[6].classList.contains('X')){
        winnerTag.innerHTML='Winner Is X'
        winStatus = true}
        else if(cells[1].classList.contains('X') && cells[4].classList.contains('X') && cells[7].classList.contains('X')){
            winnerTag.innerHTML='Winner Is X'
            winStatus = true}
        else if(cells[2].classList.contains('X') && cells[5].classList.contains('X') && cells[8].classList.contains('X')){
            winnerTag.innerHTML='Winner Is X'
            winStatus = true}
        else if(cells[0].classList.contains('X') && cells[4].classList.contains('X') && cells[8].classList.contains('X')){
            winnerTag.innerHTML='Winner Is X'
            winStatus = true}
        else if(cells[2].classList.contains('X') && cells[4].classList.contains('X') && cells[6].classList.contains('X')){
                                    winnerTag.innerHTML='Winner Is X'
                                    winStatus = true}
        


    /// player O win
     else if(cells[0].classList.contains('O') && cells[1].classList.contains('O') && cells[2].classList.contains('O')){
        winnerTag.innerHTML='Winner Is O'
        winStatus = true}
    else if(cells[3].classList.contains('O') && cells[4].classList.contains('O') && cells[5].classList.contains('O')){
        winnerTag.innerHTML='Winner Is O'
        winStatus = true}
    else if(cells[6].classList.contains('O') && cells[7].classList.contains('O') && cells[8].classList.contains('O')){
        winnerTag.innerHTML='Winner Is O'
        winStatus = true}
   else if(cells[0].classList.contains('O') && cells[3].classList.contains('O') && cells[6].classList.contains('O')){
    winnerTag.innerHTML='Winner Is O'
    winStatus = true}
    else if(cells[1].classList.contains('O') && cells[4].classList.contains('O') && cells[7].classList.contains('O')){
        winnerTag.innerHTML='Winner Is O'
        winStatus = true}
    else if(cells[2].classList.contains('O') && cells[5].classList.contains('O') && cells[8].classList.contains('O')){
        winnerTag.innerHTML='Winner Is O'
        winStatus = true}
    else if(cells[0].classList.contains('O') && cells[4].classList.contains('O') && cells[8].classList.contains('O')){
        winnerTag.innerHTML='Winner Is O'
        winStatus = true}
    else if(cells[2].classList.contains('O') && cells[4].classList.contains('O') && cells[6].classList.contains('O')){
        winnerTag.innerHTML='Winner Is O'
        winStatus = true}
      
        
    //if no winner
//     else if(cells[0].classList.contains('') && cells[1].classList.contains('') && cells[2].classList.contains('X')){
//         winnerTag.innerHTML='No Winner'
//     }else if(cells[3].classList.contains('X') && cells[4].classList.contains('X') && cells[5].classList.contains('X')){
//         winnerTag.innerHTML='No Winner'
//     }else if(cells[6].classList.contains('X') && cells[7].classList.contains('X') && cells[8].classList.contains('X')){
//         winnerTag.innerHTML='No Winner'}
//    else if(cells[0].classList.contains('X') && cells[3].classList.contains('X') && cells[6].classList.contains('X')){
//     winnerTag.innerHTML='No Winner'}
//     else if(cells[1].classList.contains('X') && cells[4].classList.contains('X') && cells[7].classList.contains('X')){
//         winnerTag.innerHTML='No Winner'}
//     else if(cells[2].classList.contains('X') && cells[5].classList.contains('X') && cells[8].classList.contains('X')){
//         winnerTag.innerHTML='No Winner'}
//     else if(cells[0].classList.contains('X') && cells[4].classList.contains('X') && cells[8].classList.contains('X')){
//         winnerTag.innerHTML='No Winner'}
//     else if(cells[2].classList.contains('X') && cells[4].classList.contains('X') && cells[6].classList.contains('X')){
//                                 winnerTag.innerHTML='No Winner'}

}}

function resetButton(){
    // if(winStatus === true){
    cells.forEach(cell => {
        cell.classList.remove('X')
        cell.classList.add('blank')
        cell.classList.remove('O')
        cell.classList.add('blank')
    })
    
    console.log('remove')
}  

reset.addEventListener('click', resetButton)


    creatGrid()
 
    cells.forEach(cell => {
        cell.addEventListener('click', startGame)
    })
    resetButton()


}
window.addEventListener('DOMContentLoaded', init)

