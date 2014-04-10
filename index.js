var gaq = require('analytics');

module.exports = function(category, el, type, capture){
  var evtCat = category || 'document';
  var evtEl = el || document;
  var evtType = type || 'blur';
  var evtCapture = capture || true;

  function handler(el){
    // IE hack - ensure el.srcElement.name isnt undefined
    if (el.srcElement.name != null){
      if (!el.srcElement.value){
        gaq.trackEvent({
          category: evtCat,
          action: evtType,
          label: 'skipped',
          value: el.srcElement.name
        });
      }
      else {
        gaq.trackEvent({
          category: evtCat,
          action: evtType,
          label: 'completed',
          value: el.srcElement.name
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