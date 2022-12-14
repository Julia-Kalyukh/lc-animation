document.addEventListener('DOMContentLoaded', () => {
  function addProgressSR(circle, ratio) {
    let progressSR = document.querySelector(circle);
  
    let strokeDashOffsetValue = 100 - ratio;
    progressSR.style.strokeDashoffset = strokeDashOffsetValue;
  
  
    progressSR.animate([
      { strokeDashoffset: 100 },
      { strokeDashoffset: strokeDashOffsetValue}], {
      duration: 1500,
      iterations: 1,
      cubicBezier: '0.65, 0.05, 0.36, 1'
    })
  }
  
  addProgressSR('.js-sr-progress--top', 15);
  addProgressSR('.js-sr-progress--pro', 90);
  addProgressSR('.js-sr-progress--fresh', 75);
  addProgressSR('.js-sr-progress--portfolio', 30);
  addProgressSR('.js-sr-progress--profile', 50);
});