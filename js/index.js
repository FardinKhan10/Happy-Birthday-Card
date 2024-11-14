(function () {
  // Helper function to get element by ID
  function $(id) {
    return document.getElementById(id);
  }

  // Cache elements for efficiency
  var card = $('card');
  var openButton = $('open');
  var closeButton = $('close');
  var timer = null;

  // Function to open card with animations
  function openCard() {
    card.setAttribute('class', 'open-half');
    if (timer) clearTimeout(timer); // Clear any existing timer

    timer = setTimeout(function () {
      card.setAttribute('class', 'open-fully');
      timer = null; // Reset timer
    }, 1000); // Transition duration
  }

  // Function to close card with animations
  function closeCard() {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimeout(timer); // Clear any existing timer

    timer = setTimeout(function () {
      card.setAttribute('class', ''); // Reset to initial class
      timer = null; // Reset timer
    }, 1000); // Transition duration
  }

  // Event listeners for open and close buttons
  openButton.addEventListener('click', openCard);
  closeButton.addEventListener('click', closeCard);

})();
