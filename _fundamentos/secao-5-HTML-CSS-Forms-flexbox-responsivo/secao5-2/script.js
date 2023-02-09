const submitBtn = document.getElementById('submit-btn');
const agreement = document.getElementById('agreement');

submitBtn.disabled = true;

agreement.addEventListener('click', () => {
  submitBtn.disabled = !agreement.checked;
});

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
});
