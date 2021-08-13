function Plus() {
    var Number1 = document.querySelector('.NumberOne').value;
    var Number2 = document.querySelector('.NumberTwo').value;
    const result = document.querySelector('.result');

    Number1 = parseFloat(Number1)

    Number2 = parseFloat(Number2)

    var res = Number1 + Number2
    
    result.innerHTML = res
}




function Minus() {
    var Number1 = document.querySelector('.NumberOne').value;
    var Number2 = document.querySelector('.NumberTwo').value;
    const result = document.querySelector('.result');

    Number1 = parseFloat(Number1)

    Number2 = parseFloat(Number2)

    var res = Number1 - Number2

    result.innerHTML = res
}





function Times() {
    var Number1 = document.querySelector('.NumberOne').value;
    var Number2 = document.querySelector('.NumberTwo').value;
    const result = document.querySelector('.result');

    Number1 = parseFloat(Number1)

    Number2 = parseFloat(Number2)

    var res = Number1 * Number2

    result.innerHTML = res
}



function Delete() {
    var Number1 = document.querySelector('.NumberOne').value;
    var Number2 = document.querySelector('.NumberTwo').value;
    const result = document.querySelector('.result');

    Number1 = parseFloat(Number1)

    Number2 = parseFloat(Number2)

    var res = Number1 / Number2

    result.innerHTML = res
}










function Clear() {
    var Number1 = document.querySelector('.NumberOne');
    var Number2 = document.querySelector('.NumberTwo');
    const result = document.querySelector('.result');
    Number1.value = ' ';
    Number2.value = ' ';
    result.innerHTML = ' ';
}

