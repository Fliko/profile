(function(){
      emailjs.init("user_xd8yicSzJBe2NOlH7KxqX");
})();
let incomplete = 'I am very sorry, all fields need to be filled.';
let error = 'OH MY! Something went wrong on our end, feel free to send me an email directly at <b>baxter.flw@gmail.com</b>';
let success = 'Your message sent successfully!';

function check_empty() {
  let feedback = document.getElementById('msg');
  let submit = this;
  submit.setAttribute('disabled', 'disabled');
  if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
    feedback.innerHTML = incomplete;
    feedback.style.color = 'red';
    submit.removeAttribute('disabled');
  } else {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('msgbody').value;

    document.getElementById('form').addEventListener('click', function(e) {
      e.preventDefault();
      emailjs.send('gmail', templateKey, {'from_name': name, 'from_mail': email, "to_name": 'Trace', 'message_html': message})
              .then(
                function(response) {
                  feedback.innerHTML = success;
                  feedback.style.color = 'green';
                  submit.removeAttribute('disabled');
                  document.getElementById('form').reset();
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
