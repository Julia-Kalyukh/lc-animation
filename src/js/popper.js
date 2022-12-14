window.addEventListener('DOMContentLoaded', () => {

  function onTooltip(btn, tooltipItem) {
    const button = document.querySelector(btn);
    const tooltip = document.querySelector(tooltipItem);
  
    const popperInstance = Popper.createPopper(button, tooltip, {
      placement: 'top',
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
  }

  onTooltip('#js-tooltip-btn-what', '#js-tooltip-what');
  onTooltip('#js-tooltip-btn-top', '#js-tooltip-top');
  onTooltip('#js-tooltip-btn-pro', '#js-tooltip-pro'); onTooltip('#js-tooltip-btn-fresh', '#js-tooltip-fresh'); onTooltip('#js-tooltip-btn-portfolio', '#js-tooltip-portfolio');
  onTooltip('#js-tooltip-btn-profile', '#js-tooltip-profile');

});