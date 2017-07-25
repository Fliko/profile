document.selectElementById('hamburger').addEventListener('click', function() {
  document.selectElementById('menu').classList.toggle('show');
  this.classList.toggle('show');
});
window.addEventListener('scroll', function(e) {
  let distance = window.scrollY;
  let layers = document.querySelectorAll('[data-type="parallax"]');

  for(let i = 0; i < layers.length; i++) {
    let depth = layers[i].getAttribute('data-depth');
    let move = (-distance * depth);

    translate = 'translate3d(0, ' + move + 'px, 0)';
    layers[i].style['-webkit-transform'] = translate;
    layers[i].style['-moz-transform'] = translate;
    layers[i].style['-ms-transform'] = translate;
    layers[i].style['-o-transform'] = translate;
    layers[i].style.transform = translate;
  }
});
