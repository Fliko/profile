(function(){
      emailjs.init("user_xd8yicSzJBe2NOlH7KxqX");
})();

function check_empty() {
  if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
    document.getElementById('errMsg').classList.toggle('visible');
  } else {
    const name = document.getElementById('name').text;
    const email = document.getElementById('email').text;
    const message = document.getElementById('msg').text;

    document.getElementById('form').submit(function() {
      emailjs.send('gmail', 'template_Q95Ds4tu', {'from_name': name, 'from_mail': email, "to_name": 'Trace', 'message_html': message})
              .then(
                function(response) {
                  document.getElementById('pass').classList.toggle('visible');
                },
                function(error) {
                  document.getElementById('error').classList.toggle('visible');
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
