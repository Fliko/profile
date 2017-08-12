(function(){
      emailjs.init("user_xd8yicSzJBe2NOlH7KxqX");

})();
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    let headings = document.getElementsByTagName('h2');
    for(var i = 0; i < headings.length; i++) {
      headings[i].attr('data-shadow', headings[i].dataset.shadow);
    }
  }
};
let incomplete = 'I am very sorry, all fields need to be filled.';
let error = 'OH MY! Something went wrong on our end, feel free to send me an email directly at <b>baxter.flw@gmail.com</b>';
let success = 'Your message sent successfully!';

function check_empty() {
  let feedback = document.getElementById('msg');
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('msgbody').value;
  let form = document.getElementById('form');
  let submit = this;
  submit.setAttribute('disabled', 'disabled');

  if (name == "" || email == "" || message == "") {
    feedback.innerHTML = incomplete;
    feedback.style.color = 'red';
    submit.removeAttribute('disabled');
  } else {
    form.addEventListener('click', function(e) {
      e.preventDefault();
      emailjs.send('gmail', templateKey, {'from_name': name, 'from_mail': email, "to_name": 'Trace', 'message_html': message})
              .then(
                function(response) {
                  feedback.innerHTML = success;
                  feedback.style.color = 'green';
                  submit.removeAttribute('disabled');
                  form.reset();
                },
                function(error) {
                  feedback.innerHTML = error;
                  feedback.style.color = 'red';
                }
              );
    });
  }
}
document.getElementById('submit').addEventListener('click', check_empty);

document.getElementById('close').addEventListener('click', function() {
  document.getElementById('popupContact').classList.toggle('visible');
  document.getElementById('content').classList.toggle('blur');
});

document.getElementById('popup').addEventListener('click', function() {
  document.getElementById('popupContact').classList.toggle('visible');
  document.getElementById('content').classList.toggle('blur');
});
