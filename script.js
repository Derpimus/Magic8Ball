const ball = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answerArr = ['Tak!', 'Nie', 'Może', 'Ciężko powiedzieć', 'Nie chcesz znać odpowiedzi na to pytanie...'];


const checkInput = () => {

     if (input.value !== '' && input.value.slice(-1) === '?') {
          ball.classList.add('shake-animation');
          setTimeout(() => {
               ball.classList.remove('shake-animation')
          }, 1000);
          error.textContent = '';
          generateAnswer();

     } else if (input.value !== '' && input.value.slice(-1) !== '?') {
          error.textContent = 'brakuje "?" na końcu pytania';
          answer.textContent = ''
     } else {
          error.textContent = 'Musisz zadac jakies pytanie';
          answer.textContent = ''
     }

}
const generateAnswer = () => {
     const number = Math.floor(Math.random() * 5);
     answer.innerHTML = `<span>Odpowiedź:</span> ${answerArr[number]}`
}


ball.addEventListener('click', checkInput)