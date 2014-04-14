var gaq = require('analytics');

module.exports = function(category, el, type, capture){
  var evtCat = category || 'document';
  var evtEl = el || document;
  var evtType = type || 'blur';
  var evtCapture = capture || true;

  function handler(el){
    var target;

    // set target based on browser support
    if (el.srcElement){
      target = el.srcElement;
    }
    else {
      target = el.target;
    }

    // ensure its an input
    if (target.tagName !== "INPUT"){
      return;
    }

    // if the element isn't ignored
    if (!target.classList.contains('js-ignore-track-event')){
      if (!target.value){
        gaq.trackEvent({
          category: evtCat,
          label: 'skipped',
          value: target.name
        });
      }
      else {
        gaq.trackEvent({
          category: evtCat,
          label: 'completed',
          value: target.name
        });
      }
    }
  }

  // stupid IE first
  if (evtEl.attachEvent) {
    evtEl.attachEvent('onfocusout', handler);
  }
  else if (evtEl.addEventListener) {
    evtEl.addEventListener(evtType, handler, evtCapture);
  }
};