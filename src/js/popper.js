window.addEventListener('DOMContentLoaded', () => {

  function onTooltip(btn, tooltipItem, offsetValue) {
    const button = document.querySelector(btn);
    const tooltip = document.querySelector(tooltipItem);
  
    const popperInstance = Popper.createPopper(button, tooltip, {
      placement: 'top',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, offsetValue],
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
  }

  onTooltip('#js-tooltip-btn-what', '#js-tooltip-what', 8);
  onTooltip('#js-tooltip-btn-top', '#js-tooltip-top', -220);
  onTooltip('#js-tooltip-btn-pro', '#js-tooltip-pro', -192);
  onTooltip('#js-tooltip-btn-fresh', '#js-tooltip-fresh', -162);
  onTooltip('#js-tooltip-btn-portfolio', '#js-tooltip-portfolio', -132);
  onTooltip('#js-tooltip-btn-profile', '#js-tooltip-profile', -102);

});