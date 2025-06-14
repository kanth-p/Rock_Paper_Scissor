let userscore=0;
let comscore=0;

let buttons=document.querySelectorAll("#rock,#paper,#scissor");

let msg=document.querySelector('#msg');
const drawgame=()=>{
    msg.innerText="It's a Draw!";
    msg.style.backgroundColor="black";
}
const gencomchoice=()=>{
    let options=["rock","paper","scissor"];
    let randomidx=Math.floor(Math.random()*3);
    return options[randomidx];
}
let userScore=document.querySelector("#u");
let compScore=document.querySelector("#com");

const showwinmsg=(userchoice,compchoice)=>{
    userscore++;
    userScore.innerText=userscore;
    msg.innerText=`You Won! ${userchoice} beat the ${compchoice}`;
    msg.style.backgroundColor="green";


}

const showlosemsg=(userchoice,compchoice)=>{
    comscore++;
    compScore.innerText=comscore;
    msg.innerText=`You lost. ${compchoice} beat ${userchoice}`;
    msg.style.backgroundColor="red";
}
const playgame=(userchoice)=>{
    console.log("user choice",userchoice);

    compchoice=gencomchoice();
    console.log("Com choice ", compchoice);

    if(userchoice==compchoice){
        console.log("It's a draw");
        drawgame();
    }
    else if(userchoice=="rock"){
        if(compchoice=="paper"){
            showlosemsg(userchoice,compchoice);
        }
        else{
            showwinmsg(userchoice,compchoice);
        }
    }
    else if(userchoice=="paper"){
        if(compchoice=="rock"){
            showwinmsg(userchoice,compchoice);
        }
        else{
            showlosemsg(userchoice,compchoice);
        }
    }
    else{
        if(compchoice=="paper"){
            showwinmsg(userchoice,compchoice);
        }
        else{
            showlosemsg(userchoice,compchoice);
        }
    }

}
buttons.forEach((button)=>{
    button.addEventListener('click',function(){
        const choiceid=button.getAttribute("id");
        userchoice=choiceid;
        playgame(userchoice);
    })
})

let rstbtn=document.querySelector("#reset");
rstbtn.addEventListener('click',function(){
    msg.innerText="Play Your Move";
    msg.style.backgroundColor="black";
    userscore=0;
    comscore=0;
    userScore.innerText=0;
    compScore.innerText=0;
})