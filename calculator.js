const display = document.getElementById("display");

const buttons = document.querySelectorAll(".btn");

let input = "";
buttons.forEach((button) => {
    button.addEventListener("click", function () {
        
        let value = button.innerText;

        if(value === "C") {
            input = "";
        }
        else if(value === "<-"){
            input = input.slice(0,-1);
        }
        else if(value === "=") {
            input = input.replace("^", "**");
            input = eval(input);
        }
        else {
            input += value;
        }
        display.value = input;
        });
});

document.addEventListener("keydown",function(event) {
    if(event.key === "Enter") {
        document.getElementById("S").click();
    }

    else if (event.key === "Backspace" ) {

        document.getElementById("B").click();
        }
    else {
        buttons.forEach(function(button){
            if (button.innerText === event.key) {
                button.click();
            }
        });
    }
})

