console.log("Heyyyyyyyy");

//event handling part
function handleOnClick(){
    const salamerJobab = document.getElementById('handler-Status');
    salamerJobab.innerText = "Walaikumussalam";
}

//Make red button

function MakeRed(){
    document.body.style.backgroundColor="Red";
}


//Make Violet button

const violetButton = document.getElementById('make-violet');
violetButton.onclick = violet;

function violet(){
    document.body.style.backgroundColor="Violet";
}


//Make Blue button

const blueButton = document.getElementById('make-Blue');
blueButton.onclick = function blue(){
    document.body.style.backgroundColor="Blue";
    // document.body.h1.style.Color="White"; ''additional task : make the assalamualaikum white
}

//Make Green button

const greenButton = document.getElementById('make-Green');
greenButton.addEventListener('click' , green);
function green(){
    document.body.style.backgroundColor="Green";

}

//Make yellow button

const yellowButton = document.getElementById('make-Yellow');
yellowButton.addEventListener('click' , function yellow(){
    document.body.style.backgroundColor="Yellow";

});

// Make orange button

document.getElementById('make-Orange').addEventListener('click' , function orange(){
    document.body.style.backgroundColor="Orange";

});
