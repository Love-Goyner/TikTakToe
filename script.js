let boxes = document.querySelectorAll(".btn");
let resbtn = document.querySelector(".resertGame");
let strbtn = document.querySelector(".startGame");
let winnDesc = document.querySelector(".winnerDesc");
let count = 0;
let check = false;

let turnO = true;

let winning = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

const resetGame = () =>{
    turnO = true;
    enableBox();
    strbtn.classList.add("hide");
    winnDesc.classList.add("hide");
    count=0;
    check = false;
}


boxes.forEach((box)=>{

    box.addEventListener("click", ()=>{

        if(turnO == true){
            box.innerText = "O";
            box.style.color = "cyan"
            turnO = false
        }else
        {
            box.innerText = "X";
            box.style.color = "aquamarine"
            turnO = true;
        }
        box.disabled = true;
        count++;

        checkWinner();
        if(count == 9 && check == false){
            showDraw();
        }
        
    })
})

const disableBox = () =>{
    for(box of boxes){
        box.disabled = true;
    }
}

const enableBox = () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
    check = true;
    strbtn.classList.remove("hide");
    winnDesc.innerText = `Congrats to the winner '${winner}'`
    winnDesc.classList.remove("hide");
    disableBox();
}

const showDraw = () =>{
    winnDesc.classList.remove("hide");
    winnDesc.innerText = "The Match is drawn, Play Again";
    strbtn.classList.remove("hide");
    disableBox();
}

const checkWinner = () =>{
    for(let pattern of winning){
        let post1 = boxes[pattern[0]].innerText;
        let post2 = boxes[pattern[1]].innerText;
        let post3 = boxes[pattern[2]].innerText;
        
        if(post1 != "" && post2 != "" && post3 != "" ){
            if(post1=== post2 && post2 === post3){
                showWinner(post1);
            }
        }
    }
}

// resbtn.addEventListener("click", ()=>{
//     resetGame();
// })

resbtn.addEventListener("click", resetGame);

strbtn.addEventListener("click", ()=>{
    resetGame();
})