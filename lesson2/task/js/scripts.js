window.addEventListener('load', function () {
  const btn = document.querySelector('.button');
  const fields = document.querySelectorAll('.check');

  console.log(btn);
  btn.addEventListener('click', validateForm);

  function validateForm() {
    console.log('Hi');
    fields.forEach(field => {
      field.classList.add('err');
    })
  }

  console.log('Hello');
})