const faqQues = document.querySelectorAll('.faq-question');
const faqAnswer = document.querySelectorAll('.faq-answer');
const plus = document.querySelectorAll('.plus-img');

faqQues.forEach((faqQuestion, index) => {
  faqQuestion.addEventListener('click', () => {
    faqAnswer.forEach((answer, i) => {
      if (i === index) {
        answer.classList.add('active');
        plus[i].src = './assets/images/icon-minus.svg';
      } else {
        answer.classList.remove('active');
        plus[i].src = './assets/images/icon-plus.svg';
      }
    });
  });
});
