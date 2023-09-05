// แสดงโจทย์แบบซุ่ม
function generateProblem() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    // แสดงผล
    document.getElementById('first-number').textContent = num1;
    document.getElementById('operator').textContent = operator;
    document.getElementById('second-number').textContent = num2;
    
    // ลบคำตอบ
    document.getElementById('answer').textContent = '';
}

// แสดงคำตอบ
function revealAnswer() {
    const num1 = parseInt(document.getElementById('first-number').textContent);
    const num2 = parseInt(document.getElementById('second-number').textContent);
    const operator = document.getElementById('operator').textContent;
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2 ;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                result = 'Undefined';
            } else {
                result = num1 / num2;
            }
            break;
        default:
            result = '';
    }

    document.getElementById('answer').textContent = " = " + result;
}
//แสดงผลซุ่มย่อย
function randomnum1(){
    const num1 = Math.floor(Math.random() * 10) + 1;
    document.getElementById('first-number').textContent = num1;
    document.getElementById('answer').textContent = '';
}
function randomnum2(){
    const num2 = Math.floor(Math.random() * 10) + 1;
    document.getElementById('second-number').textContent = num2;
    document.getElementById('answer').textContent = '';
}
function randommathsymbols(){
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    document.getElementById('operator').textContent = operator;
    document.getElementById('answer').textContent = '';
}
function randomnum1_2(){
    randomnum1();
    randomnum2();
    document.getElementById('answer').textContent = '';
}
function change_negative(){
    const operator = '-';
    document.getElementById('operator').textContent = operator;
    document.getElementById('answer').textContent = '';
}
function change_positive(){
    const operator = '+';
    document.getElementById('operator').textContent = operator;
    document.getElementById('answer').textContent = '';
}
function change_multiplication(){
    const operator = '*';
    document.getElementById('operator').textContent = operator;
    document.getElementById('answer').textContent = '';
}
function change_divide(){
    const operator = '/';
    document.getElementById('operator').textContent = operator;
    document.getElementById('answer').textContent = '';
}
// เหตุการณ์
document.getElementById('generate-problem').addEventListener('click', generateProblem);
document.getElementById('reveal-answer').addEventListener('click', revealAnswer);
document.getElementById('random-num1').addEventListener('click', randomnum1);
document.getElementById('random-num2').addEventListener('click', randomnum2);
document.getElementById('random-math-symbols').addEventListener('click', randommathsymbols);
document.getElementById('random-num1-2').addEventListener('click', randomnum1_2);
document.getElementById('change-negative').addEventListener('click', change_negative);
document.getElementById('change-positive').addEventListener('click', change_positive);
document.getElementById('change-multiplication').addEventListener('click', change_multiplication);
document.getElementById('change-divide').addEventListener('click', change_divide);
// สั่งแสดงผล
generateProblem();