let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';

for (item of buttons) {
    let divide = 0;
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else if (buttonText == '/'){
            if(divide==0){
                screenValue += buttonText;
                screen.value = screenValue;
                divide = 1;
            }
            else{
                
            }
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }


    })
}

