let screenVal = '';
let screen = document.getElementById('input');
let buttons =document.querySelectorAll('button');
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;
        screen.val=buttonText;
        console.log('Button text is',buttonText);
        if(buttonText == 'x'){
            buttonText = '*';
            screen.value = screenVal;
        }
        if(buttonText == 'AC'){
            screenVal = "";
            buttonText = "";
            screen.value = screenVal;
        }
        if(buttonText == '='){
            screen.value = eval(screenVal);
        }
        else{
            screenVal += buttonText;
            screen.value = screenVal;
        }
    })
}