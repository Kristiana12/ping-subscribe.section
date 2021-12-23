const email = document.getElementById('email');
const btnSubmit = document.getElementById('btn-submit');
const form = document.getElementById('form');

//prevent form from submitting
form.addEventListener('submit', (e) => {
  e.preventDefault();
});

//Check if email is valid
const isEmail = (email) =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );

btnSubmit.addEventListener('click', (e) => {
  const form = document.querySelector('.form');
  const sectionForm = document.querySelector('.section-form');
  const subscribeSuccesMessage = document.querySelector(
    '.email-verification-success-message'
  );

  const userEmailValue = email.value;
  if (userEmailValue === '') {
    form.classList.add('error');
    email.setAttribute('placeholder', 'example@email.com');
    email.setAttribute('aria-invalid', 'true');
  } else if (!isEmail(userEmailValue)) {
    form.classList.add('error');
    email.value = '';
    email.setAttribute('placeholder', 'example@email.com');
    email.setAttribute('aria-invalid', 'spelling');
  } else {
    sectionForm.style.display = 'none';
    subscribeSuccesMessage.style.display = 'block';
    email.setAttribute('aria-invalid', 'false');
  }
});
