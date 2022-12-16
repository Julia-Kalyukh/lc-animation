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

  function outNum(num, elem) {

    let p = document.querySelector('progress'); 

    const time = 1500;
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
      p.setAttribute('value', n);
    }, t)
  };

  outNum(40, '.count');

});