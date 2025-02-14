$(document).ready(function() {
    // Bind click event to the 'Open' button to rotate message container

    $('#button_open_envelope').click(function() {
      
      $('.top').addClass('open');  // Open the top part of the envelope
      $('.message').addClass('vertically-oriented-pull'); // Pull the message
    });
    
    
    // Existing modal code is unrelated, ensure it works as intended
    const modal = document.getElementById('myModal');
    const btn = document.getElementById('myBtn');
    const span = document.getElementsByClassName('close')[0];
  
    btn.onclick = function() {
      modal.style.display = 'block';
    }
  
    span.onclick = function() {
      modal.style.display = 'none';
    }
  
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    }
  });