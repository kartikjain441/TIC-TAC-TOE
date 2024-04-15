let boxes= document.querySelectorAll(".box");
let resetbtn= document.querySelector("#rb");
let newgamebtn= document.querySelector("#newbtn");
let msgcontainer = document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let x=prompt("Player 1 Name");
let y=prompt("Player 2 Name");

let turnO = true;
const winpatterns = [ 
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
const resetGame= ()=>
{
    turnO= true;
    enableBoxes();
    msgcontainer.classList.add("hide");

}

boxes.forEach((box)=>
{
    box.addEventListener("click",()=>
    {
        
       if(turnO)
       {
        box.innerText=x;
        turnO=false;
       }
       else{
        box.innerText=y;
        turnO=true;

       }
       box.disabled = true;
       checkwinner();
    })                        
})
const disableBoxes=()=>
{
for(let box of boxes)
{
    box.disabled= true;
}
}

const enableBoxes=()=>
{
for(let box of boxes)
{
    box.disabled= false;
    box.innerText="";
}
}
const showWinner= (winner)=>
{
  msg.innerText= `Congratulation, Winner is ${winner} `;
  msgcontainer.classList.remove("hide");
  disableBoxes();
}

const checkwinner=()=>
{
    for(let pattern of winpatterns)
    {
        let pos1Val=  boxes[pattern[0]].innerText;
        let pos2Val=  boxes[pattern[1]].innerText;
        let pos3Val=  boxes[pattern[2]].innerText;
     if(pos1Val!="" && pos2Val!="" && pos3Val!="")
     {
        if(pos1Val===pos2Val && pos2Val===pos3Val)
        {
          
           showWinner(pos1Val);

        }
     }
    }
};


newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
