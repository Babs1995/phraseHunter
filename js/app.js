const startBtn = document.getElementById('btn__reset');
const keyBtns = document.querySelectorAll('.key');
let game;

startBtn.addEventListener("click", (e) => {
    game = new Game();
    game.startGame(); 
});
//console.log(keyBtns);
// keyBtns.forEach(button => {
//     console.log(keyBtns)
//     button.addEventListener('click', function() {
//     game.handleInteraction(this)});
// });
keyBtns.forEach(button =>{
    button.addEventListener('click', (e) => {
        //console.log (e.target.tagName)
        var isButton =e.target.tagName;
        //if (isButton === "BUTTON") {
            //var text = e.target.innerText
            //console.log(text)
            game.handleInteraction(e.target)

        //}
    });
});
