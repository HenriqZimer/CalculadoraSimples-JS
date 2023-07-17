// function outcome() {

//     let num1 = Number(document.getElementById('num-one').value)
//     let num2 = Number(document.getElementById('num-two').value)
//     let total = 0

//     if(document.getElementById('box1').checked){
//        total = num1 + num2 
//     }
//     else if(document.getElementById('box2').checked){
//        total = num1 - num2 
//     }
//     else if(document.getElementById('box3').checked){
//        total = num1 * num2 
//     }
//     else {
//        total = num1 / num2 
//     }
//     document.getElementById('resultArea').innerHTML = 'Result:' + String(total)
// }

function outcome() {
    let num1 = Number(document.getElementById('num-one').value);
    let num2 = Number(document.getElementById('num-two').value);
    let total = 0;

    switch (true) {
        case document.getElementById('box1').checked:
            total = num1 + num2;
            break;
        case document.getElementById('box2').checked:
            total = num1 - num2;
            break;
        case document.getElementById('box3').checked:
            total = num1 * num2;
            break;
        default:
            total = num1 / num2;
    }

    document.getElementById('resultArea').innerHTML = 'Result:' + String(total);
}
