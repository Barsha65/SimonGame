let gameseq=[];
let userseq=[];

let started=false;
let clrs=['green-btn','blue-btn','grey-btn','dusky-btn'];
let level=0;
h2=document.querySelector("h2");

document.addEventListener('keypress',function(){
    if(started==false){
    console.log("Game started");
    started=true;
    levelUp();
}
});

function btnFlash(rdmBtn){
    rdmBtn.classList.add("flash");
    setTimeout(function(){
        rdmBtn.classList.remove("flash");
    },250);
}
function levelUp(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let rdmNo=Math.floor(Math.random()*4);
    let rdmClr=clrs[rdmNo];
    let rdmBtn=document.querySelector(`.${rdmClr}`);
    
    gameseq.push(rdmClr);
    console.log(`game SEQ:${gameseq}`);


    btnFlash(rdmBtn);
}

function btnPress(){
    // idx=level-1;
    let btn=this;
    btnFlash(btn);

    userClr=btn.getAttribute("id");
    userseq.push(userClr);

    checkRes(userseq.length-1);
    
    console.log(`user SEQ:${userseq}`);
}
let allbtns=document.querySelectorAll(".btn");
for (btns of allbtns){
    btns.addEventListener("click",btnPress)
}

function checkRes(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerHTML=`Game Over. Your score is <b>${level}<b><br>Try again <br>`;
        document.querySelector('body').style.background = 'red';
        setTimeout(function(){
            document.querySelector('body').style.background = ' #b9d4f1';
        },250);
        gameseq=[];
        userseq=[];
        started=false;
        level=0;
    }
}