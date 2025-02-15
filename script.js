$(document).ready(function () {
  // Bind click event to the 'Open' button to rotate message container
  $('#button_open_envelope').click(function () {
    $('.top').addClass('open'); // Open the top part of the envelope
    $('.message').addClass('vertically-oriented-pull'); // Pull the message

    // Add event listener for 'animationend' event on the message container
    $('.message').on('animationend', function() {
      // Re-render the image after the animation completes
      const imageElement = $('.message img')[0];
      imageElement.dispatchEvent(new Event('transitionend')); // Trigger the re-rendering
    });
  });

  const modal = document.getElementById('myModal');
  const btn = document.getElementById('myBtn');
  const span = document.getElementsByClassName('close')[0];

  btn.onclick = function () {
    modal.style.display = 'block';
  };

  span.onclick = function () {
    modal.style.display = 'none';
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
});