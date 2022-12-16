document.addEventListener('DOMContentLoaded', () => {
  function addProgressSR(circle, ratio) {
    let progressSR = document.querySelector(circle);
  
    let strokeDashOffsetValue = 100 - ratio;
    progressSR.style.cssText = `stroke-dashoffset: ${strokeDashOffsetValue}; --strokeDashOffsetValue: ${strokeDashOffsetValue}`;
  }
  
  addProgressSR('.js-sr-progress--top', 15);
  addProgressSR('.js-sr-progress--pro', 90);
  addProgressSR('.js-sr-progress--fresh', 75);
  addProgressSR('.js-sr-progress--portfolio', 30);
  addProgressSR('.js-sr-progress--profile', 50);

  function onProgressMemory() {
    let p = document.querySelector('progress'); 
    let valWidth = 40;
    p.setAttribute('value', valWidth); 
  }

  onProgressMemory();

  function outNum(num, elem) {

    const time = 2000;
    const step = 1;

    let e = document.querySelector(elem);
    let n = 0;
    let t = Math.round(time/(num/step));
    let interval = setInterval(() => {
        n = n + step;
        if(n == num) {
              clearInterval(interval);
         }
    e.innerHTML = n;
    },
t);
  };
  
  outNum(40, '.count');


});