window.addEventListener('DOMContentLoaded', () => {

  const button = document.querySelector('#js-tooltip-what');
  const tooltip = document.querySelector('#popper-tooltip');

  const popperInstance = Popper.createPopper(button, tooltip, {
    placement: 'top-start',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8],
        },
      },
    ],
  });


  function show() {
    tooltip.setAttribute('data-show', '');
    popperInstance.update();
  }

  function hide() {
    tooltip.removeAttribute('data-show');
  }

  const showEvents = ['mouseenter', 'focus'];
  const hideEvents = ['mouseleave', 'blur'];

  showEvents.forEach((event) => {
    button.addEventListener(event, show);
  });

  hideEvents.forEach((event) => {
    button.addEventListener(event, hide);
  });

});